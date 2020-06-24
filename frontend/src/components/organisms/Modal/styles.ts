import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(22px);
`

export const ModalWrapper = styled.div`
    width: 1185px;
    height: 777px;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 40px);
    background: #ad7fa8;
    display: flex;
`

export const Description = styled.div`
    width: 100%;
    height: 177px;
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(22px);
    align-self: flex-end;
`