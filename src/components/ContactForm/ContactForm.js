import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.jest.js';
import resume from 'components/ContactForm/AhmedElnoamanyResume.pdf';
import iconSprites from 'assets/icons.svg';
import 'styles/main.scss';


class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    }
  }
  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }
  renderHeader() {
    return (
      <div className='contact-form__header-container'>
        <h1 className='contact-form__header-container--heading'>Great!</h1>
        <p className='contact-form__header-container--subheading'>Let's get in touch</p>
      </div>
    )
  }
  renderContact() {
    return (
      <div className='contact-form__contact-section'>
        <div className='contact-form__contact-section--upper'>
          <p className='contact-form__contact-section--email-text'>
            You can connect with me at my email address: ahmedgouda9484@gmail.com
          </p>
        </div>
        <div className='contact-form__contact-section--lower'>
          <a href="https://www.linkedin.com/in/ahmedelnoamany94/" target="_blank">
            <svg className="side-view__social-container--icon">
              <use xlinkHref={`${iconSprites}#icon-linkedin`}></use>
            </svg>
            <p className='contact-form__header-container--contact-text'>Contact me through LinkedIn!</p>
          </a>
          <a href={resume} download='AhmedElnoamanyResume.pdf'>
            <svg className="side-view__social-container--icon">
              <use xlinkHref={`${iconSprites}#icon-file-text-o`}></use>
            </svg>
            <p className='contact-form__header-container--contact-text'>Download my resume!</p>
          </a>
        </div>
      </div>
    )
  }
  renderResume() {    
    let { pageNumber } = this.state;
    return (
      <div className='contact-form__resume-section'>
        <Document
          file={resume}
          onLoadSuccess={() => this.onDocumentLoadSuccess}
        >
          <Page 
            pageNumber={pageNumber} 
            width={ window.innerWidth <= 600 ? (window.innerWidth * .9) : (window.innerWidth * .45)}
          />
        </Document>
      </div>
    );
  }

  render () {
    return (
      <div className='contact-form'>
        {this.renderHeader()}
        {this.renderContact()}
        {this.renderResume()}
      </div>
    );
  }
}

export default ContactForm;