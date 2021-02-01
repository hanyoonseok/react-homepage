import React from 'react';
import CardItem from './CardItem';
import './style.css'
function Cards(){
    return(
        <div className="cards">
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src ='images/img-9.jpg '
                        text="Explore the hidden waterfall depp inside the Amazon Jingle"
                        lable='Adventure' path='/services'/>
                        <CardItem src='images/img-2.jpg' 
                        text="Travle through the Islands of Bali in a private Cruise"
                        lable='Luxury' path='/services'/>
                        <CardItem src='images/img-2.jpg' 
                        text="Travle through the Islands of Bali in a private Cruise"
                        lable='Luxury' path='/services'/>
                        <CardItem src='images/img-2.jpg' 
                        text="Travle through the Islands of Bali in a private Cruise"
                        lable='Luxury' path='/services'/>
                        <CardItem src='images/img-2.jpg' 
                        text="Travle through the Islands of Bali in a private Cruise"
                        lable='Luxury' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards