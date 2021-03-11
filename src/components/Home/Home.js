import React, { useEffect, useState } from 'react';
import League from '../League/League';
import banner from '../images/banner.jpeg';
import './Home.css';


const Home = () => {
    const [league, setLeague] = useState([]);
    console.log(league)
    

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setLeague(data.teams))
        
    },[])
    return (
        <div>
            <div className="header">
                <img className="w-100" src={banner} alt=""/>
                <h1>EUROPEAN PREMIER LEAGUE</h1>
            </div>
            <div className="container">
                <div className="row">
                {
                    league.map(league => <League league={league}></League>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;