"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import CreateUserForm from "./CreateUserForm";
import { ICreateUser } from "./helper";

export default function SignupWrapper() {
  const onSubmit = async (values: ICreateUser) => {
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      throw new Error("An error occured while signing up...");
    }
  };

  const handleOAuth = async () => {
    signIn("google");
  };
  return (
    <section className="flex justify-center lg:container lg:items-center lg:h-screen">
      <Card className="w-5/6 lg:p-8 lg:grid lg:grid-cols-2 shadow-[rgba(7,_65,_210,_0.1)_0px_10px_32px]">
        <CardHeader className="items-center order-2 lg:justify-center">
          <Image
            height={480}
            width={480}
            className="w-52 h-52 lg:w-[30rem] lg:h-[30rem]"
            src={
              "https://illustrations.popsy.co/violet/cute-dog-with-a-bone.svg"
            }
            alt="serene-header"
          />
        </CardHeader>
        <CardContent className="order-1 w-5/6 mx-auto my-2">
          <h1 className="py-6 text-2xl font-semibold text-left text-gray-600 lg:block">
            Embark on the musical Journey: Sign Up Now!
          </h1>
          <CreateUserForm onSubmit={onSubmit} />
          <Separator orientation="horizontal" className="my-8" />
          <Button
            onClick={handleOAuth}
            className="w-full py-6"
            variant={"outline"}
          >
            <Image
              height={480}
              width={480}
              className="w-5 h-5 mx-4"
              src="/google.svg"
              alt="google"
            />
            <p className="text-gray-700 ">Continue with Google</p>
          </Button>
          <CardFooter className="justify-center order-2 pt-6">
            <h4 className="text-sm text-gray-600">
              Already have an account?
              <Link href="/login" className="font-medium text-primary">
                Log In
              </Link>
            </h4>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}
