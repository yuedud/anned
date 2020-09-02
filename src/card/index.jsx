import React, { Component } from 'react';
import styles from './index.less';

class Index extends Component {
  render() {
    const { content, children, style } = this.props;
    return (
      <>
        <span style={style} className={styles.card}>
          {
            children || <span>{content}</span>
          }
        </span>
      </>
    );
  }
}

export default Index;
