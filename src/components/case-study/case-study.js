import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Headline from '../_global/headline';
import Header from '../header';
import ContentVideo from '../_global/content-video';
import ContentImg from '../_global/content-img';
import ContentText from '../_global/content-text';
import TechList from './tech-list';
import config from '../../config/case-study';
import './case-study.scss';

class CaseStudy extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleBack() {
    this.props.history.push('/');
  }

  renderContent(itemData) {
    return itemData.content.map((block, i) => {
      switch(block.type) {
        case 'text':
          return <ContentText data={block} index={i} key={block.type + i} />;
        case 'img':
          return (
            <ContentImg
              data={block}
              title={itemData.title}
              url={itemData.url}
              index={i}
              key={block.type + i}
            />
          )
        case 'video':
          return <ContentVideo data={block} index={i} key={block.type + i} />;
      }
    });
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
          <div className="inner-wrapper">
            <Headline text="Case Study" />
            {this.renderContent(itemData)}
            <TechList data={itemData.techList} />
            <div className="line"></div>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(CaseStudy);
