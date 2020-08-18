import React from 'react';
import ReactDom from 'react-dom';
import Tag from './tag';
import {toast} from './toast';

toast("您输入的信息有误！",'top');
//自己测试调样式的时候用
ReactDom.render(
    <>
        <Tag content={'tag'} type={"magenta"} background={true} />
        <Tag content={'tag'} type={"red"} background={false} />
        <Tag content={'tag'} type={"purple"} background={true} />
        <Tag content={'tag'} type={"blue"} />
        <Tag content={'tag'} type={"geekblue"} background={true} />
        <Tag content={'tag'} type={"cyan"} background={true} />
    </>,
    document.getElementById('root')
)
