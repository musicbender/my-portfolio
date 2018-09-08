import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../header';
import TechList from './tech-list';
import config from '../../config/case-study';
import './case-study.scss';

class CaseStudy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props.match.params;
    const itemData = config[item];
    return (
      <main className="case-study">
        <Header
          type="subpage"
          title={itemData.title}
          techList={itemData.techList}
        />
        <section className="case-study-section">
          <svg className="bigTriangleColor separator-work" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L0 0 L30 100 L100 0 L100 100 Z" />
          </svg>
          <TechList data={itemData.techList} />
        </section>
      </main>
    );
  }
}

export default withRouter(CaseStudy);
