import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getProducts } from "@/service/products";

import MeowArticle from "@/components/MeowArticle";

// export const revalidate = 3;

export const metadata: Metadata = {
  title: "products site | all of products",
  description: "check out the products ",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 페이지</h1>
      <ul>
        {products.map((cV, i) => (
          <li key={i}>
            <Link href={`/products/${cV.id}`}>{cV.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
