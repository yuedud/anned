import React, {Component} from "react";
import PropTypes from 'prop-types';
import {clazz} from "../utils/clazz";
import style from './index.less';

class Index extends Component {

    render() {
        const {content, type, background = false, styles} = this.props;
        return (
            <>
               <span
                   style={styles}
                   className={
                        clazz([
                            style.tag,
                            type === "magenta"&& background === false && style.magenta,
                            type === "magenta" && background === true && style.magentaBg,
                            type === "red" && background === false && style.red,
                            type === "red" && background === true && style.redBg,
                            type === "volcano" && background === false && style.volcano,
                            type === "volcano" && background === true && style.volcanoBg,
                            type === "orange" && background === false && style.orange,
                            type === "orange" && background === true && style.orangeBg,
                            type === "gold" && background === false && style.gold,
                            type === "gold" && background === true && style.goldBg,
                            type === "lime" && background === false && style.lime,
                            type === "lime" && background === true && style.limeBg,
                            type === "green" && background === false && style.green,
                            type === "green" && background === true && style.greenBg,
                            type === "blue" && background === false && style.blue,
                            type === "blue" && background === true && style.blueBg,
                            type === "cyan" && background === false && style.cyan,
                            type === "cyan" && background === true && style.cyanBg,
                            type === "geekblue" && background === false && style.geekblue,
                            type === "geekblue" && background === true && style.geekblueBg,
                            type === "purple" && background === false && style.purple,
                            type === "purple" && background === true && style.purpleBg,
                        ])
                    }
               >
                   {content}
               </span>
            </>
        )
    }
}
Index.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.oneOf(
        ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'blue', 'cyan', 'geekblue', 'purple']
    ),
    background: PropTypes.bool,
    styles: PropTypes.object,
}
export default Index;
