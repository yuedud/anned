import React from 'react';
import ReactDom from 'react-dom';
import Index from './alert';

//自己测试调样式的时候用
ReactDom.render(
    <Index title={'您输入的信息有误！'} type={"success"} />,
    document.getElementById('root')
)
