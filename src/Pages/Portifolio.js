import React from "react"
import styled from "styled-components"
import VanGogh from "../img/Van-Gogh.png"
import Love from "../img/Love.png"
import Marvel from "../img/Marvel.png"
import Movies from "../img/Movies-Series.png"
import Todoflix from "../img/Todoflix.png"

const Container = styled.section`
background-color: #fbede0;
display: flex;
flex-wrap: wrap;
min-height: 100vh;
width: 80vw;
margin-left: 10vw;
justify-content: space-evenly;

`
const Box = styled.div`
background-color: #fbede0;
width: 24.75vw;
height: 80.15vh;
border: 3px solid #5a393e;
margin-top: 2vh;
align-items: center;
h2{
    background-color: #5a393e;
    width: 24.5vw;
    height: 5vh;
    color: #FFFFFF;
    text-align: center;
}
p{ 
    background-color: #5a393e;
    width: 24.5vw;
    height: 15vh;
    color: #FFFFFF;
    text-align: justify;  
    margin-top: 2vh;
    padding-left: 2vh;
    padding-right: 2vh;
    padding-top: 2vh;
}
@media (max-width:375px){
    width: 39.7vw;
    height: 52.15vh;

h2{
    width: 38.2vw;
    height: 7vh;
    font-size: 2.5vh;
    padding-top: 2vh;
}
 p{
    width: 38.2vw;
    height: 15vh;
    font-size: 1.75vh;
 }  

}
`
const Image = styled.img`
width: 20vw;
height: 55vh;
margin-left: 2vw;
margin-top: 2vh;
@media (max-width:375px){
    width: 30vw;
    height: 25vh;
    margin-left: 3vh;
}

`
export default class Portifolio extends React.Component{
    render (){
        return (
            <Container>
            <Box>
            <h2>Vicente Van Gogh</h2>
            <Image src={VanGogh} alt="Site do Van-Gogh"/>
            <p>Site desenvolvido para enaltecer algumas obras de Vicente Van Gogh.</p>
            </Box>
            <Box>
            <h2>Love Pets</h2>
            <Image src={Love} alt="Site de pets"/>
            <p>Um site de adoção fictício, desenvolvido para testar alguns códigos aprendidos no curso Vai na Web.</p>
            </Box>
            <Box>
            <h2>Marvel</h2>
            <Image src={Marvel} alt="Site da Marvel"/>
            <p>Site sobre uma franquia de mídia americana e um universo compartilhado centrado em uma série de filmes de super-heróis, vulgo Marvel.</p>
            </Box>
            <Box>
            <h2>Api Movies and Shows</h2>
            <Image src={Movies} alt="Site de filmes e séries"/>
            <p>Site desenvolvido para testar o uso de Api, utilizei uma api de séries e filmes para a criação desse site.</p>
            </Box> 
            <Box>
            <h2>Todoflix</h2>
            <Image src={Todoflix} alt="Site todoflix"/>
            <p>Site que une uma série de códigos que aprendemos no Vai na Web, esse site fez a junção do Todo que já havíamos feito e da plataforma da Netflix.</p>
            </Box>
            </Container>
        )
    }
}