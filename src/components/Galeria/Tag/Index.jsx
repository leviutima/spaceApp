import styled from 'styled-components'
import tags from './tags.json'

const TitleTag = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    color: #D9D9D9;
`

const ButtonStyle = styled.button`
    border: 2px ;
    border-radius: 10px;
    color: #FFFFFF;
    width: 94px;
    height: 49px;
    cursor: pointer;
    background-color: #D9D9D94D;
`

const ContainerTag = styled.div `
    display: flex;
    gap: 60px ;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 22px;
    align-items: center;
`

const Tag = () => {
    return(
        <>
        <ContainerTag>
            <TitleTag>Busque por tags:</TitleTag>
            <ButtonContainer>
               {tags.map(tag => <ButtonStyle key={tag.id}>{tag.titulo}</ButtonStyle>)} 
            </ButtonContainer>
        </ContainerTag>
        </>
    )
}

export default Tag