//Actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const ISLOGGED = 'ISLOGGED';
export const ISLOGGED_SUCCES = 'ISLOGGED_SUCCES';
export const ISLOGGED_FAILED = 'ISLOGGED_FAILED';
export const FIRST_FORM = 'FIRST_FORM';
export const SECOND_FORM = 'SECOND_FORM';
export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCES = 'CREATE_USER_SUCCES';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';
export const LOGOUT = 'LOGOUT';
//initialState
const initialState = {
  isLogged: false,
  loading: false,
};

//reducer
export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_START:
      return { loading: true, error: null, isLogged: false };
    case LOGIN_FAILED:
      return { ...state, loading: false, ...payload };
    case LOGIN_SUCCES:
      return { isLogged: true, loading: false, ...payload };
    case ISLOGGED:
      return { loading: true, error: null, isLogged: false };
    case ISLOGGED_FAILED:
      return { ...state, loading: false, ...payload };
    case ISLOGGED_SUCCES:
      return { isLogged: true, loading: false, ...payload };
    case FIRST_FORM:
      return { ...state, nuevoUsuario: payload };
    case SECOND_FORM:
      return { ...state, nuevoUsuario: { ...state.nuevoUsuario, ...payload } };
    case CREATE_USER_START:
      return { loading: true, error: null, isLogged: false };
    case CREATE_USER_FAILED:
      return { ...state, loading: false, ...payload };
    case CREATE_USER_SUCCES:
      return { isLogged: true, loading: false, ...payload };
    case LOGOUT:
      return { isLogged: false, loading: false };
    default:
      return state;
  }
}
//action (action creator)
export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSucces = (payload) => ({
  type: LOGIN_SUCCES,
  payload,
});

export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
  error: true,
});

export const isLoggedStart = () => ({
  type: ISLOGGED,
});

export const isLoggedSucces = (payload) => ({
  type: ISLOGGED_SUCCES,
  payload,
});

export const isLoggedFailed = (payload) => ({
  type: ISLOGGED_FAILED,
  payload,
});
export const firstForm = (payload) => ({
  type: FIRST_FORM,
  payload,
});
export const secondForm = (payload) => ({
  type: SECOND_FORM,
  payload,
});

export const createUserStart = () => ({
  type: CREATE_USER_START,
});

export const crateUserFailed = (payload) => ({
  type: CREATE_USER_FAILED,
  payload,
});

export const createUserSucces = (payload) => ({
  type: CREATE_USER_SUCCES,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

//Thunks peticiones asincronas
/**
 * @param {string} usuario email del usuario
 * @param {string} contrasena password del usuario
 */
export const fetchLogin = (usuario, contrasena) => async (
  dispatch,
  getState,
  { axios }
) => {
  dispatch(loginStart());
  try {
    const {
      data: { data, token },
    } = await axios.post('/auth/inicia_sesion', {
      usuario,
      contrasena,
    });

    window.localStorage.setItem('villasToken', token);

    dispatch(loginSucces({ data }));
  } catch (error) {
    const { response } = error;
    const { request, ...errorObject } = response;
    const { data } = errorObject;
    dispatch(loginFailed({ error: data }));
  }
};
/**
 * @param {string} token email del usuario
 */
export const authorizedToken = (token) => async (
  dispatch,
  getState,
  { axios }
) => {
  dispatch(isLoggedStart());
  console.log(token);
  try {
    const {
      data: { data },
    } = await axios.post('/auth/autoriza-token', {
      token,
    });

    dispatch(isLoggedSucces({ data }));
  } catch (error) {
    const { response } = error;
    const { request, ...errorObject } = response;
    const { data } = errorObject;
    dispatch(isLoggedFailed({ error: data }));
  }
};

export const createUser = () => async (dispatch, getState, { axios }) => {
  const { nuevoUsuario } = getState().user;
  console.log(nuevoUsuario);
  dispatch(createUserStart());
  try {
    const {
      data: { token, data },
    } = await axios.post('/auth/registro_cliente', { nuevoUsuario });
    window.localStorage.setItem('pv2token', token);
    dispatch(createUserSucces({ data }));
  } catch (error) {
    const { response } = error;
    const { request, ...errorObject } = response;
    const { data } = errorObject;
    dispatch(crateUserFailed({ error: data }));
  }
};
