import React from 'react'
import './Form.css'

import { art00, art01, art02, artBlob } from '../../assets'

const formLabels = [
  {
    label: "First Name"  
  },
  {
    label: "Last Name"  
  },
  {
    label: "Email"  
  },
  {
    label: "Campus"  
  }
]

const FormContent = ({ labels }) => (
  <div className="register__form-content">
    <h4>{labels} <span>*</span></h4>
    <input type="text" />
  </div>
)

const Form = () => {
  return (
    <div className='register__main'>
            <img src={artBlob} alt="artBlob" className='register__gradient'/>

      <div className="register__desciption">
        <div className="register__description_img-top">
          <img src={art01} alt="images" />
          <img src={art00} alt="images" />
        </div>
        <div className="register__description_text">
          <p>And that's a wrap! Thank you for everyone that attendrf TechnoFest 2024</p>

          <p>In the wilderness, they explored uncharted paths, fueling a friendly competition as they raced for treasures, their bonds strengthening with every challenge overcome.</p>
        </div>

        <img src={art02} alt="art002" className='register__art002'/>
      </div>

      <div className="register__form-container">

        <form className='register__form-main' action="" >
          {formLabels.map((item, index) => (
            <FormContent key={item.label + index} labels={item.label} />
          ))}

          <p style={{marginTop: '4rem'}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          <p style={{color: '#7C828D', fontSize:'14px'}}>By submitting my information, I confirm that I have read and understood the <a href="#"></a>Privacy Policy</p>

          <button className='button__design'>Register Now</button>
        </form>

      </div>
    </div>
  )
}

export default Form