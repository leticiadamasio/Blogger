import React from "react"
import styled from "styled-components"
import Logo from "../img/03.png"
import Eu from "../img/Eu.png"

const Container = styled.section`
background-color: #fbede0;
display: flex;
min-height: 100vh;
align-items: center;
  p{ 
    font-size: 10vh;
    margin-left: 5vw;
    padding-top: 5vh;
    text-align: center;
    width: 18vw;
    height: 20vh;
  }
`
const Image = styled.img`
 height: 60vh;
 margin-left: 10%;
`
export default class Home extends React.Component{
    render (){
        return (
            <>
            <Container>
            <Image src={Logo}/>
            <p>It's me</p>
            <Image src={Eu}/>
            </Container>
            </>
        )
    }
}