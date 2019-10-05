import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/psp.js';
import Pagination from './pagination'

class Posts extends Component {
  constructor(props) {
    super(props);

    this.getSortedData = this.getSortedData.bind(this);
  }

  componentWillMount() {
    // load data on component ready
    this.props.fetchPosts();
  }

  // sort data in asc/desc form
  getSortedData(order) {
    if (this.props.posts) {
      if (order === 'asc') {
        return this.props.posts.sort((a, b) => {
          return a.stargazers_count - b.stargazers_count
        })
      } else {
        return this.props.posts.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count
        })
      }
    }
  }

  render() {
    // count total number of repos
    const totalPosts = this.props.paginator
    const sortedList = this.getSortedData(this.props.order).slice(0, this.props.perPage) || []

    const postItems = sortedList && sortedList.map(post => (
      <div className="product-list" key={post.id}>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <ul>
              <li>Repo Name</li>
              <li>Url</li>
              <li>Language</li>
              <li>No. of star gazers</li>
              <li>User</li>
              <li>Profile</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <ul>
              <li>{post.name}</li>
              <li>{post.url}</li>
              <li>{post.language}</li>
              <li>{post.stargazers_count}</li>
              <li>{post.login}</li>
              <li><a href={post.html_url}>{post.html_url}</a></li>
            </ul>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="row justify-content-end">
          <div className="col-sm-12 col-md-4 col-lg-4">
            {!!totalPosts &&
              < p > Total number of repositories<strong>{totalPosts}</strong></p>}
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <Pagination paginator={totalPosts} />
          </div>
        </div>

        {this.props.isNoResult && <p className="alert alert-danger" role="alert">{this.props.errMsg}</p>}

        {/** Load PSP items */}
        {postItems.length ? postItems : <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>}
      </div >
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array,
  order: PropTypes.string,
  perPage: PropTypes.number,
  errMsg: PropTypes.string,
  isNoResult: PropTypes.bool
};

const mapStateToProps = state => ({
  isNoResult: state.posts.isNoResult,
  errMsg: state.posts.errMsg,
  posts: state.posts.repos,
  paginator: state.posts.paginator,
  order: state.posts.selectedOrder,
  perPage: state.posts.initialConfig.pagination.perPage
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
