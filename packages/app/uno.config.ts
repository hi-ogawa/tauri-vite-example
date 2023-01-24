import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { antdPreset } from "@hiogawa/unocss-preset-antd";

export default defineConfig({
  theme: {
    aria: {
      "current-page": 'current="page"',
    },
  },
  presets: [antdPreset(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
