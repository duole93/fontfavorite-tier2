import React, { useEffect, useState } from 'react';
import FontCard from './FontCard'


function FontContainer(props) {

    //State for API call
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    //calling an API using useEffect
    useEffect(() => {
        fetch("https://webfonts.googleapis.com/v1/webfonts?sort=POPULARITY&key=" + process.env.REACT_APP_API_KEY)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.items.slice(0,10));
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        return (
            <div className="container-grid">
                {items.map((item, index) => (
                    <FontCard
                        key={index}
                        fontSize={props.fontSize}
                        fontFamily={item.files.regular}
                        customText={props.customText}
                        fontTitle={item.family}
                    />
                ))}
                
            </div>
        );
    }
}
export default FontContainer;