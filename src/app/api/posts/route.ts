import { NextResponse } from "next/server";
import { createPost, getPaginatedPosts } from "@/services/posts";
import { createPostSchema, getPostsParamsSchema } from "@/validations/post";
import * as z from "zod";

import { getSearchParams } from "@/lib/utils";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const params = getPostsParamsSchema.parse(getSearchParams(searchParams));

    const { page, page_size, search, category, authorId } = params;
    const { paginatedData, totalPages, currentPage } = await getPaginatedPosts(
      page,
      page_size,
      search,
      category,
      authorId
    );

    return NextResponse.json(
      { data: paginatedData, totalPages, currentPage },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const json = await req.json();
    const body = createPostSchema.parse(json);

    const post = await createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
};
