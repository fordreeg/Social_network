import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS:string = 'INITIALIZED_SUCCESS';

<<<<<<< HEAD
export type initialStateType = {initialized: boolean}
const initialState: initialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any):initialStateType => {
=======
export type initialStateType = {
    initialized: boolean,
};

const initialState:initialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action:any):initialStateType => {
>>>>>>> 59673158118fced5652f0db5ae500730cc70bb70
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

<<<<<<< HEAD
type initializedSuccessActionType = {type: typeof INITIALIZED_SUCCESS}
export const initializedSuccess = ():initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});
=======
export type initializedSuccessType = {type: typeof INITIALIZED_SUCCESS};
export const initializedSuccess = ():initializedSuccessType => ({type: INITIALIZED_SUCCESS});
>>>>>>> 59673158118fced5652f0db5ae500730cc70bb70

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess())
<<<<<<< HEAD
}
=======

}
>>>>>>> 59673158118fced5652f0db5ae500730cc70bb70
