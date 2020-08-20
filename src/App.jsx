/**
 * @date 2020/8/19/ 18:13
 * @description 测试入口
 */
import React, {Component} from 'react';
import Tag from './tag';
import Loading from './loading';


// toast("您输入的信息有误！",'top');
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false
        }
    }

    handleShowModal() {
        this.setState({
            isShowModal: !this.state.isShowModal
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
                <button onClick={e => this.handleShowModal(e)}>触发loading</button>
                <Loading type={'round'} onLoading={isShowModal}>
                    <div style={{width:'300px',height:'500px',background:'red'}}>1234</div>
                </Loading>
            </div>
        );
    }
}

export default App;
