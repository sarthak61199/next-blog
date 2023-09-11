import db from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Post } from "@prisma/client";
import { slugify } from "@/lib/utils";
import authOptions from "@/lib/next-auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id as string;
    const { title, desc, catSlug, imgUrl }: Post = await req.json();
    const finalSlug = slugify(title);
    const data = await db.post.create({
      data: {
        title,
        desc,
        catSlug,
        imgUrl,
        slug: finalSlug,
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
