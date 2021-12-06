import ProfileApi from "../Api/ProfileApi";
import { ProfilePhotos } from "../typesTs/typesTS";

const ADD_POST: string = 'ADD_POST';
const SET_PROFILE: string = 'SET_PROFILE';
const SET_STATUS: string = 'SET_STATUS';
const UPDATE_STATUS: string = 'UPDATE_STATUS';
const SAVE_PHOTO: string = 'SAVE_PHOTO';
const SAVE_NEW_DATA_PROFILE: string = 'SAVE_NEW_DATA_PROFILE';

interface profileFriendsType {
    avatar: string | null
    name: string | null
    id: number | null
}
type initialStateType = typeof initialState
interface newPostType extends profileFriendsType {
    time: string | null,
    text: string | null,
    likes: string | null,
}

type ProfileContact = {
    instagram: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    facebook: string | null
    mainLink: string | null
    youtube: string | null
    github: string | null
}
type profileType = {
    userId: number | null
    lookingForAJobDescription: string | null
    fullName: string | null
    lookingForAJob: boolean
    photos: ProfilePhotos
    contact: ProfileContact
}

const initialState = {
    profile: null as profileType | null,
    status: '',
    postData: [] as Array<newPostType>,
    profileFriends: [
        { avatar: '#', name: 'Chris', id: 3 },
        { avatar: '#', name: 'Kevin', id: 4 },
        { avatar: '#', name: 'Clark', id: 5 },
        { avatar: '#', name: 'Jeniffer', id: 6 },
    ] as Array<profileFriendsType>,
};

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: newPostType = {
                id: +1,
                name: action.name,
                avatar: action.avatar,
                time: action.time,
                text: action.text,
                likes: '',
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as profileType
            };
        case SAVE_NEW_DATA_PROFILE:
            return {
                ...state,
                profile: { ...state.profile, ...action.profile }
            };
        default:
            return state;
    }
};
export default profileReducer;
type addPostACreatorType = {
    type: typeof ADD_POST,
    name: string,
    avatar: string,
    time: string,
    text: string,
}

export const addPostACreator = (name: string, avatar: string, time: string, text: string): addPostACreatorType => {
    return {
        type: ADD_POST,
        name: name,
        avatar: avatar,
        time: time,
        text: text,
    }
};

type setProfileACType = {
    type: typeof SET_PROFILE
    profile: profileType
}
export const setProfileAC = (profile: profileType): setProfileACType => ({ type: SET_PROFILE, profile });
export const setStatusAC = (status: string) => ({ type: SET_STATUS as typeof SET_STATUS, status: status as string });
export const updateStatusAC = (status: string) => ({ type: SET_STATUS as typeof SET_STATUS, status: status as string });
export const savePhotosAC = (photos: ProfilePhotos) => ({
    type: SAVE_PHOTO as typeof SAVE_PHOTO,
    photos: photos as ProfilePhotos
});
export const SaveNewDataProfileAC = (profile: profileType) => ({
    type: SAVE_NEW_DATA_PROFILE as typeof SAVE_NEW_DATA_PROFILE,
    profile: profile as profileType
});
export const getProfile = (userId: number) => async (dispatch: any) => {
    let response = await ProfileApi.getProfileInfo(userId);
    dispatch(setProfileAC(response));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await ProfileApi.getProfileStatus(userId);
    dispatch(setStatusAC(response));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await ProfileApi.updateProfileStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(updateStatusAC(status));
    }
};
export const savePhotos = (file: any) => async (dispatch: any) => {
    let response = await ProfileApi.savePhotos(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotosAC(response.data.data.photos));
    }
};
export const saveNewDataProfile = (profile: profileType, setStatus: any) => async (dispatch: any) => {
    let response = await ProfileApi.saveNewDataProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(SaveNewDataProfileAC(profile));
        return true
    } else {
        setStatus(response.data.messages[0])
        return response.data.messages[0]
    }
};
