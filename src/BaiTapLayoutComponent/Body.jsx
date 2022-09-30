import React from 'react'
import Banner from './Banner'
import Item from './Item'
const Body = () => {
    return (
        <div>
            <Banner />
            <div className='d-flex container justify-content-between' style={{ padding: "0 150px" }}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default Body