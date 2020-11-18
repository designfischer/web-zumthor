import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { data } from '../mock/data'
import { Logo, Nav, NavButton } from '../styles/nav'
import { Page } from '../styles/page'
import { MainBody } from '../styles/main'
import { Button } from '../styles/button'
import { FaPlus } from 'react-icons/fa'
import { sliderSettings } from '../styles/slider-config'
import ProjectCard from '../components/projectcard'

const Profile = () => {
    return (
        <Page>            
            <Nav>
                <Logo>
                    Zumthor
                </Logo>
                
                <NavButton>
                    Sair
                </NavButton>                               
            </Nav>
            <MainBody>
                <ProfileSection>

                    <SectionHeader>
                        <SectionTitle>
                            Referências de Projeto
                        </SectionTitle>
                        <AddButton>
                            <FaPlus />
                        </AddButton>
                    </SectionHeader>
                    
                        <ProjectSlider {...sliderSettings}>
                            {data.map(room => (
                                <ProjectCard 
                                    key={room._id}
                                    _id={room._id}
                                    score={room.score}
                                    thumbnail={room.thumbnail}
                                    title={room.title}
                                />
                            ))}  
                        </ProjectSlider>                                              
                    
                </ProfileSection>
                <ProfileSection>
                    
                    <SectionHeader>
                        <SectionTitle>
                            Propostas
                        </SectionTitle>
                        <AddButton>
                            <FaPlus />
                        </AddButton>
                    </SectionHeader>
                    
                        <ProjectSlider {...sliderSettings}>
                            {data.map(room => (
                                <ProjectCard 
                                    key={room._id}
                                    _id={room._id}
                                    score={room.score}
                                    thumbnail={room.thumbnail}
                                    title={room.title}
                                />
                            ))}  
                        </ProjectSlider>                                              
                    
                </ProfileSection>
            </MainBody>

        </Page>
    )
}

export default Profile

const ProfileSection = styled.div`    
    
    width: 100%;

    display: flex;
    align-items: center;
    
    flex-direction: column;
    margin: 15px 0;    
`
const SectionHeader = styled.div`
    width: 100%;   
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SectionTitle = styled.h2`
    font-size: 16px;
`
const AddButton = styled(Button)`
    height: 45px;
    width: 45px;
`
const ProjectSlider = styled(Slider)`
    width: 100%;
`