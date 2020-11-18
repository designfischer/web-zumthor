import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Button } from '../styles/button'
import { Page } from '../styles/page'
import { Logo, Nav, NavButton } from '../styles/nav'
import { MainBody } from '../styles/main'

const Zumthor = () => {
    return (
        <Page>
            
            <Nav>
                <Logo>
                    Zumthor
                </Logo>
                <Link href='/login'>
                    <NavButton>
                        Entrar
                    </NavButton>
                </Link>                
            </Nav>
            
            <MainBody>
                <Title>
                    Zumthor
                </Title>
                <SubTitle>
                    Crie experiências espaciais para seus clientes e usuários com a ajuda da inteligência artifical.
                </SubTitle>
                <Actions>
                    <Link href='/login'>
                        <EnterButton>
                            Entrar
                        </EnterButton>
                    </Link>
                    <SearchButton>
                        Ver projetos
                    </SearchButton>
                </Actions>
            </MainBody>  
                                    
        </Page>
    )
}

export default Zumthor

const Title = styled.h1`
    font-size: 72px;
    margin-bottom: 24px;
`
const SubTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    font-weight: normal;
`
const Actions = styled.div`
    display: flex;
    max-width: 600px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 25px;
`
const EnterButton = styled(Button)`
    margin-right: 7.5px;
    
`
const SearchButton = styled(Button)`
    margin-left: 7.5px;
    background: #5f5f5f;
`


