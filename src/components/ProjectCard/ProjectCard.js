import React, { Component } from 'react';
import iconSprites from 'assets/icons.svg';
import TechTable from 'components/TechTable/TechTable';
import 'styles/main.scss';


class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFrontActive: true,
      displayedImageIndex: 0,
    }
  }
  changeImage(val) {
    let { displayedImageIndex } = this.state;
    let { thumbnails } = this.props.project;

    if (val === -1 && displayedImageIndex === 0) { this.setState({displayedImageIndex: thumbnails.length - 1}) }
    else if (val === -1) { this.setState({ displayedImageIndex : displayedImageIndex - 1})}

    if(val === 1 && displayedImageIndex === thumbnails.length - 1) {this.setState({ displayedImageIndex: 0})}
    else if (val === 1) { this.setState({ displayedImageIndex: displayedImageIndex + 1})}
  }
  renderCardFront() {
    return (
      <div className={this.props.display === 'mobile' ? 'project-card__side project-card--2' : 'project-card__side project-card--1'}>
        <div className='project-card__button-container'>
          <div style={{marginLeft: '2%', width: '90%'}}>
            <h1 className='text text__projects--heading'>{this.props.project.name}</h1>
            <h3 className='text__projects--subheading'>{this.props.project.subheading ? this.props.project.subheading : ''}</h3>
          </div>
          <button className={this.props.display === 'mobile' ? `project-card__button-container__btn project-card__button-container__btn--2` : `project-card__button-container__btn project-card__button-container__btn--1`} onClick={() => this.setState({cardFrontActive: false})}>
            <svg className='project-card__button-container__btn__icon'>
              <use xlinkHref={`${iconSprites}#icon-repeat`}></use>
            </svg>
          </button>
        </div>
        <div className='project-card__image-container'>
          <div className='project-card__image-container__main-image-container'>
            <img 
              alt='Project-thumnail'
              className={this.props.display === 'mobile' ?"project-card__image-container--main-image-mobile" : "project-card__image-container--main-image"}
              src={require(`assets/${this.props.display}${this.props.index+1}/${this.props.project.thumbnails[this.state.displayedImageIndex]}`)}
            />
          </div>
          <div className='project-card__image-container__thumbnails-container'>
            <button className={this.props.display === 'mobile' ? `project-card__button-container__btn__small project-card__button-container__btn--2` : `project-card__button-container__btn__small project-card__button-container__btn--1`} onClick={() => this.changeImage(-1)}>
              <svg style={{height: '2rem', width: '2rem', fill: '#fff'}}>
                <use xlinkHref={`${iconSprites}#icon-arrow-thin-left`}></use>
              </svg>
            </button>
            <button className={this.props.display === 'mobile' ? `project-card__button-container__btn__small project-card__button-container__btn--2` : `project-card__button-container__btn__small project-card__button-container__btn--1`} onClick={() => this.changeImage(1)}>
              <svg style={{height: '2rem', width: '2rem', fill: '#fff'}}>
                <use xlinkHref={`${iconSprites}#icon-arrow-thin-right`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className='project-card__description-container'><h3 className='text text__projects text__projects--description'>{this.props.project.description}</h3></div>
        <div style={{flex: .05, width: '100%'}}>
          <TechTable techs={this.props.project.techs} display={this.props.display}/>
        </div>
      </div>
    )
  }
  renderCardBack() {
    return (
      <div className={this.props.display === 'mobile' ? 'project-card__side project-card--2' : 'project-card__side project-card--1'}>
        <div className='project-card__button-container project-card__rotated-content'>
          <div style={{marginLeft: '2%', width: '90%'}}>
            <h1 className='text text__projects--heading'>{this.props.project.name}</h1>
            <h3 className='text__projects--subheading'>Explore Nature</h3>
          </div>
          <button className={this.props.display === 'mobile' ? `project-card__button-container__btn project-card__button-container__btn--2` : `project-card__button-container__btn project-card__button-container__btn--1`} onClick={() => this.setState({cardFrontActive: true})}>
            <svg className='project-card__button-container__btn__icon'>
              <use xlinkHref={`${iconSprites}#icon-repeat`}></use>
            </svg>
          </button>
        </div>
        
        <div className='project-card__rotated-content project-card__rotated-content__info-container'>
            {/* <div className='project-card__rotated-content__scale-of-awesome'>
              <div 
                style={{flex: .3, backgroundColor: this.props.project.awesome >= 3 ?'#DBAE19' : 'transparent', width: '100%', textAlign: 'center'}}
              >
                <p style={{marginTop: '-12%', fontSize:'1rem', fontWeight: 100, fontFamily: 'Arial', color: '#605856'}}>TOO DAMN AWESOME</p><hr />
              </div>
              <div 
                style={{flex: .3, backgroundColor: this.props.project.awesome >= 2 ?'#DBAE19' : 'transparent', width: '100%', textAlign: 'center'}}
              >
                <p style={{marginTop: '-12%', fontSize:'1rem', fontWeight: 100, fontFamily: 'Arial', color: '#605856'}}>Wow, Awesome</p><hr />
              </div>
              <div 
                style={{flex: .3, backgroundColor: this.props.project.awesome >= 1 ?'#DBAE19' : 'transparent', width: '100%', textAlign: 'center'}}
              >
                <p style={{marginTop: '-12%', fontSize:'1rem', fontWeight: 100, fontFamily: 'Arial', color: '#605856'}}>Pretty Awesome</p><hr />
              </div>
            </div> */}
            Coming Soon
        </div>

        {/* <div className='project-card__rotated-content project-card__rotated-content__text-container'>
            <p className='project-card__rotated-content__description-long'>{this.props.project.descriptionLong}</p>
        </div> */}
      </div>
    )
  }
  render() {
      let { cardFrontActive } = this.state;
    return (
      <div 
        className={
          cardFrontActive ? 'project-card' : 'project-card project-card__back'
        }
      >
        {cardFrontActive && this.renderCardFront()}
        {!cardFrontActive && this.renderCardBack()}
      </div>
    );
  };
}

export default ProjectCard;