import React from 'react';
import { Card, CardImg, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';

const PhotoItem = ({ photo }) => (
  <Card className="my-2">
    <CardBody>
      <CardImg
        top
        width="100%"
        src={photo.thumbnailUrl}
      />
      <Form className="mt-3">
        <FormGroup>
          <Input type="text" name="text" placeholder="Tag name" />
        </FormGroup>
        <Button className="form-control" color="secondary">Add</Button>
      </Form>
    </CardBody>
  </Card>
);

export default PhotoItem;