import React from 'react'

const Model = ({ glasses }) => {
    return (
        <div className='d-flex container justify-content-around mt-5'>
            <div >
                <div className="card img-fluid" style={{ width: 330 }}>
                    <img className="card-img-top" src={require("../glassesImage/model.jpg")} alt="Card image" style={{ width: '100%' }} />
                    <div className="card-img-overlay ">
                        {
                            glasses.map((item) => (
                                <div className='model' key={item.id}>
                                    <div className='img'>
                                        <img src={item.url} alt="" width={170} />
                                    </div>
                                    <div className='title'>
                                        <h3 className='name'>{item.name}</h3>
                                        <p className='desc'>{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className="card img-fluid" style={{ width: 330 }}>
                    <img className="card-img-top" src={require("../glassesImage/model.jpg")} alt="Card image" style={{ width: '100%' }} />
                </div>
            </div>

            {/* <img src={require("./glassesImage/model.jpg")} alt="model" style={{ width: "300px", height: "300px", margin: "0 20px" }} />
                <img src={require("./glassesImage/model.jpg")} alt="model" style={{ width: "300px", height: "300px", margin: "0 20px" }} /> */}

        </div>
    )
}

export default Model