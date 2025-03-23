import React from 'react'
import mrWhiskerson from '../assets/mr-whiskerson.png'
import mailIcon from '../assets/mail-icon.png'
import phoneIcon from '../assets/phone-icon.png'

function Card({img,name,phone,email}) {
  return (
    <article className="contact-card">
              <img 
                  src={img}
                  alt={`Photo of ${name}`}
              />
              <h3> {name} </h3>
              <div className="info-group">
                  <img 
                      src={phoneIcon}
                      alt="phone icon" 
                  />
                  <p> {phone} </p>
              </div>
              <div className="info-group">
                  <img 
                      src={mailIcon}
                      alt="mail icon"
                  />
                  <p> {email} </p>
              </div>
          </article>
  )
}

export default Card