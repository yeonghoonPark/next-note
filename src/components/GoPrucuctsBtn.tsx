"use client";

import { useRouter } from "next/navigation";

export default function GoPrucuctsBtn() {
  const router = useRouter();
  return (
    <button type='button' onClick={() => router.push("/products")}>
      Back
    </button>
  );
}
