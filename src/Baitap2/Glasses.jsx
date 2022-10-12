import React from 'react'

const Glasses = ({ glasses, onSelect }) => {
    const handleSelect = (glassesId) => {
        onSelect(glassesId);
    }
    return (
        <div>
            <div className='container bg-white px-5 mt-5'>
                <div className="row py-5" style={{ paddingLeft: "62px" }}>
                    {glasses.map((item) => (
                        <button key={item.id} onClick={() => handleSelect(item.id)} className='mt-2 mx-1' style={{ width: "208px" }}>
                            <img src={item.url} alt="image" width={180} height={80} />
                        </button>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Glasses