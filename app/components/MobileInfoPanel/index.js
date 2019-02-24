/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-string-refs */
import React from 'react';
import styled from 'styled-components';
import Swipe from 'react-easy-swipe';
import PropTypes from 'prop-types';

import buildButtons from './helpers/buildButtons';
import buildCopy from './helpers/buildCopy';

const ColourLayer = styled.div`
  background-color: rgba(249, 56, 35, 0.35);
  width: 100%;
  height: 100%;
  position: relative;
  bottom: calc(100% + 16px);
  right: 16px;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  height: calc(38vh - 0px);
  margin: 16px;
`;

class MobileInfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location.pathname.replace(/\//gi, '');
    this.swipeDirection = null;
    props.updateProject ? props.updateProject('Black Mirror') : null;
    this.copyBox = React.createRef();
  }

  handleForwardClick = () => {
    const { projectList, project, updateProject } = this.props;
    const val = projectList.indexOf(project) + 1;
    if (projectList[val]) {
      updateProject(projectList[val]);
    } else {
      updateProject(projectList[0]);
    }
  };

  handleBackwardClick = () => {
    const { projectList, project, updateProject } = this.props;
    const val = projectList.indexOf(project) - 1;
    if (projectList[val]) {
      updateProject(projectList[val]);
    } else {
      updateProject(projectList[projectList.length - 1]);
    }
  };

  componentDidUpdate() {
    this.copyBox.current.scrollTop = 0;
  }

  render() {
    if (this.props.message) {
      return (
        <div
          ref="parent"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Swipe>
            {buildButtons()}
            <Wrapper>
              {buildCopy()}
              <ColourLayer />
            </Wrapper>
          </Swipe>
        </div>
      );
    }
    return null;
  }
}

MobileInfoPanel.propTypes = {
  projectList: PropTypes.array,
  updateProject: PropTypes.func,
  project: PropTypes.string,
  message: PropTypes.object,
  location: PropTypes.object,
};

export default MobileInfoPanel;
