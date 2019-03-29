import React from 'react';
import { Alert, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { selectPhotos } from '../redux/selectors';

import PhotoList from '../components/PhotoList';

const Photos = ({ photos, history }) => (
  <div className="container mt-5">
    {photos.length > 0 ? (
      <PhotoList photos={photos} />
    ) : (
      <div>
        <Alert color="light">
          <h4 className="alert-heading">No photos</h4>
          <p>Please, go back and select an album</p>
          <hr />
          <Button color="secondary" onClick={() => history.goBack()}>Back</Button>
        </Alert>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  photos: selectPhotos(state),
});

export default connect(
  mapStateToProps,
)(Photos);