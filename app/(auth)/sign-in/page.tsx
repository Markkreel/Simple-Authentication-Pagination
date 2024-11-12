import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center p-6">
        <Card className="w-[500px]">
          <CardHeader className="flex flex-col justify-center items-center">
            <CardTitle className="text-3xl">Welcome!</CardTitle>
            <CardDescription>Sign in or create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 pt-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username / Email</Label>
                  <Input id="username" placeholder="Username / Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="min-w-[120px] hover:bg-green-600"
            >
              <Link href="/welcome">Sign In</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              size={"lg"}
              className="hover:bg-red-600 hover:text-white min-w-[120px]"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </CardFooter>
        </Card>
        <div>
          <Button variant={"link"} size={"lg"}>
            <Link href="/">Or return home...</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
