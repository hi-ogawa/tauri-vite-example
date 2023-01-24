import { z } from "zod";

export const Z_PIPEWIRE_OBJECT = z.object({
  id: z.number(),
  type: z.string(),
  permissions: z.string().array(),
  info: z
    .object({
      props: z.record(z.unknown()).optional(), // all we need should be inside this
      params: z.record(z.unknown()).optional(),
    })
    .optional(),
  props: z.record(z.unknown()).optional(),
});
