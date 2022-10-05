import React from 'react'
import Banner from './Banner'
import Category from './Category'

const HomeView = (props) => {

  console.log(props.categories)
  return (
    <div>
        <Banner/>

        {props.categories.map((element, idx) => <Category key={idx} title={element.title} photos={element.photos} categoryRoute={element.categoryRoute}/> )}
    </div>
  )
}

export default HomeView