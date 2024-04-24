import styled from "styled-components"

const ItemListaStyle = styled.li `
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    gap: 22px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
`


const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return(
        <ItemListaStyle $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo}></img>
            {children}
        </ItemListaStyle>
    )
}

export default ItemNavegacao