import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  reactStrictMode: false,
  typedRoutes: true,
}

export default nextConfig
