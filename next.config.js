const inDevelopment = process.env.NODE_ENV === "development";

const base = "/advanced-react-pattern";

const nextConfig = {
  assetPrefix: inDevelopment ? "" : base,
  basePath: inDevelopment ? "" : base,
  distDir: "build",
};

module.exports = nextConfig;
