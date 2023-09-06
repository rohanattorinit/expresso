import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import PostItem from "./PostItem";

const Dashboard = () => {
  return (
    <section className="container py-16">
      <div className="flex justify-between py-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight scroll-m-20 lg:text-3xl">
            Posts
          </h1>
          <p className="py-2 text-lg text-muted-foreground">
            Create and manage posts
          </p>
        </div>
        <Button variant={"default"} disabled={false}>
          <Plus className="mr-2" />
          <p className="font-semibold ">New post</p>
        </Button>
      </div>
      <div className="border divide-y divide-border">
        {[1, 2].map((post) => (
          <PostItem key={post} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
