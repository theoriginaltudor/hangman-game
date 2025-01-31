import { redirect } from "react-router";
import { reset } from "~/DB/db.server";
import { Routes } from "~/lib/utils";

export async function loader() {
  reset();
  return redirect(Routes.home);
}
