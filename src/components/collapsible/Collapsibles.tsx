import React from "react";
import Collapsible from "./Collapsible";
import { mockData } from "./mockdata";
import styles from "./Collapsible.module.scss";

const Collapsibles: React.FC = () => {
  return (
    <div className={styles.container}>
      {mockData.map((post, index) => {
        return <Collapsible key={index} post={post} />;
      })}
    </div>
  );
};

export default Collapsibles;
