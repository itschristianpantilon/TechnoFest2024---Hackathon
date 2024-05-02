import React from 'react'
import './DiscoverContainer.css'
import { articlePrev1, articlePrev2, articlePrev3 } from '../../assets'

const data = [
  {
    img: articlePrev1,
    highlight: "MEASURE",
    title: "Monitor progress as it happens.",
    paragraph: "Gain a high-level overview of how aligned initatives are progressing."
  },
  {
    img: articlePrev2,
    highlight: "ENJOY",
    title: "Compete on multiple fronts.",
    paragraph: "Select and prioritize Lists that align with strategic objectives."
  },
  {
    img: articlePrev3,
    highlight: "WIN",
    title: "Advance your knowledge and skills.",
    paragraph: "Share portfolios with stakeholders and limit permissions when needed, so you feel safe and the team stays informed."
  }
];

const Containers = ({ img, highlight, title, paragraph }) => (
  <div className="discover__content">
    <div className="discover__content-text">
      <h4>{highlight}</h4>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button className='button__design'>Get Started</button>
    </div>
    <div className="discover__content-img">
      <img src={img} alt="articlepreview" />
    </div>
  </div>
)

const DiscoverContainer = () => {
  return (
    <div className='discover__main'>
      <h1>Everything You Need to Track Your Success</h1>
      <div className="discover__main-container">
        {data.map((item, index) => (
          <Containers key={item.title + index} img={item.img} highlight={item.highlight} title={item.title} paragraph={item.paragraph} />
        ))}
      </div>
    </div>
  )
}

export default DiscoverContainer