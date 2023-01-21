import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { antdPreset } from "@hiogawa/unocss-preset-antd";

export default defineConfig({
  presets: [antdPreset(), presetUno()],
  shortcuts: {},
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
