import React, { Component } from 'react';
import BaseView from 'components/BaseView/BaseView';
import SideView from 'components/SideView/SideView';
import windowSize from 'react-window-size'
import './styles.scss';

class App extends Component {
  renderMobile() {
    return (
      <div className='app-container'>
        <SideView />
        <BaseView />
      </div>
    );
  }
  renderWeb() {
    return (
      <div className='app-container'>
        <BaseView />
        <SideView />
      </div>
    )
  }
  render() {
    return this.props.windowWidth > 600 ? this.renderWeb() : this.renderMobile();
  };
}

export default windowSize(App);