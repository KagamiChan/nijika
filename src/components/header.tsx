import { Menu, Search } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { SiteTitle } from "~/components/site-title";
import { ThemeChooser } from "./theme-chooser";
import { SearchLink } from "./search-link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <SiteTitle className="flex items-center gap-2 text-4xl font-semibold" />
        <Link
          href="/"
          className="whitespace-nowrap text-foreground transition-colors hover:text-foreground"
        >
          首页
        </Link>
        <Link
          href="/about"
          className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
        >
          关于
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">打开导航菜单</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <SiteTitle className="flex items-center gap-2 text-2xl font-semibold" />
            <Link href="/" className="hover:text-foreground">
              首页
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground"
            >
              关于
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <SearchLink />
        <ThemeChooser />
      </div>
    </header>
  );
};
