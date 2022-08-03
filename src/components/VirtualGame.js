import styled from "styled-components";

import "./styles.css"

let time=new Date().toLocaleTimeString();

 const VirtualGame = (props)=> {
    return(
        <ContainerKBIR>
        <Background>
        <img src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/banner/virtual.jpg" alt="" />
        </Background>
        <Container>
        <Wrap>
          <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Virtualsports/global_bet.png" alt="" />
          
        </Wrap>
        <Wrap>
          <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Virtualsports/inbet.png" alt="" />
          
        </Wrap>
        <Wrap>

        <a class="game-card" href="/game-hall/game/3?PartnerId=8821EB13130C700842172EF0FD872C08&amp;">
          <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Virtualsports/kiron.png" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Virtualsports/leap.png" alt="" />

        </Wrap>
        <Wrap>
          <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Virtualsports/flg.png" alt="" />
   
        </Wrap>
        <Wrap>
          <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Virtualsports/betradar.png" alt="" />
          
        </Wrap>
      </Container>
      </ContainerKBIR>
    );
  };
  

  const ContainerKBIR = styled.div`
  margin-top: 8px;
  padding: 10px 0px 26px;
  display: column;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

  const Container = styled.div`
    margin-top: 8px;
    padding: 10px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  `;
  

  const Background = styled.div`
  width: 130%;
  height: 19vw;
  min-width: 1280px;
  max-width: 2782px;
  min-height: 224px;
  max-height: 500px;
 
  margin-top: -1px;
  padding: 10px 0px 20px;
  display: flex;

 
  }
`;
  const Wrap = styled.div`
    padding-top: 56.25%;
   
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 15px #f2eb8f;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    border: 3px solid rgba(249, 249, 249, 0.1);
    
    img {
      inset: 0px;
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      width: 100%;
      z-index: 1;
      top: 0;
    }
  
    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      video {
        opacity: 1;
      }
    }
  `;
   
    

 
export default VirtualGame;