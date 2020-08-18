import React from 'react';
import ReactDom from 'react-dom';
import Tag from './tag';

//自己测试调样式的时候用
ReactDom.render(
    <>
        <Tag content={'tag'} type={"magenta"} background={true} />
        <Tag content={'tag'} type={"red"} background={true} />
        <Tag content={'tag'} type={"purple"} background={true} />
        <Tag content={'tag'} type={"blue"} background={true} />
        <Tag content={'tag'} type={"geekblue"} background={true} />
        <Tag content={'tag'} type={"cyan"} background={true} />
    </>,
    document.getElementById('root')
)
