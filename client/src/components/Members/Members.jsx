import React from 'react'
import './Members.css';
import { member } from '../../data/members.js'
import {FaFacebook , FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa'

function Members() {
    return (
        <div className="member">
            <div className="row mx-auto member-contain">
                {member.map(e =>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src={e.image} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">{e.name}</h3>
                                <h4 className="title">{e.title}</h4>
                            </div>
                            <ul className="social">
                                <li><a href={e.facebook} className="fa fa-facebook"><FaFacebook /></a></li>
                                <li><a href={e.twitter} className="fa fa-twitter"><FaTwitter /></a></li>
                                <li><a href={e.github} className="fa fa-google-plus"><FaGithub /></a></li>
                                <li><a href={e.linkedin} className="fa fa-linkedin"><FaLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Members