import React from 'react';
import style from './Paginator.module.css';

const Paginator = ({totalCount, pageSize, onPageChanged, currentPage, ...props}) => {
    let pageCount = Math.ceil(totalCount / pageSize),
        pages = [];
    
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.pagination}>
            {
                pages.map(p => {
                    return (
                        <span
                            key={p}
                            onClick={() => {onPageChanged(p)}}
                            className={currentPage === p ? `${style.paginationItem} ${style.selected}` : style.paginationItem}
                        >
                                {p}
                            </span>
                    )
                })
            }
        </div>
    )
}

export default Paginator;