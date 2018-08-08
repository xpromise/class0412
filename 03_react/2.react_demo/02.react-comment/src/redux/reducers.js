import {ADD_COMMENT, DEL_COMMENT} from './action-types';

const initData = [
  {username: '周雨', comment: '太阳当头照'},
  {username: '史静静', comment: '花儿对我笑'}
  ]

function reducer(preState = initData, action) {
  switch (action.type) {
    case ADD_COMMENT :
      return [action.data, ...preState];
    case DEL_COMMENT :
      return preState.filter((item, index) => index !== action.data);
    default :
      return preState;
  }
}

export default reducer;