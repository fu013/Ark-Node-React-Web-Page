import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slick.css"
import DiscordWidget from "../widget_components/Discord";
import Video from "../widget_components/Video"

class Body extends Component {
  render() {
    const Item = styled.h3`
      height: 600px;
      background: lightgray;
      position: relative;
      background-image: url('https://source.unsplash.com/1600x600/?cat');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &:focus {
        outline: none;
      }
    `
    const divStyle = {
      minWidth: "1200px"
    };
    const ItemSecond = {
      backgroundImage: "url('https://source.unsplash.com/1600x600/?dog')"
    };
    const ItemThird = {
      backgroundImage: "url('https://source.unsplash.com/1600x600/?raccoon')"
    };
    const WidgetWrapper = styled.div `{
      width: 1000px;
      overflow: hidden;
      margin: 0 auto;
    }`
    // 슬릭 슬라이더 세팅
    const settings = {
      dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
      infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
      speed: 1000, // 애미메이션의 속도, 단위는 milliseconds
      slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
      slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
      autoplay: true
    };
    return (
      <div style={divStyle}>
        <Slider {...settings}>
          <div>
            <Item>{/* Slider Img 1 */}</Item>
          </div>
          <div>
            <Item style={ItemSecond}>{/* Slider Img 2 */}</Item>
          </div>
          <div>
            <Item style={ItemThird}>{/* Slider Img 3 */}</Item>
          </div>
        </Slider>
        <WidgetWrapper>
          <DiscordWidget/><Video/>
        </WidgetWrapper>
      </div>
    );
  }
}

export default Body;
