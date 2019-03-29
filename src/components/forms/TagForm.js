import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const TagForm = ({ photoId, addTag }) => {
  const initialState = '';

  const [tag, setTag] = useState(initialState);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTag(photoId, tag);
    setTag(initialState);
  };

  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          name="text"
          placeholder="Tag name"
          value={tag}
          onChange={handleChange}
        />
      </FormGroup>
      <Button 
        className="form-control" 
        color="secondary" 
        type="submit"
      >
        Add
      </Button>
    </Form>
  );
};

TagForm.propTypes = {
  addTag: PropTypes.func.isRequired,
  photoId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default TagForm;