import styled from 'styled-components'

export const SectionProject = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    transition: 0.5s;
    padding: 15px;
    
    outline: none;

    cursor: pointer;

    &:hover {
        background: #ccc;
    }
`
export const SectionImage = styled.img`
    height: 200px;
    object-fit: cover;
    width: 100%;
`
export const SectionDescription = styled.div`    
    width: 100%;
    padding: 5px 7.5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`