import React, { Fragment } from 'react';
import { Alert, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addTag, setQuery } from '../redux/actions';
import { selectPhotosByTagName, selectQuery } from '../redux/selectors';

import PhotoList from '../components/PhotoList';
import SearchForm from '../components/forms/SearchForm';

const Photos = ({ photos, history, query, addTag, setQuery }) => (
  <div className="container mt-5">
    <SearchForm 
      query={query}
      setQuery={setQuery}
    />
    {photos.length > 0 ? (
      <Fragment>
        <PhotoList 
          photos={photos} 
          addTag={addTag} 
        />
      </Fragment>
    ) : (
      <div>
        <Alert color="light">
          <h4 className="alert-heading">No photos</h4>
          <p>Please, go back and select an album</p>
          <hr />
          <Button 
            color="secondary" 
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Alert>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  photos: selectPhotosByTagName(state),
  query: selectQuery(state),
});

const mapDispatchToProps = dispatch => ({
  addTag: (photoId, tag) => {
    dispatch(addTag(photoId, tag));
  }, 
  setQuery: (event) => {
    dispatch(setQuery(event.target.value));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(Photos);