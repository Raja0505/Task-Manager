import { httpAxios } from "@/helper/http";

export async function Addtask(task) {
  const result = await httpAxios
    .post("api/Tasks", task)
    .then((response) => response.data);
  return result;
}
