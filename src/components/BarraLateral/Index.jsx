import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao/Index"

const ContainerList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`



const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ContainerList>
                    <ItemNavegacao
                        iconeAtivo = '/icons/home-ativo.png'
                        iconeInativo = '/icons/home-inativo.png'
                        ativo = {true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo = '/icons/mais-vistas-ativo.png'
                        iconeInativo = '/icons/mais-vistas-inativo.png'
                        ativo = {false}
                    >
                        Mais vistos
                    </ItemNavegacao >
                    <ItemNavegacao 
                        iconeAtivo = '/icons/mais-curtidas-ativo.png'
                        iconeInativo = '/icons/mais-curtidas-inativo.png'
                        ativo = {false}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo = '/icons/novas-ativo.png'
                        iconeInativo = '/icons/novas-inativo.png'
                        ativo = {false}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo = '/icons/surpreenda-me-ativo.png'
                        iconeInativo = '/icons/surpreenda-me-inativo.png'
                        ativo = {false}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ContainerList>
            </nav>
        </aside>
    )
}

export default BarraLateral
