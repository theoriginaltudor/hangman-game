import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { Routes } from "./lib/utils";

export default [
  index("routes/home.tsx"),
  layout("layouts/nav-layout.tsx", [
    route(Routes.category, "routes/category.tsx"),
    route(Routes.instructions, "routes/instructions.tsx"),
  ]),
  route(Routes.ingame, "routes/game.tsx"),
] satisfies RouteConfig;
