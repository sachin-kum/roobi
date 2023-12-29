import {
  USERSINUP_FAILED,
  USERSINUP_REQUEST,
  USERSINUP_RESPONSE,
  USERLOGIN_FAILED,
  USERLOGIN_RESPONSE,
  USERLOGIN_REQUEST,
  vandoracount_FAILED,
  vandoracount_REQUEST,
  vandoracount_RESPONSE,
  CLEAR_ERROR,
  LOADUSERDATA_FAILED,
  LOADUSERDATA_RESPONSE,
  USERUPDATE_REQUEST,
  USERUPDATE_RESPONSE,
  USERUPDATE_FAILED,
  CATEGORY_REQUEST,
  CATEGORY_RESPONSE,
  CATEGORY_FAILED,
  THEMELIST_REQUEST,
  THEMELIST_RESPONSE,
  THEMELIST_FAILED,
} from "../constant/Userconstant";

export const userreducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USERLOGIN_REQUEST:
    case USERSINUP_REQUEST:
    case LOADUSERDATA_FAILED:
    case USERUPDATE_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case USERLOGIN_RESPONSE:
    case USERSINUP_RESPONSE:
    case LOADUSERDATA_RESPONSE:
    case USERUPDATE_RESPONSE:
      return {
        loading: false,
        isAuthenticated: action.payload.data.authenticate,
        user: action.payload.data,
      };
    case USERLOGIN_FAILED:
    case USERSINUP_FAILED:
    case LOADUSERDATA_FAILED:
    case USERUPDATE_FAILED:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.error,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const vandorreducer = (state = { vandor: {} }, action) => {
  switch (action.type) {
    case vandoracount_REQUEST:
      return {
        loading: true,
        vandor: {},
      };
    case vandoracount_RESPONSE:
      return {
        loading: false,
        isAuthenticated: true,
        vandor: action.payload,
      };
    case vandoracount_FAILED:
      return {
        loading: false,
        error: action.error,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const category_reducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        loading: true,
        catgory: {},
      };
    case CATEGORY_RESPONSE:
      return {
        loading: false,
        category: action.payload,
      };
    case CATEGORY_FAILED:
      return {
        loading: false,
        error: action.error,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const themes_reducer = (state = { themes: {} }, action) => {
  switch (action.type) {
    case THEMELIST_REQUEST:
      return {
        loading: true,
        themes: {},
      };
    case THEMELIST_RESPONSE:
      return {
        loading: false,
        themes: action.payload,
      };
    case THEMELIST_FAILED:
      return {
        loading: false,
        error: action.error,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
