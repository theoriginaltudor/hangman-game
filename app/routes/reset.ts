import { redirect } from "react-router";
import { reset } from "~/DB/db.server";
import { Routes } from "~/lib/utils";

export async function loader() {
  reset();
  redirect(Routes.home);
}
