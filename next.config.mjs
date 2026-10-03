import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.STATIC_EXPORT === "true" ? "export" : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, "assets")],
    additionalData: `@use "colors.scss" as *;`
  }
};

export default nextConfig;
