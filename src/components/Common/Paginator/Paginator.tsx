import React, {useState} from 'react';
import style from './Paginator.module.css';

type propsType = {
    totalCount:number
    pageSize:number
    currentPage:number
    portionSize?:number
    onPageChanged: (currentPage: number) => void
}

const Paginator: React.FC<propsType> = ({totalCount, pageSize, onPageChanged, currentPage, portionSize = 5, ...props}) => {
    let pageCount = Math.ceil(totalCount / pageSize),
        pages: Array<number> = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize),
        [portionNumber, setPortionNumber] = useState(Math.floor(currentPage/10) + 1),
        leftPortionPageNumber = (portionNumber - 1) * pageSize + 1,
        rightPortionPageNumber = portionNumber * pageSize;

    return (
        <div className={style.pagination}>
            {
                portionNumber > 1
                && <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (
                            <span
                                key={p}
                                onClick={() => {onPageChanged(p)}}
                                className={currentPage === p ? `${style.paginationItem} ${style.selected}` : style.paginationItem}
                            >{p}</span>
                        )
                    })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>
            }
        </div>
    )
}

export default Paginator;
