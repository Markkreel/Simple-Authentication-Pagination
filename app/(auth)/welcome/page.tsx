import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Thank you!</h1>
      <div className="pt-4">
        <Button
          asChild
          variant={"default"}
          size={"lg"}
          className="min-w-[120px] hover:bg-red-600"
        >
          <Link href="/">Return</Link>
        </Button>
      </div>
    </div>
  );
}
