import styles from "./layout.module.css";
import Link from "next/link";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href={"/products/man"}>Man</Link>
        <Link href={"/products/woman"}>Woman</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
