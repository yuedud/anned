/**
 * @date 2020/8/19/ 18:13
 * @description 测试入口
 */
import React, {Component} from 'react';
import Tag from './tag';
import {toast} from "@/toast";


toast("1！",'top');
toast("2！",'top');
toast("3！",'top');
toast("4！",'top');
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false
        };
    }

    handleShowModal() {
        this.setState({
            isShowModal: !this.state.isShowModal
        });
    }
    render() {
        return (
            <div>
                <Tag content={'tag'} type={"magenta"} background={true} />
                <Tag content={'tag'} type={"red"} background={false} />
                <Tag content={'tag'} type={"purple"} background={true} />
                <button onClick={e => this.handleShowModal(e)}>触发loading</button>
            </div>
        );
    }
}

export default App;
