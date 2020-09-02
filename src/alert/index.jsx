import React, { Component } from 'react';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';
import styles from './index.less';
import { clazz } from '../utils/clazz';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
    };
  }

  componentDidMount() {
    const { timer = 3000 } = this.props;
    setTimeout(() => this.setState({ showAlert: false }), timer);
  }

    renderAlertModal = () => {
      const { type = 'normal', title, style } = this.props;
      return (
        <div
          style={style}
          className={
                    clazz([
                      styles.alertBg,
                      type === 'normal' && styles.normal,
                      type === 'warn' && styles.warn,
                      type === 'error' && styles.error,
                      type === 'success' && styles.success,
                    ])
                }
        >
          {title}
        </div>
      );
    };

    render() {
      const { showAlert } = this.state;
      return (
        <>
          {showAlert && this.renderAlertModal()}
        </>
      );
    }
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['normal', 'warn', 'error', 'success']),
  timer: PropTypes.number,
  style: PropTypes.object,
};

export default function alert(title, type, timer = 3000) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  reactDom.render(<Index title={title} type={type} timer={timer} />, div);
  setTimeout(
    () => document.body.removeChild(div), timer,
  );
}
