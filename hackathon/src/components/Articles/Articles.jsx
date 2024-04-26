import React from 'react'
import './Articles.css'
import { article } from './index'

const Article = ({ img, title, icon, Name, position }) => (
  <div className='agenda__main-content'>
    <div className="article__main-content_img">
      <img src={img} alt="article" />
    </div>

    <div className="article__main-content_text">
      <h1>{title}</h1>
      <div className="article__main-content_text-person">
        <img src={icon} alt="icon" />

        <div className="article__main-content_text-person-name">
          <h3>{Name}</h3>
          <p>{position}</p>
        </div>
      </div>

    </div>

  <div className="article__main-readmore">
    <p>Read More</p>
  </div>
  </div>
)

const Articles = () => {
  return (
    <div className='article__main'>
      <div className="article__main-container">
        <h1 className="heading heading__article">Articles</h1>

        <div className="agenda__main-container-content">
          {article.map((item, index) => (
            <Article key={item.title + index} title={item.title} img={item.img} icon={item.icon} Name={item.Name} position={item.position} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles