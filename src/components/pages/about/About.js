import React from 'react'
import Navbar from '../../header/Navbar';
import {AboutContainer, InfoContainer , Heading,TextContainer, Text,
    TeamContainer, TeamHeadingContainer, TeamHeading,Sub_TeamContainer, Members} from './AboutElement';
import TeamCard from '../../page-components/cards/TeamCard';
import {Home, Web, Gadget, Android, Public} from './Data.js';
import './About.css'

function About() {
   
    return (
        <>
        <Navbar />
        <AboutContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1"
         d="M0,224L48,208C96,192,192,160,288,133.3C384,107,480,85,576,112C672,139,768,213,864,245.3C960,277,
         1056,267,1152,224C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960
         ,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>    
        <InfoContainer>
        <Heading>About</Heading>
        <TextContainer>
        <Text>
        In this page general information will be provided and the teams will be introduced. HomeSome is a full-scale smart home solution that enables users to control physical IOT devices through intermediate communicating units. The system is divided into several significant sub parts. 
        The public server controls the main communication between the different sub parts. It mainly acts as a bridge between hubs and remote clients.
        The Local hub is located within the home network and is responsible for forwarding client requests to alter gadgets states and thus controlling the physical IOT device.
        The clients are the intermediate communicating units that makes requests to alter gadgets states and is what the end user uses to interact with the HomeSome system. The Web client provides a web-based interface and provides the local hub features.
        The Android client is a companion-app that serves the same purpose as the web client to make requests to the local hub, Android further provides features designed for user convenience. 
        To read more about each specific sub system please navigate to each team’s page. We recommend that you start at the Home page, it is the main page for the HomeSome project and provides an overview of the system. The teams pages provides more specific information about their respective sub system. 
        Each page will be divided into three parts where the first part will give a brief introduction about the system, the second part will show the system features that exist within this sub system, the last part will display a gallery of images where further system specifications will be displayed along with figures. 

        </Text>
        </TextContainer>
        </InfoContainer>
        </AboutContainer>


        <TeamContainer>
        <TeamHeadingContainer>
        <TeamHeading>THE TEAM</TeamHeading>
        </TeamHeadingContainer>

        <Sub_TeamContainer>

        <Members className='TheTeamHome'>
        {Home.home.map((item,i)=>(
        <TeamCard 
       
       img={item.img}
       name={item.name}
       title={item.title}
       text={item.text}
       link={item.link}/>
       ))}
        </Members> 

        <Members className='white'>
        {Web.Web.map((item,i)=>(
        <TeamCard 
       
       img={item.img}
       name={item.name}
       title={item.title}
       text={item.text}
       link={item.link}/>
       ))  }
        </Members>     

          <Members className='regular'>
        {Gadget.Gadget.map((item,i)=>(
        <TeamCard 
       
        img={item.img}
       name={item.name}
       title={item.title}
       text={item.text}
       link={item.link}/>
       ))  }
        </Members>      

        <Members className='white'>
        {Android.Android.map((item,i)=>(
        <TeamCard 
       
       img={item.img}
       name={item.name}
       title={item.title}
       text={item.text}
       link={item.link}/>
       ))  }
        </Members>   

        <Members className='regular'>
        {Public.Public.map((item,i)=>(
        <TeamCard 
       
       img={item.img}
       name={item.name}
       title={item.title}
       text={item.text}
       link={item.link}/>
       ))  }
        </Members>    

        </Sub_TeamContainer>

        </TeamContainer>
      
     
        </>
    )
}

export default About
