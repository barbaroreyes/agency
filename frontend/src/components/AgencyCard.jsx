import React from "react";
import { Link } from "react-router-dom";

const UserTripCard = (props) => {
	const altImg = "https://source.unsplash.com/QVElk1sgzY4/640x426";
	return (
		<div className="agency-card">
			<section>
				<div>
					<Link to={`/agency/${props._id}`}>
						<img alt={props.name} src={props.logo ? props.logo : altImg} />
					</Link>
				</div>

				<div>
					<h2>{props.name}</h2>
					<div className="star-rating">
						<div>{"\u2605"}</div>
						<span>4.9</span>
					</div>
				</div>
			</section>
			<section>
				<div className="avi-small-container" >
					<div className="user-avi-small">1</div>
					<div className="user-avi-small">2</div>
				</div>
				<div className="like-count">+349</div>
				<div className="like-count-label">Liked This</div>
			</section>
		</div>
	);
};
export default UserTripCard;
