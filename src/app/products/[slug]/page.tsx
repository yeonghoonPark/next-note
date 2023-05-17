import React from "react";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/service/products";

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

  if (!product) notFound();

  return <h1>{product.name}페이지</h1>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((cV) => ({
    slug: cV.id,
  }));
}
