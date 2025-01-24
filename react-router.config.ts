import type { Config } from "@react-router/dev/config";
import { Routes } from "app/lib/utils";

export default {
  ssr: true,
  async prerender() {
    return [Routes.home, Routes.instructions, Routes.category];
  },
} satisfies Config;
