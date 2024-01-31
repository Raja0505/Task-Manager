import { User } from "@/model/user";
import { NextResponse } from "next/server";

//𝗚𝗲𝘁𝘁𝗶𝗻𝗴 𝘀𝗶𝗻𝗴𝗹𝗲 𝘂𝘀𝗲𝗿

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const single = await User.findById(userId);
    return NextResponse.json(single, {
      message: "User Found",
      status: 201,
      success: true,
    });
  } catch (error) {
    return NextResponse({ message: "failed to get user", status: 404 });
  }
}

//𝗗𝗲𝗹𝗲𝘁𝗶𝗻𝗴 𝘂𝘀𝗲𝗿𝘀
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({ message: "User Deleted", status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "failed to delete" });
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, role } = await request.json();

  try {
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.role = role;
    const updateduser = await user.save();
    return NextResponse.json(updateduser);
  } catch (error) {
    return NextResponse({ message: "Updation failed", error });
  }
}
