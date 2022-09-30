import React from 'react'

const Item = () => {
    return (
        <div className='mt-3'>
            <div className='card text-center' style={{ border: "5px solid #9D4B9E", height: "400px", width: "230px", borderRadius: "0" }}>
                <div className="card-header" style={{ paddingTop: "35px", backgroundColor: "#CCCCCC", textAlign: "center", height: "200px", borderRadius: "0" }}>500 X 325</div>
                <div className="card-body">
                    <h2>Card title</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit corporis unde, porro nesciunt quaerat.</p>
                </div>
                <div className="card-footer">
                    <button className='btn btn-primary'>Find Out More!</button>
                </div>
            </div>

        </div>
    )
}

export default Item