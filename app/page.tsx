import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2 justify-between items-center">
        <h1 className="text-3xl font-semibold">Welcome!</h1>
        <p>Create an account or sign in</p>
      </div>
      <div className="flex flex-row justify-between align-middle gap-4 pt-6">
        <Button
          asChild
          variant={"default"}
          size={"lg"}
          className="hover:bg-red-600 min-w-[120px]"
        >
          <Link href="/sign-up">Sign Up</Link>
        </Button>
        <Button
          asChild
          variant={"default"}
          size={"lg"}
          className="hover:bg-red-600 min-w-[120px]"
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
