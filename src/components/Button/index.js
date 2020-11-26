import React from 'react'
import {Container, Title} from './styles'


export default function Button({title, hasError}) {
    return (
    <Container>
        <Title hasError={hasError}>{title}</Title>
    </Container>
    )
}
