import styled from 'styled-components'

export const Button = styled.button`
    max-width: 200px;
    width: 100%;
    height: 60px;

    background: #333;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s;

    font-size: 18px;
    font: inherit;

    &:hover {
        background: #ccc;
    }
`