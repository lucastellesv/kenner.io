import styled from 'styled-components';
import background from '../../styles/BG.svg'

export const ContainerLanding = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background:url(${background}) no-repeat 50%;
    background-size: 100%, 100%;
    flex-direction: column;
`
