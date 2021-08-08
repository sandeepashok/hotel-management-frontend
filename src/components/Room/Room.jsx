import React from 'react'
import './Room.css'


function Room({data}) {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)

    return (
        <div className="room">
            <div className="room__main">
                <div className="room__image">
                    <img src={data.image} width="250px" alt="image" srcset="" />
                </div>
                <div className="room__data">
                    <div className="room__name">
                        {data.name}
                    </div>
                    <div className="room__people">
                        People: {data.people}
                    </div>
                </div>
                <input type="button" id="room__featureButton" value="Show Features" onClick={onClick} />
                { showResults ? 
                    (<div className="room__features">
                        {data.features.pets===true ? <span>Pets Allowed</span> : <span>Pets Not Allowed</span>}
                        {data.features.phone===true ? <span>Phones Allowed</span> : <span>Phones Not Allowed</span>}
                        {data.features.pets===true ? <span>Smoking Allowed</span> : <span>Smoking Prohibited</span>}
                    </div>)
                : null }
               
                <div className="room__availability">
                    {data.availability===true ? <span> Room Available</span> : <span>Room Not Available</span>}
                </div>
                <div className="room__price">
                    ₹{data.price}
                </div>
            </div>
        </div>
    )
}

export default Room
