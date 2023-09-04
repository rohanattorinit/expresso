import Link from "next/link";

import { ThemeButton } from "../molecules/ThemeButton";

const Navbar = () => {
  return (
    <header>
      <nav className=" container flex items-center justify-between py-4 md:py-8">
        <Link
          href="/posts"
          className=" scroll-m-20 text-2xl font-bold lg:text-3xl"
        >
          Expresso
        </Link>
        <div className="flex gap-10 items-center">
          <Link
            href="/author/"
            className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight hover:underline hover:underline-offset-4"
          >
            Write
          </Link>
          <ThemeButton />
        </div>
      </nav>
      <div className="w-full border-b-2 border-foreground squiggle" />
    </header>
  );
};

export default Navbar;
