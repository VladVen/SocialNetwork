import style from "./users.module.css";
import React, {useEffect, useState} from "react";


let Pages = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let n = 1; n <= pagesCount; n++) {
        pages.push(n)
    }

    const portionSize = 10

    let portionCount = Math.ceil(pagesCount / portionSize)

    const [portionNumber, setPortionNumber ] = useState(1)
    useEffect(
        () => setPortionNumber(Math.ceil(props.currentPage/portionSize)), [props.currentPage]
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
                            <a className={props.currentPage === page ? style.selectedPage : style.pages} onClick={() => props.currentPageChanger(page)}> {page} </a>
                        )
                    })
            }
            {
                portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </div>
    )
}
export default Pages


