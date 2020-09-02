import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clazz } from '../utils/clazz';
import styles from './index.less';

class Index extends Component {
  render() {
    const {
      content, type, background = false, style,
    } = this.props;
    return (
      <>
        <span
          styles={style}
          className={
                        clazz([
                          styles.tag,
                          type === 'magenta' && background === false && styles.magenta,
                          type === 'magenta' && background === true && styles.magentaBg,
                          type === 'red' && background === false && styles.red,
                          type === 'red' && background === true && styles.redBg,
                          type === 'volcano' && background === false && styles.volcano,
                          type === 'volcano' && background === true && styles.volcanoBg,
                          type === 'orange' && background === false && styles.orange,
                          type === 'orange' && background === true && styles.orangeBg,
                          type === 'gold' && background === false && styles.gold,
                          type === 'gold' && background === true && styles.goldBg,
                          type === 'lime' && background === false && styles.lime,
                          type === 'lime' && background === true && styles.limeBg,
                          type === 'green' && background === false && styles.green,
                          type === 'green' && background === true && styles.greenBg,
                          type === 'blue' && background === false && styles.blue,
                          type === 'blue' && background === true && styles.blueBg,
                          type === 'cyan' && background === false && styles.cyan,
                          type === 'cyan' && background === true && styles.cyanBg,
                          type === 'geekblue' && background === false && styles.geekblue,
                          type === 'geekblue' && background === true && styles.geekblueBg,
                          type === 'purple' && background === false && styles.purple,
                          type === 'purple' && background === true && styles.purpleBg,
                        ])
                    }
        >
          {content}
        </span>
      </>
    );
  }
}
Index.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'blue', 'cyan', 'geekblue', 'purple'],
  ),
  background: PropTypes.bool,
  style: PropTypes.object,
};
export default Index;
