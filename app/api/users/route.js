import { NextRequest, NextResponse } from "next/server";
import { connectMongoDb } from "@/helper/db";
import { User } from "@/model/user";
import bcrypt from "bcryptjs";

connectMongoDb();
//Getting request;
export async function GET(request) {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }
  return NextResponse.json(users);
}

//Creating users....
export async function POST(request) {
  const { name, role, email, password } = await request.json();

  const user = new User({
    name,
    email,
    password,
  });

  try {
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    await user.save();

    const response = NextResponse.json(user, {
      message: "user created",
      status: 200,
      success: true,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed creating user",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
