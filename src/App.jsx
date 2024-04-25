import styled from "styled-components"
import EstilosGlobais from "./components/GlobalStyle/Index"
import Header from "./components/Header/Index"
import BarraLateral from "./components/BarraLateral/Index"
import Banner from "./components/Banner/Index"
import Galeria from "./components/Galeria/Index"
import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom/Index"



const FundoGradiente = styled.div` 
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div `
  margin: 0 auto;
  width: 1700px;
  max-width: 100%;
`
const Main = styled.div `
  display: flex;
  gap: 25px;
`

const SectionGaleria = styled.section `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

const [fotosGaleria, setFotosGaleria] = useState(fotos)
const [fotoSelecionada, setFotoSelecionada] = useState(null)

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Header/>
          <Main>
            <BarraLateral/>
            <SectionGaleria>
              <Banner
                  texto={'A galeria mais completa de fotos do espaço!'}
              />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosGaleria}
            />
            </SectionGaleria>
          </Main>
          </AppContainer>
          <ModalZoom
            fotos={fotoSelecionada}
          />
      </FundoGradiente>
    </>
  )
}

export default App
