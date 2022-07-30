import React from "react"
import styled from "styled-components"
import Logo from "../img/03.png"
import Eu from "../img/Eu.png"

const Container = styled.section`
background-color: #fbede0;
display: flex;
min-height: 100vh;
align-items: center;
width: 100vw;
  p{ 
    font-size: 10vh;
    margin-left: 5vw;
    padding-top: 25vh;
    width: 25vw;
    text-align: center;

@media (max-width:375px){
 min-height: 100vh;
 display: block;
 p{
  font-size: 5vh;
  width: 25vw;
  margin-right: 4vw;
 }
}
`
const Image = styled.img`
 height: 60vh;
 margin-left: 10%;

 @media (max-width:375px){
   height:40vh;
   margin-left: 5%; 
}
`
const Boximg = styled.div`
display: flex;
margin-left: 8vw;
@media (max-width:375px){
  height:50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding-left: 20vw;
}
`
const Box = styled.div`
display:flex;
@media (max-width:375px){
  height:50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding-left: 15vw;
}
`
export default class Home extends React.Component{
    render (){
        return (
            <>
            <Container>
            <Boximg>
            <Image src={Logo} alt="Logo"/>
            </Boximg>
            <Box>
            <p>It's me</p>
            <Image src={Eu} alt="Autorretrato"/>
            </Box>
            </Container>
            </>
        )
    }
}