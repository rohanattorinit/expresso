import { createUserSchema } from "@/validations/auth";
import * as z from "zod";

export const initialValues = {
  name: "",
  email: "",
  password: "",
};

export type ICreateUser = z.infer<typeof createUserSchema>;
