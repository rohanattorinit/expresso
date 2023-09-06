import prisma from "@/lib/prisma";

export const getPaginatedPosts = async (
  page?: string,
  pageSize?: string,
  search?: string,
  categories?: string | string[],
  authorId?: string
) => {
  const currentPage = page && !isNaN(Number(page)) ? Number(page) : 1;
  const limit = pageSize && !isNaN(Number(pageSize)) ? Number(pageSize) : 12;
  const where: any = {};
  if (search) {
    where.OR = [{ title: { contains: search, mode: "insensitive" } }];
  }

  if (categories !== undefined) {
    if (typeof categories === "string") {
      // If categories is a single string, convert it to an array with one element
      where.category = {
        hasEvery: [categories],
      };
    } else if (Array.isArray(categories) && categories.length > 0) {
      where.category = {
        hasEvery: categories,
      };
    }
  }

  if (authorId) {
    where.authorId = authorId;
  }

  const [totalCountResult, paginatedDataResult] = await Promise.allSettled([
    prisma.post.count({ where }),
    prisma.post.findMany({
      where: where,
      skip: (currentPage - 1) * limit,
      take: limit,
      orderBy: { updatedAt: "desc" },
    }),
  ]);

  if (totalCountResult.status === "rejected") {
    throw new Error(totalCountResult.reason);
  }
  if (paginatedDataResult.status === "rejected") {
    console.log(paginatedDataResult.reason);
    throw new Error(paginatedDataResult.reason);
  }

  const totalCount = totalCountResult.value;
  const paginatedData = paginatedDataResult.value;

  const totalPages = Math.ceil(totalCount / limit);

  return { paginatedData, totalPages, currentPage };
};
