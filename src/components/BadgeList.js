import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';

const BadgeList = ({ badges }) => {
  const renderBadge = (badge, index) => (
    <Badge
      key={index}
      text={badge}
      type="secondary"
    />
  );

  return (
    <div className="badge-list">
      {badges && badges.map(renderBadge)}
    </div>
  );
};

Badge.propTypes = {
  badges: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
};

export default BadgeList;