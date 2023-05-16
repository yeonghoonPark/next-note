import React from "react";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }

  return <h1>{params.slug}페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skrit"];
  return products.map((cV) => ({
    slug: cV,
  }));
}
