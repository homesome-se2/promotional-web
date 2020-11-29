import styled from 'styled-components';

export const HeroContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
padding: 0 30px;
height: 195px;
position: relative;
z-index: 1;

`


export const HeroContent = styled.div `
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

`
export const Heading = styled.h1`
color: black;
font-size: 48px;
text-align:center;

@media screen and (max-width: 768px){
    font-size:40px;
}

@media screen and (max-width: 601px){
    font-size: 32px;  
}
@media screen and (max-width: 501px){
    font-size: 15px;
    
}
`
export const TopLine = styled.h6`
text-transform: uppercase;
letter-spacing: 6px;
font-size: 20px;
font-weight: 800;
color: #1a83ff;
text-align:justify;
`

export const Text_content = styled.p`
margin: 15px 0 0 0;
color: black;
font-size: 24px;
text-align: center;
max-width; 600px;

@media screen and (max-width: 768px){
    font-size:20px;
}

@media screen and (max-width: 601px){
    font-size: 18px;
    
}
@media screen and (max-width: 501px){
    font-size: 15px;
    
}

`
export const Button_Wrapper = styled.div`
margin-top: 20px;
display: -webkit-box;
display: flex;
text-align:justify;
justify-content: space-between;

@media screen and (max-width: 768px){
    font-size:20px;
}

@media screen and (max-width: 601px){
    display: inline;
    font-size: 15px;
    
}
`

export const Divider = styled.div`
width:5px;
height:5px;
`