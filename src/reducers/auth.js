import{
    CHANGE_AUTH_IN,
    CHANGE_AUTH_OUT,
} from '../actions/types';

const INITIAL_STATE ={
    loggedInStatus: false
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_AUTH_OUT:
            state.loggedInStatus= false;
            return{
                ...state,
            }
        case CHANGE_AUTH_IN:
            state.loggedInStatus= true;
            return{
                ...state,
            }
        default: return state;
    }
}