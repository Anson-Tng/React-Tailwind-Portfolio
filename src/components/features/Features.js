import React from 'react'
import {FaMobile} from 'react-icons/fa'
import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title="Features" desc="What I Do"/>
      <div className='grid grid-cols-3 gap-20'>
      <Card title="Card 1"
      desc ="ASDASDLAKSJDB ASDLKANSDLKN AS LDKASJD:LASKJDASL JDKJ"
      icon={<FaMobile/>}/>
      <Card title="Card 2"
      desc ="DESCRIPTION"
      icon={<FaMobile/>}/>
      <Card title="Card 3"
      desc ="DESCRIPTION"
      icon={<FaMobile/>}/>
      <Card title="Card 4"
      desc ="DESCRIPTION"
      icon={<FaMobile/>}/>
      <Card title="Card 5"
      desc ="DESCRIPTION"
      icon={<FaMobile/>}/>
      <Card title="Card 6"
      desc ="DESCRIPTION"
      icon={<FaMobile/>}/>
      </div>
      
    </section>
  )
}

export default Features