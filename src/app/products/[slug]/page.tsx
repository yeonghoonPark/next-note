import React from "react";
import { notFound, redirect } from "next/navigation";
import { getProduct, getProducts } from "@/service/products";
import GoPrucuctsBtn from "@/components/GoPrucuctsBtn";

import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  // if (!product) notFound();

  if (!product) redirect("/products");

  return (
    <>
      <h1>{product.name}페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={400}
        height={400}
      />
      <GoPrucuctsBtn />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((cV) => ({
    slug: cV.id,
  }));
}
