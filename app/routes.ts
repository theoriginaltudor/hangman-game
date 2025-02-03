import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { Routes } from "./lib/utils";

export default [
  index("routes/home/home.tsx"),
  layout("layouts/nav-layout/nav-layout.tsx", [
    route(Routes.category, "routes/category/category.tsx"),
    route(Routes.instructions, "routes/instructions/instructions.tsx"),
  ]),
  layout("routes/game/layout/game-layout.tsx", { id: "game-layout" }, [
    route(`${Routes.ingame}/:category`, "routes/game/game.tsx"),
  ]),
  route("/mark-selected", "routes/mark-selected.ts"),
  route("/reset", "routes/reset.ts"),
] satisfies RouteConfig;
