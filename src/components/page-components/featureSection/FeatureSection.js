import React, {useState} from 'react';
import './FeatureSection.css';
import Card from '../../page-components/cards/FeatureCard';
import Carousel from "react-elastic-carousel";
import {InfoSectionContainer, TopLine , Text } from './FeatureSectionElement';
import Parser from 'html-react-parser';

function FeatureSection({
    items,pattern
}) {
    const [mainText,setMainText] = useState('');

    function highligted(text,id){

    setMainText(text)

    var element = document.getElementById(id);
      element.classList.add("highlight");
     
    setTimeout(() => {
        element.classList.remove("highlight")
      }, 1500);
    }
    const number = 2000;
    const displayItems = [
        {width: 500, itemsToShow: 1},
        {width: 768, itemsToShow: 1},
        {width: 900, itemsToShow: 1},
        {width: 1400, itemsToShow: 1},
        {width: 1600, itemsToShow: 1},
    ]

    return (
        <>
          <InfoSectionContainer>  
            <div >
            <TopLine>Features</TopLine>

                <Carousel  breakPoints={displayItems} className="carousel">
                {items.map((item,i)=>(
                <div onClick={(e)=> highligted(item.text,i)} className="item">

                    <Card key={i} id={i}
                    img={item.image}
                    heading={item.heading}
                    description={item.intro}
                    />
                  
                  </div> 
                    ))}
                    </Carousel>
                    {<Text>{Parser(mainText)}</Text>}  
            </div>
            </InfoSectionContainer>  
        </>
    )
}

export default FeatureSection
