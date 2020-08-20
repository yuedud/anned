import React, {Component} from "react";
import reactDom from "react-dom";
import style from './index.less';
import {clazz} from "@/utils/clazz";

class Index extends Component {
    render() {
        const {content, position} = this.props;
        return (
            <>
                <span className={clazz([
                    style.toast,
                    position === 'top' && style.top,
                    position === 'center' && style.center,
                    position === 'bottom' && style.bottom,
                ])}>
                    {content}
                </span>
            </>
        )
    }
}
export let toast = (content, position = 'center', timer = 2000) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    reactDom.render(<Index content={content} position={position} />, div);
    setTimeout(
        ()=> document.body.removeChild(div),timer
    );
}
