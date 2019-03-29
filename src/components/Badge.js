import React from 'react';
import PropTypes from 'prop-types';
import { contextualVariations } from '../constants';

const Badge = ({ type, text }) => (
  <span class={`badge badge-${type} m-1`}>{text}</span>
);

Badge.propTypes = {
  type: PropTypes.oneOf(
    contextualVariations
  ).isRequired,
  text: PropTypes.string.isRequired,
};

export default Badge;