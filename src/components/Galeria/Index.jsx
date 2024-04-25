import styled from "styled-components"
import Titulo from "../Titulo/Index"
import Tag from "./Tag/Index"
import Populares from "./Populares/Index"
import Imagens from "./Imagens/Index"


const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SectionResponse = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = []}) => {

    return(
      <>
        <Tag/>  
        <GaleriaContainer>
          <SectionResponse>
            <Titulo>Navegue pela galeria</Titulo>
            <ImagensContainer>
              {fotos.map( foto => <Imagens 
                key={foto.id}
                fotos={foto}/>)
              }
            </ImagensContainer>
          </SectionResponse>
          <Populares/>
        </GaleriaContainer>
      </>
    )
    
}

export default Galeria