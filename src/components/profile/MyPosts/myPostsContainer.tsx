import React from "react";
import {actions} from "../../../redux/reducers/profilePageReducer";
import myPosts from "./myPosts";
import {connect} from "react-redux";
import {postDataType} from "../../../types/types";
import {AppStateType} from "../../../redux/reduxStore";

type MapStatePropsType = {
    postData: Array<postDataType>
}
type MapDispatchPropsType = {
    addPost: (title: string) => void
    deletePost: (id: number) => void
}


export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postData: state.profilePage.postData,
    }

}

const myPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, unknown, AppStateType>(mapStateToProps,
    {
        addPost: actions.addPost,
        deletePost: actions.deletePost
    })(myPosts)
export default myPostsContainer