import styled from 'styled-components';


export const TeamContainer = styled.div`
width: 250px;
margin: auto;

border-radius: 10px;
text-align: center;
transition: 0.5s ease-in-out;

&:hover{
    transform: translateY(-20px); 
    background: rgba(0,0,0,0.1);
   
}
`

export const Image = styled.img.attrs(props => ({
    src: props.img
  }))`
  margin-top: 5px;
  border-radius: 50%;
  padding: 5px;
  width: 170px;
  height: 170px;
  border: 1px solid #fff;
  `;

export const Name = styled.div`
padding: 20px;
color: #8A3E07;
font-style: 14px;
text-transform: uppercase;
`
export const Title = styled.div`
font-style: italic;
font-weight: bold;
color: #999;
`

export const TextHolder = styled.div`

`
export const Text = styled.p`
margin: 25px 0;
text-align: justify;
font-weight: lighter;
line-height: 25px;
color: #4e4e4e;
text-align: center;
`

export const Information = styled.div`
margin: 15px;
`