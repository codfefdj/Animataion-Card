import React from 'react'
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

function Card() {
    return (
        <>
            <h1 className='mt-2 mb-3'>Our Team</h1>
            {/* <div className="container">
                <h1 className='mt-2 mb-3'>Our Team</h1>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-xs-12">
                        <div className="card">
                            <span className="overly">
                                <div className="hover-overly"></div></span>
                            <div className="card-body mt-2">
                                <div className="profile">
                                    <img src="image/profile.jpg" alt="Profile" className='profile-img' />
                                </div>
                                <h5>Faizan Ansari</h5>
                                <p>Software Developer</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita, illum voluptas fugit reprehenderit, minus deserunt ducimus quis quas perspiciatis voluptate eveniet. Dolore inventore animi iste praesentium explicabo vitae omnis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xs-12">
                        <div className="card">
                            <span className="overly">
                                <div className="hover-overly"></div></span>
                            <div className="card-body mt-2">
                                <div className="profile">
                                    <img src="image/profile.jpg" alt="Profile" className='profile-img' />
                                </div>
                                <h5>Faizan Ansari</h5>
                                <p>Software Developer</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita, illum voluptas fugit reprehenderit, minus deserunt ducimus quis quas perspiciatis voluptate eveniet. Dolore inventore animi iste praesentium explicabo vitae omnis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xs-12">
                        <div className="card">
                            <span className="overly">
                                <div className="hover-overly"></div></span>
                            <div className="card-body mt-2">
                                <div className="profile">
                                    <img src="image/profile.jpg" alt="Profile" className='profile-img' />
                                </div>
                                <h5>Faizan Ansari</h5>
                                <p>Software Developer</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita, illum voluptas fugit reprehenderit, minus deserunt ducimus quis quas perspiciatis voluptate eveniet. Dolore inventore animi iste praesentium explicabo vitae omnis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="content">
                <div class="card">
                    <div className="overly"></div>
                    <div class="img mt-5">
                       {/* <span className='overly-hover'></span> */}
                    </div>
                    <div className="footer">
                        <h5 class="title">Faizan Ansari</h5>
                        <p className='text-light'>Software Developer</p>
                        <p class="text">Click to see or edit your profile page.</p>
                        {/* <button className='btn btn-praimery'>Click</button> */}
                        <div className="icons">
                            <i className='icon text-light'><CiFacebook /></i>
                            <i className='icon text-light'><CiLinkedin /></i>
                            <i className='icon text-light'><CiInstagram /></i>
                            <i className='icon text-light'><CiYoutube  /></i>
                        </div>
                        <div className="overly-hover"></div>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Card