


const updateArraysObj = (item: Array<any>, propName: string, itemId: number, newObjProps: object) => {
   return  item.map(u => {
        if (u[propName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}

export default updateArraysObj