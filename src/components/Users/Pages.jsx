import style from "./users.module.css";
import React from "react";


let Pages = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let n = 1; n <= pagesCount; n++) {
        pages.push(n)
    }

    let curPage = props.currentPage;
    let arrayMin = ((curPage - 5) < 0) ? 0 : curPage - 5;
    let arrayMax = curPage + 5;
    let slicedPages = pages.slice(arrayMin, arrayMax);


    return (
        slicedPages.map(p => {
            return (
                <a className={curPage === p ? style.selectedPage : style.pages} onClick={() => props.currentPageChanger(p)}> {p} </a>
            )
        })
    )
}
export default Pages