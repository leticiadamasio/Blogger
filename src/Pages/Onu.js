import React, { useState } from "react"
import styled from "styled-components"
import Saude from "../components /Saude"
import Educacao from "../components /Educacao"
import Reducao from "../components /Reducao"
import Fome from "../components /Fome"
import Health from "../img/Saúde.png"
import Education from "../img/Educação.png"
import Reduction from "../img/Redução.png"
import Hungry from "../img/Fome.png"

const Container = styled.section`
width: 100%;
min-height: 100vh;
`

const Box = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 3vh;

`
const Image = styled.img`
width: 15vw;
`
export default function Onu() {

    const [health, setHealth] = useState(false)
    const [education, setEducation] = useState(false)
    const [reduction, setReduction] = useState(false)
    const [hungry, setHungry] = useState(false)

    const healthmodal = () => {
        setHealth(true)
        setEducation(false)
        setReduction(false)
        setHungry(false)
    }

    const educationmodal = () => {
        setHealth(false)
        setEducation(true)
        setReduction(false)
        setHungry(false)
    }

    const reductionmodal = () => {
        setHealth(false)
        setEducation(false)
        setReduction(true)
        setHungry(false)
    }

    const hungrymodal = () => {
        setHealth(false)
        setEducation(false)
        setReduction(false)
        setHungry(true)
    }

    return (
        <Container>
            <h2>O que pode ser melhorado no meu bairro?</h2>
            <Box>
                <Image onClick={() => { healthmodal() }} src={Health} alt=" Saúde e bem-estar: ODS 3" />
                <Image onClick={() => { educationmodal() }} src={Education} alt="Educação de qualidade: ODS 4" />
                <Image onClick={() => { reductionmodal() }} src={Reduction} alt=" Redução das desigualdades: ODS 10" />
                <Image onClick={() => { hungrymodal() }} src={Hungry} alt="Fome zero e agricultura sustentável:" />
            </Box>
            {health && <Saude />}
            {education && <Educacao />}
            {reduction && <Reducao />}
            {hungry && <Fome />}
        </Container>
    )
}
