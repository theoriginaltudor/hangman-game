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
  layout("layouts/game-layout.tsx", [
    route(`${Routes.ingame}/:category`, "routes/game.tsx"),
  ]),
] satisfies RouteConfig;
