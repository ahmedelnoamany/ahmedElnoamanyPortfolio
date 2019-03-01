import React, { Component } from 'react';
import iconSprites from 'assets/icons.svg';
import 'styles/main.scss';


class IntroIcons extends Component {
  state = {
    icons: [
      'document-file-html',
      'document-file-css',
      'javascript',
      'sass',
      'graphql',
      'react',
      'redux'
    ]
  };
  renderIcons() {
    let { icons } = this.state;
    return icons.map((iconName, index) => {
      return (
        <div key={iconName} className='intro-icons-container__circle-container'>
          <div className="intro-icons-container--circle">
            <svg className="intro-icons-container--icon">
              <use xlinkHref={`${iconSprites}#icon-${iconName}`}></use>
            </svg>
          </div>  
        </div>
      );
    });
  }
  render() {
    return (
      <div className='intro-icons-container'>
        {this.renderIcons()}
      </div>
    );
  };
}

export default IntroIcons;