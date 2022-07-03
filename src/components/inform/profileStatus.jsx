import React from "react";

class profileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.props.status}
                        placeholder='Enter your status'
                    />
                    :<div onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </div>
                }
            </div>
        )
    }
}

export default profileStatus