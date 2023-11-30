import Title from '../layouts/Title'
import React from 'react'
import ProjectsCard from './ProjectsCard'
import { projectOne } from '../../assets/index'

const Project = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>

        <div className='flex justify-center items-center text-center'>
            <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" desc="My projects"/>
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectsCard title="1" desc="ASDASDLAKSJDB ASDLKANSDLKN AS LDKASJD:LASKJDASL JDKJ" src={projectOne}/>
            <ProjectsCard title="2" desc="" src={projectOne}/>
            <ProjectsCard title="3" desc="" src={projectOne}/>
            <ProjectsCard title="4" desc="" src={projectOne}/>
            <ProjectsCard title="5" desc="" src={projectOne}/>
            <ProjectsCard title="6" desc="" src={projectOne}/>
        </div>
    
    
    </section>
  )
}

export default Project