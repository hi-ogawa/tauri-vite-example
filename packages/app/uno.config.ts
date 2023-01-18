import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    spinner: `
      animate-spin
      rounded-full
      border-2 border-gray-500 border-t-gray-300 border-l-gray-300
    `,
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
