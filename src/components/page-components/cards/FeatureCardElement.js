import styled from 'styled-components';


export const Card = styled.div`
    width: 580px;
    height: 700px;
    
    padding: 4rem 2rem;
    position: relative;
    box-shadow: 0px 20px 20px rgba(0,0,0,1);
    transition: 0.5s ease-in-out;
    &:hover{
        transform: translateY(-20px); 
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 580px;
        height:700px;
        background: linear-gradient(to bottom, #3FC5E3,#8919FC);
        z-index: 2;
        transition: 0.5s all;
        opacity: 0;
    }

    &:hover:before {
        opacity: 0.6;
    }

    &:hover .slideUp {
        opacity: 1;
        transform: translateY(-25px);
        color: white;
    }

    @media screen and (max-width: 768px){
        width: 380px;
        height: 480px;
        &:before {
            width: 380px;
            height: 480px;
        }
    
      }

      @media screen and (max-width: 868px){
        width: 430px;
        height: 520px;
        &:before {

            width: 430px;
            height: 520px;
        }
    
      }

      @media screen and (max-width: 968px){
        width: 440px;
        height: 540px;
        &:before {

            width: 440px;
            height: 540px;
        }
    
      }
    `

    export const Image = styled.img.attrs(props => ({
        src: props.img
      }))`
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;

    
        
      `;

      export const Heading = styled.p`
      font-size: 30px;
      @media screen and (max-width: 501px){
        font-size: 15px;
    }

      `


     export const InformationContainer = styled.div`
     position: relative;
     top:70%;
     z-index: 2;
     color: #fff;
     opacity: 1;
     transition: 0.5s ease-in-out;
     color: black;   
     @media screen and (max-width: 501px){
        top:50%;
    }

    @media screen and (max-width: 768px){
        top:50%;
      }

     `


    export const Description = styled.div`
    font-size: 25px;
    margin: 15px 0px;

    @media screen and (max-width: 501px){
        font-size: 15px;
        margin:2px 0px;
    }
    `

    
    export const Button = styled.p`
    text-decoration: none;
    padding: 0.5rem 1rem;
    background: #000;
    color:#fff;
    font-size: 25px;
    width:170px;
    cursor: pointer;
    margin-bottom: 8px;
    border: 2px solid #fff;
    border-radius: 15px;
    
    
    @media screen and (max-width: 501px){
        font-size: 25px;
        padding: 0.5rem 1rem;
        font-size: 10px;
        width:90px;
        
    }

    `