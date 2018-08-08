import {ADD_COMMENT, DEL_COMMENT, INIT_COMMENTS} from './action-types';

export const addComment = data => ({type: ADD_COMMENT, data});

export const delComment = data => ({type: DEL_COMMENT, data});

export const initComments = data => ({type: INIT_COMMENTS, data});

export const initFetchData = () => {
  return dispatch => {
    setTimeout(() => {
      const commentsList = [
        {username: '周雨', comment: '太阳当头照'},
        {username: '史静静', comment: '花儿对我笑'}
      ];
      dispatch(initComments(commentsList));
    }, 1000)
  }
}