import * as z from "zod";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

// schema for JSON objects
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

export const createPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.string().min(1, "Image is required"),
  contentHtml: z.object({
    html: z.string().min(1, "HTML content is required"),
  }),
  contentJson: jsonSchema,
  likesCount: z.number(),
  categories: z.array(z.string()),
  authorId: z.string().min(1, "AuthorId is required"),
});

export type ICreatePost = z.infer<typeof createPostSchema>;

export const getPostsParamsSchema = z.object({
  page: z.string().optional(),
  page_size: z.string().optional(),
  category: z.union([z.string(), z.array(z.string())]).optional(),
  search: z.string().optional(),
  authorId: z.string().optional(),
});
