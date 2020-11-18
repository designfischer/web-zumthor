import React from 'react'

import { DataForm, DataFormTitle, Input, InputGroup, Label, LinkText, LoginButton, NavActions, NavLink, PageData } from '../styles/registerlogin'

const Login = () => {
    return (
        <PageData>
            <DataForm>
                <DataFormTitle>
                    Cadastrar
                </DataFormTitle>
                <InputGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email'/>
                </InputGroup>
                <InputGroup>
                    <Label htmlFor='confirmationEmail'>Confirmar Email</Label>
                    <Input id='confirmationEmail'/>
                </InputGroup>
                <LoginButton>Cadastrar</LoginButton>
            </DataForm>
            <NavActions>
                <NavLink href='/login'>
                    <LinkText>Já sou cadastrado</LinkText>
                </NavLink>
                <NavLink href='/'>
                    <LinkText>Voltar</LinkText>                    
                </NavLink>
            </NavActions>
        </PageData>
    )
}

export default Login
