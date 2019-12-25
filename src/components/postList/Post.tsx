import React from "react";
import classNames from "classnames";
import { IPostProps, IPostState } from "./Post.type";
import styles from "./Post.module.scss";

export default class Post extends React.Component<IPostProps, IPostState> {
  constructor(props: IPostProps) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  private collapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  public render(): JSX.Element {
    const { data } = this.props;
    return (
      <div className={styles.postContainer}>
        <div className={styles.title}>
          <h2>{data.title}</h2>
        </div>
        <div
          className={classNames(styles.collapsibleSection, {
            [styles.collapsed]: this.state.collapsed
          })}
        >
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
          <div className={styles.authorSection}>
            <div className={styles.author}>-{data.author}-</div>
          </div>
          <div className={styles.urlSection}>
            <div className={styles.url}>
              <a target="_blank" href={data.url}>
                {"Go to original post"}
              </a>
            </div>
          </div>
          <div
            className={classNames({ [styles.fadeOut]: this.state.collapsed })}
          />
        </div>

        <div className={styles.collapseText} onClick={this.collapse}>
          {this.state.collapsed ? "Read more" : "Read less"}
        </div>
      </div>
    );
  }
}
