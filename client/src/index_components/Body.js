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
      height: 500px;
      background: lightgray;
      position: relative;
      background-image: url('https://source.unsplash.com/1600x600/?seoul');
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
      backgroundImage: "url('https://source.unsplash.com/1600x600/?korea')"
    };
    const ItemThird = {
      backgroundImage: "url('https://source.unsplash.com/1600x600/?shop')"
    };
    const WidgetWrapper = styled.div `{
      width: 1000px;
      overflow: hidden;
      margin: 0 auto;
    }`
    const ContentWrapper = styled.div `{
      width: 1200px;
      margin: 50px auto 0;
      box-sizing: border-box;
      padding: 20px;
    }`
    const ContentUl = styled.ul `{
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }`
    const ContentLi = styled.li `{
      position: relative;
      margin-right: 20px;
      margin-top: 20px;
      vertical-align: top;
      text-align: center;
      width: 372.666666667px;
      height: 452.666666667px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(1) {
        margin-top: 0;
      }
      &:nth-child(2) {
        margin-top: 0;
      }
      &:nth-child(3) {
        margin-top: 0;
      }
    }`
    const ContentLiImg = styled.img `{
      position: absolute;
      top: 20px;
      left: 20px;
      width: 332.666666667px;
      height: 332.666666667px;
      overflow: hidden;
    }`
    const ImgUl = styled.ul `{
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;
      position: absolute;
      bottom: 20px;
      left: 20px;
    }`
    const ImgLi = styled.li `{
    }`

    const ContentTitle = styled.h3 `{
      font-size: 20px;
      text-align: center;
    }`
    const ContentSubTitle = styled.p `{
      font-size: 10px;
      text-align: center;
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
        <ContentWrapper>
          <ContentTitle>
            Time Attack
          </ContentTitle>
          <ContentSubTitle>
            오늘만 이 가격 한정 출시
          </ContentSubTitle>
          <ContentUl>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?korea" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?dog" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?pet" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?cat" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?lion" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?star" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?weapon" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?pokemon" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>
            <ContentLi>
              <ContentLiImg src="https://source.unsplash.com/285x285/?movie" alt="이미지"/>
              <ImgUl>
                <ImgLi>제품명 : ipsum</ImgLi>
                <ImgLi>제품가격 : ipsum</ImgLi>
                <ImgLi>할인가격 : ipsum</ImgLi>
              </ImgUl>
            </ContentLi>

          </ContentUl>
        </ContentWrapper>
        <WidgetWrapper>
          <DiscordWidget/><Video/>
        </WidgetWrapper>
      </div>
    );
  }
}

export default Body;
