import React, {useEffect, useState} from "react";
import style from './users.module.css'


type propsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    currentPageChanger: (page: number) => void
    portionSize?: number
}

 const Pages: React.FC<propsType> = React.memo(({totalCount, pageSize,currentPage,currentPageChanger,portionSize = 10,}) => {
    const pagesCount = Math.ceil(totalCount / pageSize)

    const pages = []

    for (let n = 1; n <= pagesCount; n++) {
        pages.push(n)
    }


    const portionCount = Math.ceil(pagesCount / portionSize)

    const [portionNumber, setPortionNumber ] = useState(1)
    useEffect(
        () => setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]
    );

    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div>
            {
                portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {
                pages
                    .filter(page => page >= leftPortionNumber && page <= rightPortionNumber )
                    .map(page => {
                        return (
                            <a className={currentPage === page ? style.selectedPage : style.pages} onClick={() => currentPageChanger(page)}> {page} </a>
                        )
                    })
            }
            {
                portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </div>
    )
})
export default Pages


