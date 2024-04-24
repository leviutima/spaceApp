import styled from "styled-components"
import EstilosGlobais from "./components/GlobalStyle/Index"
import Header from "./components/Header/Index"
import BarraLateral from "./components/BarraLateral/Index"
import Banner from "./components/Banner/Index"


const FundoGradiente = styled.div` 
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const Section = styled.section `
  display: flex;
  gap: 150px;
`


function App() {


  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
          <Header/>
          <Section>
            <BarraLateral/>
            <Banner/>
          </Section>
      </FundoGradiente>
    </>
  )
}

export default App
