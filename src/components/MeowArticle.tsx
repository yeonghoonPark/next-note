"use client";

import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [data, setData] = useState("Loading...");

  const getData = async () => {
    const res = await fetch("https://meowfacts.herokuapp.com");
    const json = await res.json();
    setData(json.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return <article className={styles.article}>{data}</article>;
}
