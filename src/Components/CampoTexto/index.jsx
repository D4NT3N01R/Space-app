import styled from "styled-components";
import search from './search.png'

const StyledContainer = styled.div`
position: relative;
display: inline-block;
`
const StyledCampoTexto = styled.input`
height: 56px;
padding: 12px 16px;
border-radius: 10px;
border: 2px solid;
border-color: #c98cf1;
background: transparent;
box-sizing: border-box;
width: 566px;
color: white;
font-weight: 400;
font-size: 20px;
line-height: 20px;
outline: none;
`

const IconoLupa = styled.img`
position: absolute;
top: 10px;
right: 10px;
width: 38px;
height: 38px;
`

const CampoTexto =()=>{

    return(<StyledContainer>
        <StyledCampoTexto type="text" placeholder="¿Qué esta buscando?"/>
        <IconoLupa src={search} alt="icono lupa"/>
    </StyledContainer>)
}

export default CampoTexto