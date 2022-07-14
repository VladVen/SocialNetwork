import React from "react";

class profileStatusOUTDATED extends React.Component {
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
    onStatusChanger = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
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
                    :<div onDoubleClick={this.activateEditMode}>
                        {this.state.status || 'Write your status'}
                    </div>
                }
            </div>
        )
    }
}

export default profileStatusOUTDATED