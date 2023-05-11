import Image from "next/image";
import styles from "./page.module.css";
import TablePage from "./Table";
export default function Home() {
  return (
    <main className={styles.main}>
      <TablePage data={[]} />
    </main>
  );
}
