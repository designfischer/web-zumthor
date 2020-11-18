import styled from 'styled-components'
import { Button } from './button'

export const Nav = styled.div`
    max-width: 900px;
    width: 90%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.h2``
export const NavButton = styled(Button)`
    width: 100px;
    background: white;
    color: #333;
    justify-self: flex-end;
`