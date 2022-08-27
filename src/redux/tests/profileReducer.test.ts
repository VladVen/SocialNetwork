import profilePageReducer, {actions} from "../reducers/profilePageReducer";
import {postDataType} from "../../types/types";

let n = 1

const state = {
    profileData: null ,

    postData: [
        {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: n++, message: 'i start developing my own social network', likes: 456, dislikes: 165},
        {id: n++, message: 'it is so easy', likes: 456, dislikes: 165}
    ] as Array<postDataType>,
    newPostText: '',
    status: null as string | null,
    errorMessage: null as string | null,
}

it('add post testing', () => {
    let action = actions.addPost('some text')

    let newState = profilePageReducer(state, action)

    expect(newState.postData.length).toBe(5)
});
it('post count decreased', () => {
    let action = actions.deletePost(1)

    let newState = profilePageReducer(state, action)

    expect(newState.postData.length).toBe(3)
});

