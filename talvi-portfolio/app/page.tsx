import HomeContent from "./components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Talvi K. Porftolio",
    description: "Portfolio to display whatever I've worked on.",
  }

export default function Home() {
  return (
    <HomeContent/>
  );
}
