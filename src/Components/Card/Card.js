import styled from "styled-components"

export const Card = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 1vw 5vh 1vw;
    
    img {
        max-width: 30vw;
        max-height: 33vh;
        margin-bottom: 2vh;
    }
    
    button {
        margin-top: 10px;
    }
`