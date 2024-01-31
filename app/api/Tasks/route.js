const { Task } = require("@/model/task");
const next = require("next");
const { NextResponse } = require("next/server");
import { getResponse } from "@/helper/error";

export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks, { message: "successfully get the task" });
  } catch (error) {
    console.log(error);
    return getResponse("error in getting data", 404, false);
  }
}

export async function POST(request) {
  const { title, content, userId } = await request.json();
  try {
    const task = new Task({
      title,
      content,
      userId,
    });

    const taskcreated = await task.save();

    return NextResponse.json(taskcreated, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to create Task", status: 201 });
  }
}
