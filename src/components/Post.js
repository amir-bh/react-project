import React from 'react';
import PropTypes from 'prop-types';
export const Post = ({ title, link }) => (
  <td>
    <a href={link}>{title}</a>
  </td>
);
Post.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
