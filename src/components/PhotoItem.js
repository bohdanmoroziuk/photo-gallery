import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody } from 'reactstrap';
import BadgeList from './BadgeList';
import TagForm from './forms/TagForm';

const PhotoItem = ({ photo, addTag }) => (
  <Card className="my-2">
    <CardBody>
      <CardImg top src={photo.thumbnailUrl} />
      <BadgeList badges={photo.tags} />
      <TagForm addTag={addTag} photoId={photo.id} />
    </CardBody>
  </Card>
);

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired,
  addTag: PropTypes.func.isRequired,
};

export default PhotoItem;