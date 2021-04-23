import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from '../../components/error-boundary/error-boundary.styles'


import './contactpage.styles.scss';

const ContactPage = () => (
<ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png'/>
            <ErrorImageText>
            <div className='contactpage'>
  <h1 className= 'whatsapp'>Whatsapp only</h1>
  <a href="tel:+2348128190603">+2348128190603</a>
  </div>            </ErrorImageText>
             </ErrorImageOverlay>

  
);


export default ContactPage;
