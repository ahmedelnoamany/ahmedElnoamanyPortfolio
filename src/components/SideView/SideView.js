import React, { Component } from 'react';
import { connect } from 'react-redux';
import iconSprites from 'assets/icons.svg';

import 'styles/main.scss';


class SideView extends Component {
  renderBase() {
    return (
      <div className='side-view'>
        <div className='side-view__headings-container'>
          <h1 className='heading heading__primary'>What can I do for you?</h1>
          <h2 className='heading heading__secondary'>Hi, I'm Ahmed Elnoamany</h2>
        </div>
        <div className="side-view__social-container">
        <a href="https://github.com/ahmedelnoamany" target="">
            <svg  className="side-view__social-container--icon">
              <use xlinkHref={`${iconSprites}#icon-github`}></use>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ahmedelnoamany94/" target="">
            <svg className="side-view__social-container--icon">
              <use xlinkHref={`${iconSprites}#icon-linkedin`}></use>
            </svg>
          </a>
        </div>
      </div>

    )
  }
  renderMobileSide() {
    return (
      <div className='side-view'>
        <div className='side-view__headings-container'>
          <h1 className='heading heading__primary u-margin-bottom-medium'>Native Mobile Applications</h1>
          <h2 className='heading heading__secondary'>Modern feeling cross platform apps!</h2>
        </div>
      </div>
    )
  }
  renderWebSide() {
    return (
      <div className='side-view'>
        <div className='side-view__headings-container'>
          <h1 className='heading heading__primary u-margin-bottom-medium'>Front End Web Development</h1>
          <h2 className='heading heading__secondary'>Hello responsive designs!</h2>
        </div>
      </div>
    )
  }
  renderInterestedSide() {
    return (
      <div className='side-view'>
        <div className='side-view__headings-container'>
          <h1 className="heading heading__primary u-margin-bottom-medium">Alright, Let's get started</h1>
          <h2 className='heading heading__secondary'> Take a look at my resume!</h2>
        </div>
      </div>
    )
  }
  renderActiveView(whichView) {
    if (whichView === 0) {
      return this.renderBase();
    } else if (whichView === 1) {
      return this.renderInterestedSide();
    } else if (whichView === 2) {
      return this.renderMobileSide();
    } else {
      return this.renderWebSide();
    }
  }
  
  render() {
    console.log('The current View is: ', this.props.currentView);
    return this.renderActiveView(this.props.currentView);
  };
}
function mapStateToProps(state) {
  return {
    currentView: state.baseReducer.currentView
  }
}
export default connect(mapStateToProps)(SideView);