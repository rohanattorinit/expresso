import { ICreatePost } from "@/validations/post";

import prisma from "@/lib/prisma";

export const createPost = async (post: ICreatePost) => {
  const data = await prisma.post.create({
    data: post,
  });

  return data;
};
