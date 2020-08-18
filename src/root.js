import React from 'react';
import ReactDom from 'react-dom';
import Tag from './tag';

//自己测试调样式的时候用
ReactDom.render(
    <>
        <Tag content={'tag'} type={"red"} />
    </>,
    document.getElementById('root')
)
