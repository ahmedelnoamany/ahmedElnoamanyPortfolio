import React, { Component } from 'react';
import Intro from 'components/Intro/Intro';
import IntroIcons from 'components/Intro/IntroIcons';
import DraggableView from 'components/DraggableView/DraggableView';
import './styles.scss';

class BaseView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    return (
      <div className='draggable-container'>
        <Intro />
        <IntroIcons />
        <DraggableView />
      </div>
    );
  };
}
export default BaseView;