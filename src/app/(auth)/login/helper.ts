import { loginUserSchema } from "@/validations/auth";
import * as z from "zod";

export const initialValues = {
  email: "",
  password: "",
};

export type ILoginUser = z.infer<typeof loginUserSchema>;
