import React from 'react';
import style from './UsersItem.module.css';

const UsersItem = () => {
    return (
        <div className={style.item}>
            <div>
                <img
                    src="https://meragor.com/files/styles//ava_800_800_wm/standoff_3.png"
                    alt="avatar"
                    className={style.item__avatar}
                />
            </div>
            <div>
                <div className={style.item__name}>Name Surname</div>
                <div className={style.item__status}>Ya mamkin terrorist</div>
                <div className={style.item__location}>Country, City</div>
            </div>
            <div className={style.wrapBtn}>
                <button className={style.btn}>+ Add Friend</button>
            </div>
        </div>
    );
};

export default UsersItem;