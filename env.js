const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.assetPrefix": prod ? "/advanced-react-pattern" : "",
  "process.env.version": "0.0.1",
  "process.env.production": prod,
  "process.env.development": !prod,
};
