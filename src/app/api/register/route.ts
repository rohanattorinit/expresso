import { NextResponse } from "next/server";
import { createUserSchema } from "@/validations/auth";
import bcrypt from "bcrypt";
import * as z from "zod";

import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const json = await req.json();
    console.log(json);
    const body = createUserSchema.parse(json);
    const { email, name, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
};
