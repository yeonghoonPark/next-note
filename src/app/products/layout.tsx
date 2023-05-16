import styles from "./layout.module.css";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <a href='/'>Man</a>
        <a href='/'>Woman</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
