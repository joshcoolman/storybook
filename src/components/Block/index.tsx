import React, { useEffect } from "react";
import styles from "./Block.module.css";

type Props = {
  name: string | undefined;
  setName: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Block: React.FC<Props> = (props: Props) => {
  const { name, setName } = props;

  useEffect(() => {
    console.log("Loaded!");
  }, []);

  const handleClick = () => {
    setName && setName((prev) => (prev === "Jabber" ? "Wockey" : "Jabber"));
  };

  return (
    <div className={styles.main}>
      <h1>{name}</h1>
      <button onClick={handleClick}>
        {name === "Jabber" ? "Wockey" : "Jabber"}
      </button>
    </div>
  );
};

export default Block;
