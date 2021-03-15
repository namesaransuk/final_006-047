import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
import './profile.css'

const Profile = (props) => {

    const [image, setImage] = useState([]);
    const [users, setUsers] = useState([]);
    const clientId = "UGy-hVvjA5kcOk33H5rPJkt8ZirZUpVu4efGbkBnvCk";

    useEffect(() => {
        axios.get("https://api.unsplash.com/search/users?&query=" + props.match.params.id + "&client_id=" + clientId)
            .then((res) => {
                setUsers(res.data.results);
            })

        axios.get("https://api.unsplash.com/users/" + props.match.params.id + "/photos?&page=1&per_page=20&client_id=" + clientId)
            .then((res) => {
                setImage(res.data);
            })
    }, [])

    return (

        <div class="card mt-3">
            {users.map((userinfo) => ( //ทำการวนลูปในusersเปลี่ยนชื่อเป็นuserinfo
                <>
                    <div class="card-content">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                            <img src={userinfo.profile_image.large} style={{ borderRadius: "50%" }} />
                        </div>
                        <center>
                            <p class="title is-4 mt-4">{userinfo.name}</p>
                        </center>
                        <center>
                            <hr width="50%" />
                            {/* <p >{userinfo.bio}</p> */}
                            <span class="icon is-small"><i class="fab fa-instagram"></i></span>
                            <span> instagram: {userinfo.instagram_username}</span>
                            <br></br>
                            <span class="icon is-small"><i class="fab fa-twitter"></i></span>
                            <span> instagram: {userinfo.twitter_username}</span>
                            <br></br>
                            <span class="icon is-small"><i class="fas fa-location-arrow"></i></span>
                            <span> location: {userinfo.location}</span>
                        </center>
                        <br></br>
                        <div class="tabs is-centered is-boxed" id="tabs">
                            <ul>
                                <li class="is-active" data-tab="1">
                                    <a>
                                        <span class="icon is-small"><i class="fa fa-image"></i></span>
                                        <span>Pictures {userinfo.total_photos}</span>
                                    </a>
                                </li>
                                <li data-tab="2">
                                    <a>
                                        <span class="icon is-small"><i class="far fa-heart"></i></span>
                                        <span>Like {userinfo.total_likes}</span>
                                    </a>
                                </li>
                                <li data-tab="3">
                                    <a>
                                        <span class="icon is-small"><i class="fas fa-archive"></i></span>
                                        <span>collection {userinfo.total_collections}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-list">
                            {image.map((photo) => ( //วนลูปรูปจากimageแล้วเปลี่ยนชื่อphoto
                                <img src={photo.urls.regular} className="card--image" style={{ borderRadius: 10 }} />
                            ))}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Profile
