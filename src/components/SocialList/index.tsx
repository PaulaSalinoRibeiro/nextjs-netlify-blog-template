import Twitter from "../../assets/twitter-alt.svg";
import GitHub from "../../assets/github-alt.svg";
import Linkedin from "../../assets/linkedin-alt.svg";

import styles from "./styles.module.css";

export function SocialList({}) {
  return (
    <div className={styles.container}>
      <a
        title="Twitter"
        href={`https://twitter.com/SalinoRPaula`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#D4ADFC"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/PaulaSalinoRibeiro`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#D4ADFC"} />
      </a>
      <a
        title="Linkedin"
        href={`https://linkedin.com/in/paula-salino-ribeiro/`}
        target="_blank"
        rel="noopener"
      >
        <Linkedin width={24} height={24} fill={"#D4ADFC"} />
      </a>
    </div>
  );
}
