"use client";

import { createUserSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Lock, User } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput, FormPassword } from "@/components/molecules/Form";

import { ICreateUser, initialValues } from "./helper";

const CreateUserForm = ({
  onSubmit,
}: {
  onSubmit: (values: ICreateUser) => Promise<void>;
}) => {
  const form = useForm<ICreateUser>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolver: zodResolver(createUserSchema),
    defaultValues: initialValues,
  });
  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          className="py-6 rounded-lg"
          name="name"
          control={form.control}
          icon={<User className="w-5 h-5 stroke-slate-400" />}
          placeholder="Full Name"
        />
        <FormInput
          className="py-6 rounded-lg"
          name="email"
          control={form.control}
          icon={<AtSign className="w-5 h-5 stroke-slate-400" />}
          placeholder="Email"
        />
        <FormPassword
          className="py-6 rounded-lg"
          name="password"
          control={form.control}
          icon={<Lock className="w-5 h-5 stroke-slate-400" />}
          placeholder="Password"
        />
        <Button
          isLoading={isSubmitting}
          className="w-full rounded-lg"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default CreateUserForm;
