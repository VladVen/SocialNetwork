import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    let  [editMode,setEditMode] = useState(false)
    let  [status,setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatusTC(status)
    }
    const onStatusChanger = (e) => {
        setStatus( e.currentTarget.value)
    }
    return (
        <div>
            {editMode
                ?
                <input
                    value={status}
                    placeholder='Enter your status'
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChanger}
                />
                : <div onDoubleClick={activateEditMode}>
                    {status || 'Write your status'}
                </div>
            }
        </div>
    )
}

export default ProfileStatus