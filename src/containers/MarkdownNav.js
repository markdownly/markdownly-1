import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { getTitles, getActiveMarkdown } from '../selectors/selectMarkdownNav';
import MarkdownFiles from '../components/markdown/MarkdownFiles';

const mapStateToProps = (state, props) => ({
  titles: getTitles(state),
  activeMarkdown: getActiveMarkdown(state, props.index)  
});

function MarkdownNav({ titles }) {
  return (
    <MarkdownFiles titles={titles} />
  );
}

MarkdownNav.propTypes = {
  titles: PropTypes.array.isRequired,
  activeMarkdown: PropTypes.object
};

export default connect(
  mapStateToProps
)(MarkdownFiles); 


