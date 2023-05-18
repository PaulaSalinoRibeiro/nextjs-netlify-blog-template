import Prism from 'prismjs';
import Link from 'next/link';
import ArrowBack from "../../assets/arrow-back.svg";
import styles from "./styles.module.css"
import { useEffect } from 'react';

type Props = {
  title: string;
  date: string;
  subtitle: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  subtitle,
  children,
}: Props) {

  useEffect(() => {
    Prism.highlightAll();
  }, [children]);
  
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <span className={styles.date} >{date}</span>
          <Link href="/">
            <div>
              <ArrowBack width={18} height={18} fill={"#D4ADFC"} className={styles.arrow} />
              <span className={styles.link} >voltar</span>
            </div>
          </Link>
        </nav>
        <header>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{subtitle}</p>
        </header>
        <div className={styles.content}>{children}</div>
      </article>
    </div>
  );
}
