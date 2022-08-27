import React, {ChangeEvent, useEffect, useState} from "react";

type Props = {
    status: string | null
    isOwner: boolean
    updateProfileStatusTC: (status: string ) => void
}



const ProfileStatus: React.FC<Props> = ({status, isOwner, updateProfileStatusTC}) => {

    let  [editMode,setEditMode] = useState(false)
    let  [statusHook,setStatus] = useState(status as string)

    useEffect(() => {
        setStatus(status as string)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateProfileStatusTC(statusHook)
    }
    const onStatusChanger = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus( e.currentTarget.value)
    }
    return (
        <div>
            <b>My Status: </b>
            {
                editMode
                    ? <><input
                    value={statusHook}
                    placeholder='Enter your status'
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChanger}
                />
                        {
                            isOwner &&
                            <b onClick={deactivateEditMode}> Click elsewhere to submit</b>
                        }
                    </>
                :<> <span onDoubleClick={() => isOwner && activateEditMode}>
                    {statusHook || 'No Status'}
                </span>
                        {
                            isOwner &&
                            <b onDoubleClick={activateEditMode}> Double click to edit</b>
                        }
                </>
            }

        </div>
    )
}

export default ProfileStatus