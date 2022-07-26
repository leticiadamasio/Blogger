import React, { Component } from 'react'
import styled from 'styled-components'
import Instagram from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Twitter from '../img/twitter.png'
import Whatsapp from '../img/whatsapp.png'

const Container = styled.section`
  background-color:#5a393e;
  display: flex;
`
const Icons = styled.div` 
  display: flex; 
  justify-content: space-evenly;
  width: 30vw;
  @media (max-width:768px){
    width: 40vw;
  }
  @media (max-width:375px){
    width: 55vw;
  }
 
`
const Images = styled.Image`
  width: 3vw;
  @media (max-width:768px){
    width: 6vw;
  }
  @media (max-width:543px){
    width: 8vw;
  }
  
  @media (max-width:375px){
    width: 8vw;
  }
`
const Text = styled.p`
   color: black;
   width: 55%;
   margin-left: 6.75vw;
   margin-top: 2.25vh;
   font-size: 3vh;
   font-family: 'Playfair Display', serif;
`

export default class Footer extends Component {
    render(){
    return (
      <Container id='Social'>
        <>
       <Text>Site produzido por Letícia de Souza Mello Damasio</Text>
       </> 
       <Icons>
         <a href='https://www.instagram.com/lele_damasio/' target="_blank"><Images src={Instagram}/></a>
         <a href='https://www.facebook.com/lele.damasio/' target="_blank"><Images src={Facebook}/></a>
         <a href='https://twitter.com/Leticdamas' target="_blank"><Images src={Twitter}/></a>
         <a href='https://wa.me/21999134926?text=Olá%20!%20' target="_blank"><Images src={Whatsapp}/></a>
       </Icons>
  
      </Container>
    )
  }
}