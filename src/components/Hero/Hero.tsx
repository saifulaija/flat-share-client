
import Link from "next/link";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "./PageHeader";
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button";
import { Announcement } from "./Announcement";

export const Hero  = () => {
  return (
    <div className=" relative container">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="hidden md:block">
        Find Your Perfect Flat Share
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden"> Find Your Perfect Flat Share</PageHeaderHeading>
        <PageHeaderDescription>
        Discover amazing places to live with friendly roommates. Affordable, verified, and easy to book.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants(), "rounded-[6px]")}>
            Get Started
          </Link>
          <Link
            href="/components"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-[6px]"
            )}
          >
            Components
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
};


