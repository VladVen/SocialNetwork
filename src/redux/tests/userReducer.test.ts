import userPageReducer, {actions, initialStateType, setFollowTC} from "../reducers/userPageReducer";



let state: initialStateType;

beforeEach(() => {
    state = {
        usersData: [{
            id: 1,
            name: 'iam',
            followed: false,
            photos: {small: null, large: null},
            status: 'status 1'
        },{
            id: 2,
            name: 'no iam',
            followed: false,
            photos: {small: null, large: null},
            status: 'status 2'
        },{
            id: 3,
            name: 'lmao',
            followed: false,
            photos: {small: null, large: null},
            status: 'status 3'
        },{
            id: 4,
            name: '4',
            followed: true,
            photos: {small: null, large: null},
            status: 'status 4'
        },],
        pageSize: 5,
        totalCount: 0,
        currentPage: 1,
        isFetching: false,
        followInProgress: [],
        filter: {
            term: '',
            friend: null as null | boolean
        }
    }
})

test ('Follow Success', () => {
    const newState = userPageReducer(state, actions.setFollow(1))
    expect(newState.usersData[0].followed).toBeTruthy()
    expect(newState.usersData[1].followed).toBeFalsy()
});
test ('Unfollow Success', () => {
    const newState = userPageReducer(state, actions.setUnfollow(1))
    expect(newState.usersData[0].followed).toBeFalsy()
    expect(newState.usersData[1].followed).toBeFalsy()
});




