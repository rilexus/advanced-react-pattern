{
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { ssr: true }],
    ["transform-define", ".env.js"]
  ]
}
