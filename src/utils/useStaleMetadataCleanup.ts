"use client";

import { useEffect } from "react";

const metaKey = (meta: HTMLMetaElement) => meta.getAttribute("name") ?? meta.getAttribute("property");

/**
 * On the first client-side navigation, Next.js inserts the new page's <meta> tags but leaves the
 * server-rendered ones in <head>, so selectors pick up the previous page's values.
 * This removes each server-rendered tag as soon as a tag with the same name/property replaces it.
 */
export function useStaleMetadataCleanup() {
  useEffect(() => {
    const serverRendered = new Set(document.head.querySelectorAll<HTMLMetaElement>("meta[name], meta[property]"));

    const observer = new MutationObserver((mutations) => {
      const addedKeys = new Set(
        mutations
          .flatMap((mutation) => [...mutation.addedNodes])
          .filter((node) => node instanceof HTMLMetaElement)
          .map(metaKey)
      );
      for (const meta of serverRendered) {
        if (meta.isConnected && addedKeys.has(metaKey(meta))) {
          meta.remove();
          serverRendered.delete(meta);
        }
      }
      if (serverRendered.size === 0) {
        observer.disconnect();
      }
    });

    observer.observe(document.head, { childList: true });
    return () => observer.disconnect();
  }, []);
}
