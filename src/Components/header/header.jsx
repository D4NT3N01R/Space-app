
import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    .logo{
        width: 212px;
    }

`

const Header = ()=>{
    return <>
    <StyledHeader>
        <img src="imagenes/logo.png" alt="logo" className="logo"/>
        <CampoTexto/>
    </StyledHeader>
    </>
}

export default Header