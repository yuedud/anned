import React, {Component} from 'react';
import styles from './index.less';
import PropTypes from "prop-types";
import {clazz} from "@/utils/clazz";

class Index extends Component {

    constructor(props) {
        super(props);
    }

    renderLoading = (type) => {
        if (type === 'round')
            return(
                <>
                    <i className={styles.ltRound}> </i>
                    <i className={styles.rtRound}> </i>
                    <i className={styles.lbRound}> </i>
                    <i className={styles.rbRound}> </i>
                </>
            )
        if (type === 'curve')
            return (
                <>
                    <div className={styles.curve}> </div>
                </>
            )
    }


    render() {
        const {type = 'round', children, onLoading} = this.props;
        return (
            <div>
                {
                    children && onLoading ?
                        <div className={styles.box}>
                            {children}
                            <div className={clazz([styles.animation, styles.mask])}>
                                <div className={styles.round}>
                                    {this.renderLoading(type)}
                                </div>
                            </div>
                        </div>
                    :
                        children !== undefined ?
                            children
                        :
                            <div className={styles.round}>
                                {this.renderLoading(type)}
                            </div>
                }
            </div>
        )
    }
}

Index.propTypes = {
    type: PropTypes.oneOf(['round','curve']),
    onLoading: PropTypes.bool
}

export default Index;
