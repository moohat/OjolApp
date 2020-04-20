/* eslint-disable no-fallthrough */
import {combineReducers} from 'redux';

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'Ini adalah desc untuk register',
};

const initialStateLogin = {
  info: 'Masukan Password anda',
  isLogin: true,
};
const registerReducer = (state = initialStateRegister, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      state = {...state, title: 'Register ganti title'};
      break;
    case 'SET_FORM':
      state = {
        ...state,
        form: {
          ...state.form,
          [action.inputType]: action.inputValue,
        },
      };
    default:
      state;
      break;
  }
  return state;
};

const loginReducer = (state = initialStateLogin, action) => {
  return state;
};

// const reducer = (state = initialState, action) => {
//   return state;
// };

const reducer = combineReducers({
  registerReducer,
  loginReducer,
});

export default reducer;
