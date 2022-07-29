import React from "react"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home.js"
import Portifolio from "./Pages/Portifolio.js"
import Onu from "./Pages/Onu.js"
import Footer from "./Pages/Footer.js"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration:none;
  list-style: none;
  color: #5a393e;
}
`
const Container = styled.div`
background-color: #fbede0;
min-height: 100vh;
width: 100vw;

`
const List= styled.ul`
display: flex;
width: 35vw;
height: 10vh;
justify-content: space-between;
align-items: center;
font-size: 3.5vh;
font-family: 'Playfair Display', serif;
font-weight: bold;
margin-left: 32%;
@media (max-width:375px){
  width: 50vw;
  font-size: 3vh;
  margin-left: 25%;
}
`

export default class App extends React.Component{
  render(){
    return (
      <Container>
      <GlobalStyle/>
      <Router>
                <List>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Portifolio'><li>Works</li></Link>
                    <Link to='/Onu'><li>Onu</li></Link>
                </List>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Portifolio' element={<Portifolio />} />
                <Route path='/Onu' element={<Onu />} />
            </Routes>
        </Router>
        <Footer/>
        </Container>
       
    )
  }
}
