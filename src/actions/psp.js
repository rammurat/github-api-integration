import { POST_LIST, POST_PAGINATION, SORT_TYPE, LANG_TYPE, POST_ERROR, IS_NO_ITEMS } from './types.js';
import config from '../app-config'
axios.defaults.baseURL = 'https://api.github.com';
import axios from 'axios'

// reset PSP data on filter change and initial load
export const updatePSP = (data) => dispatch => {
  const _data = data.items.map((obj) => {
    const { id, name, url, language, stargazers_count, owner } = obj
    const { login, html_url } = owner

    return {
      id, name, url, language, stargazers_count, login, html_url
    }
  })

  const _items = _data && !_data.length
  const _error = _items ? 'There are no items to be shown.' : ''

  dispatch({
    type: POST_LIST,
    payload: _data
  })

  dispatch({
    type: POST_PAGINATION,
    payload: data.total_count
  })

  dispatch({
    type: POST_ERROR,
    payload: _error
  })
  dispatch({
    type: IS_NO_ITEMS,
    payload: _items
  })
};

// fetch latest posts based on last filter action/default configuration
export const fetchPosts = (query = 'javascript') => dispatch => {

  try {
    axios.get(config.appUrls.search, {
      params: {
        q: query,
        sort: 'stars',
        order: 'desc'
      }
    })
      .then(function (response) {
        // update new records
        if (response.data && response.data.items) {
          dispatch(updatePSP(response.data))
        }
        console.log(response);
      })
      .catch(function (error) {

        console.log(error);
      })
  } catch (error) {
    console.error(error);
  }
};

// sort data in asc/desc form
export const updateSortType = (type) => dispatch => {
  dispatch({
    type: SORT_TYPE,
    payload: type
  })
}

// update language type
export const updateLangType = (type) => dispatch => {
  // reset sort type to 'asc' again on main filter change
  dispatch(updateSortType('asc'))

  dispatch({
    type: LANG_TYPE,
    payload: type
  })

  dispatch(fetchPosts(type))
};

// update filter type
export const updateSearch = (search) => dispatch => {
  // reset sort type to 'asc' again on main filter change
  dispatch(updateSortType('asc'))
  dispatch(fetchPosts(search))
};
