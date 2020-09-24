import React, { Component } from 'react';
import {LazyImage} from '@lijianqiang01/annjs';
import Swiper from "swiper";
import 'swiper/swiper-bundle.min.css'

class Index extends Component {


    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {});
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
                <div style={{width: width, height: height}} className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.imgs.map(item => (
                                <div className="swiper-slide">
                                    <img style={{width:'100%', height: '100%'}} className={"img"} alt={''} data-src={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
