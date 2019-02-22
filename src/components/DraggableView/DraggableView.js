import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeView } from 'redux/actions';
import Draggable from 'react-draggable';
import windowSize from 'react-window-size';
import iconSprites from 'assets/icons.svg';
import ContactForm from 'components/ContactForm/ContactForm';
import ProjectCard from 'components/ProjectCard/ProjectCard';

import './styles.scss';

class DraggableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      view1Position: null,
      view2Position: null,
      view3Position: null,
      activeHeading: 0,
      refreshComponent: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize() {
    this.props.changeView(0);
    this.setState({ 
      view1Position: { x: 0, y: 0 },
      view2Position: { x: 0, y: 0 },
      view3Position: { x: 0, y: 0 }
    });
  }
  handleScroll() {
    console.log('View is scrolling...');

  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleStop(whichView) {
    console.log('Dragging')
    let { view1Position, view2Position, view3Position } = this.state;
    console.log('WhichView: ', whichView);
    if(whichView === 1 && this.props.windowWidth > 600) {
      if (view1Position === null || view1Position.x === 0) {
        this.setState({ 
          view1Position: {x:(this.props.windowWidth * .6), y:0},
          activeHeading: 1
        });
        this.props.changeView(1);
      } else {
        this.setState({ 
          view1Position: {x:0, y: 0},
          view2Position: {x:0, y: 0},
          view3Position: {x:0, y: 0},
          activeHeading: 0
        });
        this.props.changeView(0);
      }
    } else if (whichView === 2 && this.props.windowWidth > 600) {
      if(view2Position === null || view2Position.x === 0) {
        this.setState({
          view1Position: { x:(this.props.windowWidth * .6), y:0 },
          view2Position: { x: (this.props.windowWidth *.598), y:0 },
          activeHeading: 2
        });
        this.props.changeView(2);
      } else {
        this.setState({
          view2Position: { x: 0, y: 0 },
          view3Position: { x: 0, y: 0 },
          activeHeading: 1
        });
        this.props.changeView(1);

      }
    } else if (whichView === 3 && this.props.windowWidth > 600) {
      if(view3Position === null || view3Position.x === 0) {
        this.setState ({
          view1Position: { x: (this.props.windowWidth * .6), y: 0},
          view2Position: { x: (this.props.windowWidth *.598), y: 0 },
          view3Position: { x: (this.props.windowWidth *.596), y: 0 },
          activeHeading: 3
        });
        this.props.changeView(3);
      } else {
        this.setState({
          view3Position: { x: 0, y: 0 },
          activeHeading: 2
        });
        this.props.changeView(2);

      }
    } else if (whichView === 1 && this.props.windowWidth <= 600) {
        if (view1Position === null || view1Position.y === 0) {
          this.setState({ 
            view1Position: { x: 0, y: (window.innerHeight * .765)},
            activeHeading: 1
          });
          this.props.changeView(1);
        } else {
          this.setState({ 
            view1Position: {x:0, y: 0},
            view2Position: {x:0, y: 0},
            view3Position: {x:0, y: 0},
            activeHeading: 0
          });
          this.props.changeView(0);
        }
    } else if (whichView === 2 && this.props.windowWidth <= 600) {
        if(view2Position === null || view2Position.y === 0) {
          this.setState({
            view1Position: { x: 0, y: (window.innerHeight * .765)},
            view2Position: { x: 0, y: (window.innerHeight *.765) },
            activeHeading: 2
          });
          this.props.changeView(2);
        } else {
          this.setState({
            view2Position: { x: 0, y: 0 },
            view3Position: { x: 0, y: 0 },
            activeHeading: 1
          });
          this.props.changeView(1);

        }
    } else if (whichView === 3 && this.props.windowWidth <= 600) {
      if(view3Position === null || view3Position.y === 0) {
        this.setState ({
          view1Position: { x: 0, y: (window.innerHeight * .765)},
          view2Position: { x: 0, y: (window.innerHeight *.765) },
          view3Position: { x: 0, y: (window.innerHeight * .768) },
          activeHeading: 3
        });
        this.props.changeView(3);
      } else {
        this.setState({
          view3Position: { x: 0, y: 0 },
          activeHeading: 2
        });
        this.props.changeView(2);

      }
    }
  }
  renderInterested() {
    return <ContactForm />;
  }
  renderWeb() {
    let { webProjects } = this.props;
    console.log('The webproject is ', webProjects[0]);
    return webProjects.map((project) => <ProjectCard project={project} display='web' key={project.name}/>)
  }
  renderMobile() {
    let { mobileProjects } = this.props;
    console.log(mobileProjects);
    return mobileProjects.map((project) => <ProjectCard project={project} display='mobile' key={project.name} />)
  }
  renderDraggableView() {
    let { view1Position, view2Position, view3Position } = this.state;
    let viewSettings = [
      {
        view: 1,
        axis: this.props.windowWidth > 600 ? 'x' : 'y',
        bounds: 'parent',
        position: view1Position,
        title: 'I\'m Interested',
        func: this.renderInterested()
      },
      {
        view: 2,
        axis: this.props.windowWidth > 600 ? 'x' : 'y',
        bounds: {
          left: 0,
          right: this.props.windowWidth > 600 ? (this.props.windowWidth * .598) : 0,
          top: 0,
          bottom: this.props.windowWidth <= 600 ? (window.innerHeight * .555) : 0
        },
        position: view2Position,
        title: 'Mobile',
        func: this.renderMobile()
      },
      {
        view: 3,
        axis: this.props.windowWidth > 600 ? 'x' : 'y',
        bounds: {
          left: 0,
          right: this.props.windowWidth > 600 ? (this.props.windowWidth * .595) : 0,
          top: 0,
          bottom: this.props.windowWidth <= 600 ? (window.innerHeight * .595) : 0
        },
        position: view3Position,
        title: 'Web',
        func: this.renderWeb()
      }
    ];
    console.log('Window settings: ',viewSettings, 'window height is: ', window);

    return viewSettings.map((currentViewSettings) => {
      return (
        <Draggable 
          axis={currentViewSettings.axis}
          handle='.draggable-container__views__handle'
          defaultPosition={{ x: 0, y: 0}}
          bounds={currentViewSettings.bounds}
          position={currentViewSettings.position}
          grid={[5,5]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={() => this.handleStop(currentViewSettings.view)}
          key={currentViewSettings.title}
        >
          <div className={`draggable-container__views draggable-container__views__view-${currentViewSettings.view}`}>
            <div className={`draggable-container__views__handle draggable-container__views__handle--${currentViewSettings.view}`}>
              <svg className='draggable-container__views__handle--icon'>
                <use xlinkHref={`${iconSprites}#icon-embed`}></use>
              </svg>
              <h3 
                className={this.state.activeHeading === currentViewSettings.view ? 'draggable-container__views__handle--title draggable-container__views__handle--active' :'draggable-container__views__handle--title draggable-container__views__handle--inactive'}
                >
                {currentViewSettings.title}
              </h3>
            </div>
            <div className='draggable-container__views__contents'>
              {this.props.mobileProjects ? this.props.webProjects ? currentViewSettings.func : 'Loading' : 'Loading'}
            </div>
          </div>
        </Draggable>
      )
    })
  }
  
  render() {
    return this.renderDraggableView();
  }
}
function mapStateToProps(state) {
  return {
    webProjects: state.baseReducer.projectsWeb,
    mobileProjects: state.baseReducer.projectsMobile
  }
}
export default connect(mapStateToProps, { changeView })(windowSize(DraggableView));