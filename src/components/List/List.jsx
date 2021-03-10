import React from 'react'
import './List.scss'

function List(props) {
    let {items, isRemovable} = props;
    let menuItems = items.map((el, index) =>
        <li key={index} className={el.active ? 'active' : ''}>
            <i>
                {el.icon ? el.icon : <i className={`badge badge__${el.color}`}></i>}
            </i>
            <span>{el.name}</span>
        </li>
    )

    return (
        <div className="list">
            {menuItems}
        </div>
    )
}

export default List