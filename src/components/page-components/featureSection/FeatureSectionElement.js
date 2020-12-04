import styled from 'styled-components';

export const InfoSectionContainer = styled.div`
display: flex;
margin: auto;
margin-top: 5%;
justify-content: center;
height: 1150px;
z-index: 1;

`


export const TopLine = styled.h6`
-webkit-text-stroke: 0.7px black;
position: static; 
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
text-transform: uppercase;
letter-spacing: 6px;
font-size: 35px;
font-weight: 800;
color: #1a83ff;

`

export const Text = styled.p`
background: #f5f0f0;
opacity: 0.7;
margin-top: 20px;
text-align: left;
font-size: 25px;
width: 1000px;
overflow: hidden;
word-break: normal;

@media screen and (max-width: 1400px){
    width: 730px;
  }

@media screen and (max-width: 1000px){
    width: 730px;
  }

@media screen and (max-width: 968px){
    margin-top: 20px;
    font-size: 20px;
    width: 570px;
}

@media screen and (max-width: 801px){
  width: 590px;
}

@media screen and (max-width: 768px){
    margin-top: 20px;
    font-size:18px;
    width: 580px;
}

@media screen and (max-width: 601px){
    font-size: 13px;  
    width: 380px;
}
`