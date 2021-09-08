import React, { useState } from 'react'
import './tab.css';
import TabData from '../data/data.json';

const Tab = () => {

    const [description, setDescription] = useState("Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace, built in 1892 and now a memorial to Mahatma Gandhi, whose ashes are preserved in the garden. The 8th-century Pataleshwar Cave Temple is dedicated to the Hindu god Shiva.");
    const [active, setActive] = useState(1);

    return (
        <div className='container'>
            <div className="wrapper">
                {/* Tabs */}
                <ul className="tab-list">
                    {TabData.map((item) => (
                        
                            <li 
                                key={item.id}
                                onClick={() => {
                                    setDescription(item.content);
                                    setActive(item.id);
                                }}
                                className={`tab ${(item.id === active) ? "active" : ""}`}
                            >
                                {item.city}
                            </li>
                    ))}
                    
                </ul>
                <div className="content">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Tab
