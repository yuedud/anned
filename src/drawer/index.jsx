import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clazz } from '../utils/clazz';
import style from './index.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: true,
    };
  }

    handleClickOutside = () => {
      this.setState({
        showDrawer: false,
      });
    };

    renderDrawerModal = () => {
      const { type = 'normal', children, placement = 'top' } = this.props;
      const { showDrawer } = this.state;
      return (
        <div onClick={this.handleClickOutside} className={clazz([showDrawer && style.mask])}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={
                        clazz([
                          placement === 'top' && style.alertBgt,
                          placement === 'bottom' && style.alertBgb,
                          placement === 'left' && style.alertBgl,
                          placement === 'right' && style.alertBgr,
                          type === 'normal' && style.normal,
                          type === 'warn' && style.warn,
                          type === 'error' && style.error,
                          type === 'success' && style.success,
                        ])
                    }
          >
            {children}
          </div>
        </div>
      );
    }

    render() {
      const { showDrawer } = this.state;
      return (
        <>
          {showDrawer && this.renderDrawerModal()}
        </>
      );
    }
}

Index.propTypes = {
  type: PropTypes.oneOf(['normal', 'warn', 'error', 'success']),
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  children: PropTypes.any,
};

Index.defaultProps = {
  type: 'normal',
  placement: 'top',
  children: null,
};
export default Index;
