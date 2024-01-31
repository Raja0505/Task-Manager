import { httpAxios } from "@/helper/http";

export async function signUp(user) {
  const result = await httpAxios.post("/api/users", user);
  return result;
}
