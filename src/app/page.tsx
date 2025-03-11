import { redirect } from "next/navigation";

export default function Home() {
  // Mocking purposes, redirect to orders page
  redirect("/orders/1");
}
