import styles from "../../public/styles/content.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  children,
}: Props) {
  
  return (
    <>
      <div className={"container"}>
        <article>
          <header>
            <h1>{title}</h1>
          </header>
          <div className={styles.content}>{children}</div>
        </article>
      </div>
    </>
  );
}
