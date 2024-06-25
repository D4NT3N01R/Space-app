import styled from "styled-components"
import Header from "./Components/header/header.jsx"
import BarraLateral from "./Components/BarraLateral/index.jsx"
import GlobalStyles from "./Components/GlobalStyle"
import Banner from "./Components/banner/index.jsx"
import banner from "./assets/banner.png"
import Galeria from "./Components/Galeria/index.jsx"
import { useState } from "react"
import fotos from "./fotos.json"
import ModalZoom from "./Components/ModalZoom/index.jsx"
import Pie from "./Components/Pie/index.jsx"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

width: 100%;
min-height: 100vh;
`
const AppContainer= styled.div`
width:100%;
max-width: 100%;
margin: 0 auto;
`
const MainContainer = styled.main`
display: flex;
gap: 24px;

`
const ContenidoGaleria = styled.section`

display: flex;
flex-direction: column;
flex-grow: 1;
`

const App = ()=> {
 
const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
const [fotoSeleccionada, setFotoSeleccionada] = useState(null)  



const alAlternarFavorito =(foto)=>{
  if(foto.id===fotoSeleccionada ?.id){
    setFotoSeleccionada({
      ...fotoSeleccionada,
      favorita: !foto.favorita
    })
  }
  setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria=>{
    return{
      ...fotoDeGaleria,
      favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
    }
  }))
}


return (
    <>
    <GlobalStyles/>
    <FondoGradiente>
      <Header/> 
      <AppContainer>
        <MainContainer>
        <BarraLateral/>
        
        <ContenidoGaleria>
        <Banner texto="La galeria más completa de fotos espaciales" backgroundImage ={banner}/>
        <Galeria alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} fotos={fotosDeGaleria} alAlternarFavorito ={alAlternarFavorito}/>
        </ContenidoGaleria>
        </MainContainer>
     
      </AppContainer>
      <ModalZoom foto={fotoSeleccionada} alcerrar={()=>setFotoSeleccionada(null)} alAlternarFavorito={alAlternarFavorito}/>
    <Pie/>
    </FondoGradiente>
    </>
  )
}

export default App
