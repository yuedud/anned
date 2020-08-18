import React, {Component} from "react";
import PropTypes from 'prop-types';
import {clazz} from "../utils/clazz";
import style from './index.less';

class Index extends Component {

    render() {
        const {content, type} = this.props;
        return (
            <>
               <span
                   className={
                        clazz([
                            style.tag,
                            type === "magenta" && style.magenta,
                            type === "red" && style.red,
                            type === "volcano" && style.volcano,
                            type === "orange" && style.orange,
                            type === "gold" && style.gold,
                            type === "lime" && style.lime,
                            type === "green" && style.green,
                            type === "blue" && style.blue,
                            type === "cyan" && style.cyan,
                            type === "geekblue" && style.geekblue,
                            type === "purple" && style.purple,
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
}
export default Index;
