import React, { Component } from 'react';
import './styles.scss';

class TechTable extends Component {
  render() {
    return (
      <table className='tech-table'>
        <table style={{width: '100%', height: '100%'}}>
          <tr className='tech-table__row'>
            {this.props.techs.map((tech, index) => {
              return index < 3 ? <td key={tech + index} className={this.props.display === 'web' ? 'tech-table__element tech-table__element--1' : 'tech-table__element tech-table__element--2' }>{tech}</td> : null;
            })}
          </tr>
        </table>
        <table style={{width: '100%', height: '100%', borderSpacing: '1rem'}}>
          <tr className='tech-table__row'>
              {this.props.techs.map((tech, index) => {
                return index >= 3 && index < 5 ? <td key={tech + index} className={this.props.display === 'web' ? 'tech-table__element tech-table__element--1' : 'tech-table__element tech-table__element--2' }>{tech}</td> : null;
              })}
          </tr>
        </table>
      </table>
    )
  }
}
export default TechTable;