import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';
import "./League.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight }from '@fortawesome/free-solid-svg-icons';


const League = (props) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = props.league;
    return (
            <Col md="4">
                <div className="team_child">
                    
                    <div className="text-center">
                    <img className="logo" src={strTeamBadge} alt=""/>
                        <h1>{strTeam}</h1>
                        <h3>{strSport}</h3>
                        <Link to={`/team/${idTeam}`}> 
                            <Button variant="outline-danger">Preview <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
                        </Link>
                    </div>
                </div>
            </Col>
    );
};

export default League;