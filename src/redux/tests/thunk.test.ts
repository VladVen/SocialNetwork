import {DefaultResponse, ResultCodes} from "../../API/api";
import {actions, setFollowTC, setUnfollowTC} from "../reducers/userPageReducer";
import {followAPI} from "../../API/users-api";
jest.mock('../../API/users-api')
const userApiMock = followAPI as jest.Mocked<typeof followAPI>

const result: DefaultResponse = {
    resultCode: ResultCodes.success,
    messages: [],
    data: {}
}

const dispatchMock = jest.fn()
const getState = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getState.mockClear()
})


test('follow thunk test', async () => {
    await userApiMock.addFollow.mockResolvedValue(result)
    const thunk = setFollowTC(1)
    await thunk(dispatchMock,getState,{})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setFollow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowInProgress(false, 1))
})
test('unfollow thunk test', async () => {
    await userApiMock.delFollow.mockResolvedValue(result)
    const thunk = setUnfollowTC(2)
    await thunk(dispatchMock,getState,{})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowInProgress(true, 2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setUnfollow(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowInProgress(false, 2))
})