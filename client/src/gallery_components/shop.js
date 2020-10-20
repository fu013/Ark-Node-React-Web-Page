import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../index_components/Header";
import Footer from "../index_components/Footer";
import "./css/Shop.css";

class Shop extends Component{
    render(){
        return(
            <div>
                <Header/>
                    <section>
                        <div>슈가펫</div>
                        <hr></hr>
                        <div>ITEMS</div>
                        <hr></hr>
                        <div className="galleryWrapper">
                            <ul className="galleryUl">
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>

                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>

                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                                <li className="galleryLi"></li>
                            </ul>
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }
}

export default Shop;
