import styled from "styled-components"
import Populares from "./Populares"
import Tag from "./tags"
import Imagen from "./imagen"
import StyledTitulo from "../Titulo"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = ({ fotos = [], alSeleccionarFoto, alAlternarFavorito }) => {

    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <StyledTitulo>Navegue por la galería</StyledTitulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                        alAlternarFavorito ={alAlternarFavorito}
                        alSolicitarZoom={alSeleccionarFoto}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria