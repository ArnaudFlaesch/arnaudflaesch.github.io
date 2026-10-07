import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.STATIC_EXPORT === "true" ? "export" : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets"), path.join(__dirname, "src")],
    additionalData: `@use "src/assets/colors.scss" as *;`
  }
};

export default nextConfig;
