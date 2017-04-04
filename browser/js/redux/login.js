import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const CREATE_USER = 'CREATE_USER';

/* ------------   ACTION CREATORS     ------------------ */

const findUser = user => ({ type: SET_CURRENT_USER, user });
const userCreator = user => ({ type: CREATE_USER, user });

/* ------------       REDUCERS     ------------------ */

export default function reducer(currentUser = {}, action) {
    switch (action.type) {

        case SET_CURRENT_USER:
            return action.user

        case CREATE_USER:
            return action.user

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