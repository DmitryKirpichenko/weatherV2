import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as weatherAction from '../store/actions/weather';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(weatherAction, dispatch);
};
