import React, { Component } from 'react';
import style from './index.less';
import {LazyImage} from '@lijianqiang01/annjs';

class Index extends Component {

    constructor(props) {
        super(props);
        this.swiper = React.createRef();
        this.x = 0;
        this.y = 0;
        this.state = {
            index: 0,
        }
    }

    componentDidMount() {
        let lazy = new LazyImage('.swiper');
        lazy.init();
    }

    onTouchStart = (e) => {
        e.stopPropagation();
        this.x = e.touches[0].clientX;
        this.y = e.touches[0].clientY;
        this.swipe = 0;
        this.current = 0;
    }

    onTouchMove = (e) => {
        const distance = (e.touches[0].clientX - this.x)/2;
        if (distance > 0){
            this.swipe = 1;
        }
        if (distance < 0){
            this.swipe = 0;
        }
    }

    onTouchEnd = () => {
        if (this.swipe === 0){
            const left = parseInt(this.swiper.current.children[0].style.marginLeft) || 0;
            if (parseInt(this.swiper.current.children[0].style.marginLeft) ===  -(this.props.imgs.length - 1) * this.props.width){ return }
            this.swiper.current.children[0].style.marginLeft =
                left - this.props.width + 'px';
            this.setState(store=>({
                index: store.index + 1,
            }))
        }
        if (this.swipe === 1){
            if (parseInt(this.swiper.current.children[0].style.marginLeft) === 0){ return }
            this.swiper.current.children[0].style.marginLeft =
                parseInt(this.swiper.current.children[0].style.marginLeft) +
                this.props.width + 'px';
            this.setState(store=>({
                index: store.index - 1,
            }))
        }
    }

    handleChooseController = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <>
                <div onTouchStart={this.onTouchStart}
                     onTouchMove={this.onTouchMove}
                     onTouchEnd={this.onTouchEnd}
                     ref={this.swiper}
                     style={{width: this.props.width, height: this.props.height}}
                     className={style.swiper}
                >
                    {
                        [...this.props.imgs].map((item, key) => (
                                <img
                                    className={"swiper"}
                                    key={key}
                                    style={{width: this.props.width, height: this.props.height}}
                                    alt={''}
                                    src={''}
                                    data-src={item}
                                />
                        ))
                    }
                    <div
                        onClick={this.handleChooseController}
                        onTouchStart={this.handleChooseController}
                        onTouchMove={this.handleChooseController}
                        onTouchEnd={this.handleChooseController}
                        className={style.controller}>
                        {
                            [...this.props.imgs].map((item, key)=>(
                                this.state.index === key ?
                                <div key={key} className={style.choose}> </div> :
                                <div key={key} className={style.nochoose}> </div>
                            ))

                        }
                    </div>
                </div>
            </>
        );
    }
}
export default Index;
