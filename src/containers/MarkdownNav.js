import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { getTitles } from '../selectors/selectMarkdownList';
import MarkdownFiles from '../components/markdown/MarkdownFiles';

const mapStateToProps = (state) => ({
  titles: getTitles(state)
});

function MarkdownNav({ titles }) {
  return (
    <MarkdownFiles titles={titles} />
  );
}

MarkdownNav.propTypes = {
  titles: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps
)(MarkdownNav); 


