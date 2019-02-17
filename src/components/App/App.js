import React, { Component } from 'react';
import BaseView from 'components/BaseView/BaseView';
import SideView from 'components/SideView/SideView';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <BaseView />
        <SideView />
      </div>
    );
  };
}

export default App;