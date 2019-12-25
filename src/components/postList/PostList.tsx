import React from "react";
import Post from "./Post";
import { mockData } from "./mockdata";
import styles from "./Post.module.scss";

const PostList: React.FC = () => {
  return (
    <div className={styles.container}>
      {mockData.map((postInfo, index) => {
        return <Post key={index} data={postInfo} />;
      })}
    </div>
  );
};

export default PostList;
