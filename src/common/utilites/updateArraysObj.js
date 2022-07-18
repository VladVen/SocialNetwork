

const updateArraysObj = (item, propName, itemId, newObjProps) => {
   return  item.map(u => {
        if (u[propName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}

export default updateArraysObj