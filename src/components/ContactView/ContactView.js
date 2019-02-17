import React, { Component } from 'react';

class ContactView extends Component {
  state = {
    
  };
  renderContactLinks = () => {
    return (
      <div>Contact Link</div>
    );
  }
  
  render() {
    return (
      <div className='draggable-container__base-bottom'>
        {this.renderContactLinks()}
      </div>
    );
  };
}

export default ContactView;