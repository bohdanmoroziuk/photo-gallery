import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbums, fetchPhotos } from '../redux/actions';
import { selectAlbums } from '../redux/selectors';

import AlbumList from '../components/AlbumList';
class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, fetchPhotos } = this.props;

    return (
      <div className="container mt-5">
        <AlbumList 
          albums={albums} 
          fetchPhotos={fetchPhotos} 
        />
      </div>
    );
  }
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  fetchAlbums: PropTypes.func.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  albums: selectAlbums(state),
});

export default connect(
  mapStateToProps, { 
    fetchAlbums, 
    fetchPhotos,
  }
)(Albums);