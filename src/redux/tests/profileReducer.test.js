import React from "react";
import profilePageReducer, {addPost} from "../reducers/profilePageReducer";

it('add post testing', () => {
    let action = addPost('some text')
    let n = 1
    let initialState = {
        profileData: null,
        postData: [
            {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
            {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
            {id: n++, message: 'i start developing my own social network', likes: 456, dislikes: 165},
            {id: n++, message: 'it is so easy', likes: 456, dislikes: 165}
        ],
        newPostText: '',
        status: '',
    }

    let newState = profilePageReducer(initialState, action)

    expect(newState.postData.length).toBe(5)
});
it('post count decreased', () => {
    let action = deletePost(1)

    let newState = profilePageReducer(initialState, action)

    expect(newState.postData.length).toBe(3)
});

