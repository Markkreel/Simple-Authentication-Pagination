"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [lastName, setLastName] = useState<string>("");

  useEffect(() => {
    // Clear previous user data
    setLastName("");

    // Get current user data from localStorage
    const currentUserStr = localStorage.getItem("currentUser");
    if (currentUserStr) {
      try {
        const currentUser = JSON.parse(currentUserStr);
        setLastName(currentUser.lastName || "");
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }

    // Cleanup function to clear user data when component unmounts
    return () => {
      setLastName("");
    };
  }, []);

  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Welcome, {lastName}!</h1>
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
