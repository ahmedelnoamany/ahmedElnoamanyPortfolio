import React, { Component } from 'react';
import Intro from 'components/Intro/Intro';
import IntroIcons from 'components/Intro/IntroIcons';
import DraggableView from 'components/DraggableView/DraggableView';
import windowSize from 'react-window-size';

import 'styles/main.scss';

class BaseView extends Component {
  renderMobile() {
    return (
      <div className='draggable-container'>
        <DraggableView />
        <Intro />
        <IntroIcons />
      </div>
    )
  }
  renderWeb() {
    return (
      <div className='draggable-container'>
        <Intro />
        <IntroIcons />
        <DraggableView />
      </div>
    )
  }
  render() {
    return this.props.windowWidth > 600 ? this.renderWeb() : this.renderMobile();
  };
}
export default windowSize(BaseView);