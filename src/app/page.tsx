"use client";

import Image from "next/image";
import { Editor } from "novel";

export default function Home() {
  return (
    <main className="container min-h-screen">
      <div className="py-5 flex gap-5">
        <div>
          <h3>Title</h3>
          <input type="text" className="ring" />
        </div>
        <div>
          <h3>Category</h3>
          <input type="text" className="ring" />
        </div>
      </div>
      <Image
        className="py-5"
        src={"/vercel.svg"}
        alt="img"
        height={200}
        width={200}
      />
      <Editor
        onDebouncedUpdate={(e) => console.log(e?.getHTML())}
        defaultValue={
          "<h1>Hello there!</h1><p>text lorem <strong>ipsum</strong> </p><p><br></p>"
        }
      />
    </main>
  );
}
