import Link from 'next/link'
import styled from 'styled-components'
import { Button } from './button'
import { Page } from './Page'

export const PageData = styled(Page)`
    justify-content: center
`
export const DataForm = styled.form`
    max-width: 450px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
export const DataFormTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 15px;
`
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;    
    height: 60px;
    padding: 0 15px;
    border: solid;
    border-width: 0.5px;
    border-color: #ccc;
    border-radius: 8px;
    margin: 7.5px 0;
`
export const Label = styled.label`
    align-self: flex-start;
    font-size: 10px;
    margin-bottom: 5px;
`
export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    outline: none;
    border: none;
`
export const LoginButton = styled(Button)`
    margin-top: 15px;
    max-width: 450px;
`
export const NavActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 450px;
    width: 90%;
    padding: 15px;
`
export const NavLink = styled(Link)`    
`
export const LinkText = styled.p`
    cursor: pointer;
    transition: 0.5s;
    font-size: 12px;

    &:hover {
        color: #ccc;
    }
`