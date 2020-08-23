/**
 * @date 2020/8/19/ 18:13
 * @description 测试入口
 */
import React, { Component } from 'react';
import { toast } from './toast';
import Tag from './tag';

toast('4！', 'top');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }

  handleShowModal() {
    const { isShowModal } = this.state;
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      isShowModal: !isShowModal,
    });
  }

  render() {
    return (
      <div>
        <Tag content="tag" type="magenta" background />
        <Tag content="tag" type="red" background={false} />
        <Tag content="tag" type="purple" background />
        <button onClick={(e) => this.handleShowModal(e)}>触发loading</button>
      </div>
    );
  }
}

export default App;
