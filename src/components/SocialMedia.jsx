import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter>
              <a href="https://www.facebook.com/puneeth.punee.52459"></a>
            </BsTwitter>
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaFacebookF />
        </div>
      
    </div>
  )
}

export default SocialMedia
