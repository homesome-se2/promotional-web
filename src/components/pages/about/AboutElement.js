import styled from 'styled-components';
/*
display: flex;
justify-content:center;
align-items: center;
padding: 0 30px;
position: relative;
z-index: 1;
*/ 
export const AboutContainer = styled.div`
height: 850px;


`
export const InfoContainer = styled.div`// main
width:  clamp(80%,60%,100%);
background: rgba(0,0,0,0.7);
color: white;
text-align: center;
padding: 50px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
font-family: sans-serif;
border: 2px solid #ffff;

`
export const Heading = styled.h1`//heading 
margin-bottom: 10px;

`
export const TextContainer = styled.div`


`
export const Text = styled.p`

text-align: justify;
font-size: clamp(14px,1vw,2em);

`
export const TeamContainer = styled.div` //main container
background: #eee;
`

export const TeamHeadingContainer = styled.div` //heading
padding-top: 80px;
color: #444;
font-size: 20px;
border-bottom: 2px solid rgba(0,0,0,0.7);
width: 290px;
margin: auto;
line-height: 80px;
text-align: center;
justify-content: center;


`

export const TeamHeading = styled.h1` //h1

`
export const Sub_TeamContainer = styled.div`
margin: auto;
padding-top: 50px;
overflow: hidden;

`

export const Members = styled.div`
display: flex;
margin: 10px;

`