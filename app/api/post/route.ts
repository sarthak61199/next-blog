import db from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Post } from "@prisma/client";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json(
      { message: "You are unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { title, desc, catSlug, imgUrl, slug, userId }: Post =
      await req.json();
    const data = await db.post.create({
      data: {
        title,
        desc,
        catSlug,
        imgUrl,
        slug,
        userId,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
