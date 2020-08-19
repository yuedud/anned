/**
 * @date 2020/8/19/ 18:13
 * @description 测试入口
 */
import React, {Component} from 'react';
import Tag from './tag';
import {toast} from './toast';
import Modal from './modal';


// toast("您输入的信息有误！",'top');
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false
        }
    }

    handleHideModel() {
        this.setState({
            isShowModal: false
        })
    }
    handleShowModal() {
        this.setState({
            isShowModal: true
        })
    }
    render() {
        let {isShowModal} = this.state;
        return (
            <div>
                <Tag content={'tag'} type={"magenta"} background={true} />
                <Tag content={'tag'} type={"red"} background={false} />
                <Tag content={'tag'} type={"purple"} background={true} />
                <Tag content={'tag'} type={"blue"} />
                <Tag content={'tag'} type={"geekblue"} background={true} />
                <Tag content={'tag'} type={"cyan"} background={true} />
                <button onClick={e => this.handleShowModal(e)}>触发modal</button>
                {
                    isShowModal && <Modal
                        message={'此操作将永久删除该文件, 是否继续?'}
                        onCancel={e => this.handleHideModel(e)}
                    />
                }
            </div>
        );
    }
}

export default App;
