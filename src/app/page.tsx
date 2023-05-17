// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "./page.module.css";

import Counter from "@/components/Counter";
import os from "os"; // node API's

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log(os.hostname());
  console.log("hello server");
  return (
    <>
      <h1>홈</h1>
      <Counter />
    </>
  );
}
