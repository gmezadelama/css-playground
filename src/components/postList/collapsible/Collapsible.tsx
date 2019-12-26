import React from "react";
import classNames from "classnames";
import { ICollapsibleProps, ICollapsibleState } from "./Collapsible.type";
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
    const showMoreText = this.props.showMoreText || "Show more";
    const showLessText = this.props.showLessText || "Show less";
    let collapsedHeightStyle = {};
    if (
      this.state.collapsed &&
      this.props.collapsedHeight &&
      this.props.collapsedHeight >= 0
    ) {
      collapsedHeightStyle = {
        maxHeight: `${this.props.collapsedHeight}px`
      };
    }
    return (
      <div>
        <div
          className={classNames(styles.collapsibleSection, {
            [styles.collapsed]: this.state.collapsed
          })}
          style={collapsedHeightStyle}
        >
          {this.props.children}
          <div
            className={classNames({ [styles.fadeOut]: this.state.collapsed })}
          />
        </div>
        <div className={styles.collapseText} onClick={this.collapse}>
          {this.state.collapsed ? showMoreText : showLessText}
        </div>
      </div>
    );
  }
}
