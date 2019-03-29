import React from 'react';
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

export default PhotoItem;