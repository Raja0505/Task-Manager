import { getResponse } from "@/helper/error";
import { Task } from "@/model/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const singleuser = await Task.findById(taskId);
    return NextResponse.json(singleuser);
  } catch (error) {
    console.log(error);
    return getResponse("Failed to Get single user", 201, false);
  }
}

export async function POST() {}

export async function PUT(request, { params }) {
  const { taskId } = params;
  try {
    const { title, content, status } = await request.json();
    const task = await Task.findById(taskId);

    task.title = title;
    task.content = content;
    task.status = status;

    const updatedtask = await task.save();
    return NextResponse.json(updatedtask, {
      message: "you tasks are successfully updated",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({
      _id: taskId,
    });
    return getResponse("Task deleted...", 200, true);
  } catch (error) {
    console.log(error);
    return getResponse("Problem in Deleting", 404, false);
  }
}
