import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        getAllStarships().then(data => {
            setStarships(data.results);
        });
    }, []);

    return (
        <div className="App">
            <h1>Star Wars Starships</h1>
            <div className="starship-container">
                {starships.map(starship => (
                    <StarshipCard key={starship.name} starship={starship} />
                ))}
            </div>
        </div>
    );
}

export default App;
