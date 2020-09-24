import React, { Component } from 'react';
import {LazyImage} from '@lijianqiang01/annjs';
import Swiper, {Pagination} from "swiper";

class Index extends Component {


    componentDidMount() {
        Swiper.use([Pagination]);
        let swiper = new Swiper('.swiper-container', {
            //分页器
            pagination: {
                el: '.swiper-pagination',
            },
        });

        let lazyImage = new LazyImage('.img');
        lazyImage.init();
    }

    render() {
        const {
            width,
            height
        } = this.props;

        return (
            <>
                <div style={{width: width, height: height, objectFit: 'cover'}} className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.imgs.map((item,index) => (
                                <div key={index} className="swiper-slide">
                                    <img style={{width:'100%', height: '100%'}} className={"img"} alt={''} data-src={item} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </>
        );
    }
}

export default Index;
