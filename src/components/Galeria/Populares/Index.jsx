import styled, { keyframes } from "styled-components"
import Titulo from "../../Titulo/Index"
import Imagens from "../Imagens/Index"
import fotos from './fotos-populares.json'

const ContainerPopular = styled.div `

`


const Populares = () => {
    return <div style={{ minWidth: 212 }}>
        <Titulo $alinhamento="center">Populares</Titulo>
        <ContainerPopular>
            {fotos.map(foto => <Imagens
            key={foto.id}
            src={foto.path}
            alt={foto.alt}
            fotos={foto}/>)
            }
        </ContainerPopular>
    </div>
}

export default Populares