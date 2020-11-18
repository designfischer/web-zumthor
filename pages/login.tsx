import React from 'react'
import { DataForm, DataFormTitle, Input, InputGroup, Label, LinkText, LoginButton, NavActions, NavLink, PageData } from '../styles/registerlogin'

const Login = () => {
    return (
        <PageData>
            <DataForm>
                <DataFormTitle>
                    Entrar
                </DataFormTitle>
                <InputGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email'/>
                </InputGroup>
                <LoginButton>Entrar</LoginButton>
            </DataForm>
            <NavActions>
                <NavLink href='/register'>
                    <LinkText>Ainda não sou cadastrado</LinkText>
                </NavLink>
                <NavLink href='/'>
                    <LinkText>Voltar</LinkText>                    
                </NavLink>
            </NavActions>
        </PageData>
    )
}

export default Login
