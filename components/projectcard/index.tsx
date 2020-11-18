import React from 'react'
import { SectionDescription, SectionImage, SectionProject } from './styles'

const ProjectCard = ({ _id, thumbnail, title, score }) => {
    return (
        <SectionProject key={_id}>
            <SectionImage src={thumbnail} />
            <SectionDescription>
                <p>{title}</p>
                <p>{score}</p>
            </SectionDescription>
        </SectionProject>
    )
}

export default ProjectCard
