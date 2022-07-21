const {create} = require("react-test-renderer");
import ProfileStatusOUTDATED from "../../components/profile/profileStatusOUTDATED";

describe('Status test', () => {
    test('status should be pushed to state', () => {
        const component = create(<ProfileStatusOUTDATED status={'some text'}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('some text')
    })
    test('check span in jsx', () => {
        const component = create(<ProfileStatusOUTDATED status={'some text'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('check no input in jsx', () => {
        const component = create(<ProfileStatusOUTDATED status={'some text'}/>)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('span = status', () => {
        const component = create(<ProfileStatusOUTDATED status={'some text'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('some text')
    })
    test('turn on input', () => {
        const component = create(<ProfileStatusOUTDATED status={'some text'}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('some text')
    })
    test('Callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatusOUTDATED status={'some text'} updateProfileStatusTC={mockCallback} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})