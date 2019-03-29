import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input } from 'reactstrap';

const SearchForm = ({ query, setQuery }) => (
  <Form className="mb-3">
    <FormGroup>
      <Input 
        type="text" 
        name="text" 
        placeholder="Search by tag" 
        query={query}
        onChange={setQuery}
        />
    </FormGroup>
  </Form>
);

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchForm;