import styled from "styled-components"
import Titulo from "../Titulo/Index"
import Tag from "./Tag/Index"
import Populares from "./Populares/Index"


const GaleriaContainer = styled.div `
  display: flex;

`

const SectionResponse = styled.section`
  flex-grow: 1;
`


const Galeria = () => {
    return(
      <>
        <Tag/>  
        <GaleriaContainer>
          <SectionResponse>
            <Titulo>Navegue pela galeria</Titulo>
          </SectionResponse>
          <Populares/>
        </GaleriaContainer>
      </>
    )
    
}

export default Galeria