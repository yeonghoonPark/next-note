import Image from "next/image";

// import styles from "./page.module.css";

import Counter from "@/components/Counter";
import os from "os"; // node API's
import Link from "next/link";

export default function Home() {
  // console.log(os.hostname());
  console.log("hello server");
  return (
    <>
      <h1>홈</h1>
      <Counter />
      <Image
        src=' https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        width={400}
        height={400}
      />
      <Link href={"/park"}>Park</Link>
    </>
  );
}
