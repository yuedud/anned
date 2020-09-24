/**
 * @date 2020/8/19/ 18:13
 * @description 测试入口
 */
import React, { Component } from 'react';
import toast from './toast';
import {LazyLoad} from '@lijianqiang01/annjs';
import reactDom from "react-dom";
// import Swiper from './swiper';
import SwiperLazy from './swiperLazy';
// toast('4！', 'top');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }

  componentDidMount() {
      // let lazy = new LazyLoad('#xxx' , ()=> {
      //     let doc = document.createElement('li');
      //     document.querySelector('#xxx').appendChild(doc);
      //     reactDom.render(1234,doc);
      // }, 500);
      // lazy.init();

  }

    handleShowModal() {
    // const { isShowModal } = this.state;
    // this.setState({
    //   isShowModal: !isShowModal,
    // });
  }

  render() {

    const imgs = [
      "https://liuguang-feed-image.cdn.bcebos.com/ea569902-4bb8-45a6-b59b-0a1b5cf93390@s_2,w_686,h_692,q_90",
      "https://liuguang-feed-image.cdn.bcebos.com/20a138bd-388c-4225-9a0d-b3f519de60f6@s_2,w_630,h_692,q_90",
      "https://liuguang-feed-image.cdn.bcebos.com/ea569902-4bb8-45a6-b59b-0a1b5cf93390@s_2,w_686,h_692,q_90",
      "https://liuguang-feed-image.cdn.bcebos.com/20a138bd-388c-4225-9a0d-b3f519de60f6@s_2,w_630,h_692,q_90",
      "https://liuguang-feed-image.cdn.bcebos.com/ea569902-4bb8-45a6-b59b-0a1b5cf93390@s_2,w_686,h_692,q_90"
    ];

    return (
      <div>
          <SwiperLazy width={400} height={400} imgs={imgs} />
{/*        <Tag content="tag" type="magenta" background />*/}
{/*        <Tag content="tag" type="red" background={false} />*/}
{/*        <Tag content="tag" type="purple" background />*/}
{/*        <button onClick={(e) => this.handleShowModal(e)}>触发loading</button>*/}
{/*<div>*/}
{/*    1234*/}
{/*</div>*/}
{/*          <ul id={"xxx"}>*/}
{/*              <li>99999</li>*/}
{/*              <li>99999</li>*/}
{/*              <li>99999</li>*/}
{/*              <li>99999</li>*/}
{/*              <li>99999</li>*/}
{/*              <li>99999</li>*/}
{/*          </ul>*/}
      </div>
    );
  }
}
export default App;
