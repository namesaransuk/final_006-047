import React from 'react'
import './posts.css'

const PostsComponent = ({ image }) => {


    return (
        <>
            <div className="card-select-1" key={image.id}>

                <div className="card-img-1">
                    <div className="card-head-1">
                        <img src={image.user.profile_image.small} className="image logo is-32x32 mr-2" />
                        <a href={"/profile/" + image.user.username} type="submit" style={{ justifyContent: "center" }}> {image.user.username}</a>
                    </div>
                    <img src={image.urls.regular} alt={image.alt_description} className="card--image-1" />
                    <div className="card-caption-1">
                        <p className="like"><i class="fas fa-heart" style={{ color: "red" }}></i> {image.likes}</p>
                        <p className="description">- {image.description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PostsComponent
