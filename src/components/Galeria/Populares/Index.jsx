import styled, { keyframes } from "styled-components"
import Titulo from "../../Titulo/Index"
import Imagens from "../Imagens/Index"
import fotos from './fotos-populares.json'

const ContainerPopular = styled.div `
    gap: 16px;
    display: flex;
    flex-direction: column;
`
const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`
const Botao = styled.button`
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    color: #fff;
    background-color: transparent;
    width: 208px;
    height: 56px;
    cursor: pointer;
`

const Populares = () => {
    return <div 
        style={{ minWidth: 212 }}>
        <Titulo $alinhamento="center">Populares</Titulo>
        <ContainerPopular>
            {fotos.map(foto => <Imagem
            key={foto.id}
            src={foto.path}
            alt={foto.alt}
            />)
            }
        <Botao>Ver mais</Botao>
        </ContainerPopular>
    </div>
}

export default Populares