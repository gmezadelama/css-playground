import React from "react";
import classNames from "classnames";
import { ICollapsibleProps, ICollapsibleState } from "./Collapsible.type";
import { Post } from "./mockdata";
import styles from "./Collapsible.module.scss";

export default class Collapsible extends React.Component<
  ICollapsibleProps,
  ICollapsibleState
> {
  constructor(props: ICollapsibleProps) {
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
    const { post } = this.props;
    return (
      <div className={styles.postContainer}>
        <div className={styles.title}>
          <h2>{post.title}</h2>
        </div>
        <div
          className={classNames(styles.collapsibleSection, {
            [styles.collapsed]: this.state.collapsed
          })}
        >
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: post.text }}
          />
          <div className={styles.authorSection}>
            <div className={styles.author}>-{post.author}-</div>
          </div>
          <div className={styles.urlSection}>
            <div className={styles.url}>
              <a target="_blank" href={post.url}>
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
