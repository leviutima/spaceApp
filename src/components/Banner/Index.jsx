import styled from "styled-components"

const BannerSyle = styled.img `
    width: 1400px;
    height: 328px;
    top: 192px;
    left: 260px;
    opacity: 80%;
    border-radius: 20px;
`


const TextoImg = styled.h1 `
  position: absolute;
  top: 30%;
  left: 29%;
  transform: translate(-50%, -50%);
  color: #ffff;
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  white-space: pre-wrap;
`

const TextoImgQuebra = styled.h1 `
    position: absolute;
    top: 35%;
    left: 28.3%;
    transform: translate(-50%, -50%);
    color: #ffff;
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    white-space: pre-wrap;
`
const TextoImgQuebraLast = styled.h1 `
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
    color: #ffff;
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    white-space: pre-wrap;
`


const Banner = () => {
    return( 
        <>
        <BannerSyle src="/banner.png" ></BannerSyle>
        <TextoImg>A galeria mais</TextoImg>
        <TextoImgQuebra>completa de</TextoImgQuebra>
        <TextoImgQuebraLast>fotos do espaço!</TextoImgQuebraLast>  
        </>
    )
}

export default Banner