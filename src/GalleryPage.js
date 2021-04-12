import React, { useState } from "react";
import Dog from './Dog.js'

export default function GalleryPage(props) {

    const [data, setData] = useState([]);

    const search = (e) => {
        fetch("https://random.dog/doggos")
            .then((response) => response.json())
            .then((data) => setData(data))
    };

    const size = 8
    const eightDogs = data.slice(0, size)

    return (
        <div className="dogWrapper">
            <div className="dogButton" >
                <button className="dogButton" onClick={search}>
                    GET ME DOGGOS
                </button>
            </div>
            <div className="dogsRow">
                {eightDogs ? eightDogs.map((dog) => (
                    <Dog
                        key={Math.random()}
                        url={`https://random.dog/${dog}`}>
                    </Dog>
                )) : <div></div>}
            </div>
        </div>

    )

}