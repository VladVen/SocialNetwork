import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateProfileStatusTC: (status: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}

class profileStatusOUTDATED extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateProfileStatusTC(this.state.status)
    }
    onStatusChanger = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                    <input
                        onChange={this.onStatusChanger}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        placeholder='Enter your status'
                    />
                    :<span onDoubleClick={this.activateEditMode}>
                        {this.state.status || 'Write your status'}
                    </span>
                }
            </div>
        )
    }
}

export default profileStatusOUTDATED