import React, { Component } from 'react';
import style from './index.less';
import onClickOutside from 'react-onclickoutside';
class Index extends Component {
    handleClickOutside = (e) => {
        this.handleClose(e);
    }
    handleClose = (e) => {
        this.props.onCancel(e);
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.handleClose(e);
        }
    }
    componentDidMount() {
        let {
            isEscClose, // 按 esc 键是否关闭
        } = this.props;
        if (isEscClose) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
    }

    render() {
        let {
            title = '提示', // 标题
            cancelText = '取消', // 取消按钮文字
            okText = '确认', // 确认按钮文字
            onOk, // 点击 ok 触发的回调
            onCancel, // 点击 cancel 触发的回调
            message,
            cancelDisabled, // 取消按钮不可点击
            okDisabled, // 确认按钮不可点击
            isShowClose = true, // 是否显示右上角的 × 号
        } = this.props;
        return (
            <div className={style.wrapper}>
                <div className={style.shadow} onClick={(e) => this.handleClose(e)} />
                <div className={style.container}>
                    <header className={style.header}>
                        <div className={style.title}>{title}</div>
                        {isShowClose && <div className={style.close} onClick={(e) => this.handleClose(e)}>×</div>}
                    </header>
                    <article className={style.article}>
                        {message}
                        {this.props.children ? this.props.children : null}
                    </article>
                    <footer className={style.footer}>
                        {cancelText && <button className={cancelDisabled ? style.notAllowed : style.cancelAllowed} onClick={cancelDisabled ? null : onCancel}>{cancelText}</button>}
                        {okText && <button className={okDisabled ? style.notAllowed : style.okAllowed} onClick={okDisabled ? style.notAllowed : onOk}>{okText}</button>}
                    </footer>
                </div>
            </div>
        );
    }
}
export default onClickOutside(Index);

