import { NextResponse } from "next/server";

export const getResponse = (message, statuscode, success) => {
  return NextResponse.json(
    {
      message: message,
      success: success,
    },
    {
      statuscode: statuscode,
    }
  );
};
