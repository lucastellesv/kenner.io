import styled, {css} from 'styled-components';

export const Container = styled.button `
    width: 154px;
    height: 45px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    margin-top: 8px;
    `

export const Title = styled.span `
    ${props=> props.hasError ? css`color: red;` : css`color:#2148C0;`}
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

