import React from 'react'
import {Card, Image, InformationContainer, Heading , Description, Button }  from './FeatureCardElement';

function FeatureCard(props) {
    return (
        <>
        <Card>
        <Image img={props.img}/>
        <InformationContainer className='slideUp'>
         <Heading>{props.heading}</Heading>
         <Description>{props.description}</Description>
        <Button>Read more!</Button>
        </InformationContainer>

        </Card> 
        </>
    )
}

export default FeatureCard
