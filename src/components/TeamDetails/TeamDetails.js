import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import male from '../images/male.jfif';
import female from '../images/female.jpeg';
import twitter from '../images/twitter.jfif';
import facebook from '../images/fb.png';
import instagram from '../images/instagram.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTransgender, faFlag, faFutbol } from '@fortawesome/free-solid-svg-icons';
import './TeamDetails.css';

const TeamDetails = (props) => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    const { strTeamBadge, strTeamBanner, intFormedYear, strCountry, strSport, strTeam, strGender, strTwitter, strFacebook, strInstagram, strDescriptionEN, strStadiumDescription } = team;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])

    let gender;
    if (strGender === "Male") {
        gender = <img src={male} className="w-100" alt="" />
    }
    else {
        gender = <img src={female} className="w-100" alt="" />
    }
    return (
        <div>
            <div>
                <img className="w-100 banner" src={strTeamBanner} alt="" />
                <div className="team_logo text-center">
                    <img src={strTeamBadge} alt="" />
                    <h4 className="t-color">{strTeam}</h4>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="team_data">

                            <div className="team_detail">

                                {gender}

                            </div>

                            <div className="team_info">
                                <h3><span className="all_icon">{strTeam}</span></h3>
                                <div className="detail_icon">
                                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="all_icon"> Founded:{intFormedYear}</span></p>
                                    <p><FontAwesomeIcon icon={faFlag} /> <span className="all_icon">Country:{strCountry}</span> </p>
                                    <p><FontAwesomeIcon icon={faFutbol} /> <span className="all_icon">Sport Type:{strSport}</span></p>
                                    <p><FontAwesomeIcon icon={faTransgender} /> <span className="all_icon">Gender:{strGender}</span></p>
                                </div>
                            </div>
                            <div className="social_icons d-flex justify-content-center align-items-center">
                                <a href={`https://${strTwitter}`} target="blank"> <img src={twitter} alt="" /> </a>
                                <a href={`https://${strFacebook}`} target="blank"> <img src={facebook} alt="" /> </a>
                                <a href={`https://${strInstagram}`} target="blank"> <img src={instagram} alt="" /> </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="team_description">
                            <h4><u>Description:</u></h4>
                            <p>{strDescriptionEN}</p>
                            <hr />
                            <p>{strStadiumDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;