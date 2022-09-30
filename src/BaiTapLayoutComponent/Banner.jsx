import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className='container' style={{ padding: "0 150px" }}>
                <div className='mt-3 py-5 ps-4' style={{ border: "5px solid blue", background: "#E8ECEF" }}>
                    <h1>A Warm Welcome!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium expedita temporibus assumenda repellat soluta accusantium iure! Id error deserunt consectetur voluptatem nobis consequatur neque non, quod pariatur repellat cupiditate.</p>
                    <button className='btn btn-primary'>Call to action!</button>
                </div>
            </div>
        </div>
    )
}

export default Banner