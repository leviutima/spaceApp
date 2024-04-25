import styled from "styled-components"
import Imagens from "../Galeria/Imagens/Index"
import BotaoIcone from "../BotaoIcone/Index"


const OverLay = styled.div `
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`


const ModalZoom = ({ fotos, aoFechar }) => {
    return(
        <>
            {fotos && <>
        <OverLay/>
        <DialogEstilizado open = {!!fotos} onClose={aoFechar}>
            <Imagens fotos={fotos} expandida={true}/>
            <form method="dialog">
                <BotaoIcone>
                    <img src="/icones/fechar.png" alt='Icone de fechar'></img>
                </BotaoIcone>
            </form>
        </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom