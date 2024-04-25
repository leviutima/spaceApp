const ModalZoom = ({ fotos }) => {
    return(
        <dialog open = {!!fotos}>
            <p>Exemplo do Mozilla</p>
                <form method="dialog">
                    <button type="submit">ok</button>
                </form>
        </dialog>
    )
}

export default ModalZoom