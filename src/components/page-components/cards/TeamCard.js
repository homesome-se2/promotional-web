import React from 'react'
import {TeamContainer, Image, Name, Title, TextHolder, Text, Information}  from './TeamCardElement';
import * as FaIcon from "react-icons/fa"
import './TeamCard.css'

function TeamCard(props) {
    return (
        <>
        <TeamContainer>
       <Image img={props.img}/>
       <Name>{props.name}</Name>
       <Title>{props.title}</Title>
       <TextHolder>
        <Text>{props.text}</Text>
       </TextHolder>
       <Information>
           <a rel="noopener noreferrer" target="_blank" href={props.link} className="GhIcon" ><i> <FaIcon.FaGithub size={32}/> </i></a>
       </Information>
       </TeamContainer>
        </>
    )
}

export default TeamCard;