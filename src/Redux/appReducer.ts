import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};
export default appReducer;

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess())
    
}