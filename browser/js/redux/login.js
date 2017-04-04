import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const CREATE_USER = 'CREATE_USER';
const LOGOUT = 'LOGOUT';

/* ------------   ACTION CREATORS     ------------------ */

const findUser = user => ({ type: SET_CURRENT_USER, user });
const userCreator = user => ({ type: CREATE_USER, user });
const makeLogout = () => ({ type: LOGOUT, user: null });
// Shall we give logout param?

/* ------------       REDUCERS     ------------------ */

export default function reducer(currentUser = {}, action) {
    switch (action.type) {

        case SET_CURRENT_USER:
            return action.user;

        case CREATE_USER:
            return action.user;
            // OR ELSE TRY DEFNING ACTION.USER AS NULL HERE
        case LOGOUT:
            return action.user;

        default:
            return currentUser;
    }
}

/* ------------       DISPATCHERS     ------------------ */

export const setUser = (user) => dispatch => {
    axios.post('/login', user) //user is email/password obj
        .then(res => dispatch(findUser(res.data)))
        .catch(err => console.error('Setting user unsuccessful', err));
};

export const createUser = (user) => dispatch => {
    axios.post('/signup', user) //user is email/password obj
        .then(res => dispatch(userCreator(res.data)))
        .catch(err => console.error('Creating user unsuccessful', err));
};

export const logout = () => dispatch => {
    axios.post('/logout')
        .then(res => dispatch(makeLogout()))
        .catch(err => console.error('Logout unsuccessful', err));
};

