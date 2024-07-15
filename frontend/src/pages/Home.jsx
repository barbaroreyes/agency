import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TripCard from "../components/TripCard";
import AgencyCard from "../components/AgencyCard";
import Carousel from "../components/Carousel";

const Home = (
	{ handleSelectCustomer, activeCustomerId, drawerClickHandler },
	props
) => {
	const [trips, setTrips] = useState([]);
	const [agency, setAgency] = useState([]);
	const url = "http://localhost:4500";

	const getTrips = () => {
		fetch(url + "/trip")
			.then((res) => res.json())
			.then((data) => {
				setTrips(
					data.data.map((item, index) => {
						// console.log(item.photos[0])
						return (
							<TripCard
								key={index}
								name={item.location.name}
								_id={item._id}
								desc={item.description}
								photo={item.photos[0]}
							/>
						);
					})
				);
			});
	};

	const getAgency = () => {
		fetch(url + "/agency")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data);
				setAgency(
					data.data.map((item, index) => {
						console.log(item.logo);
						return (
							<AgencyCard
								key={index}
								name={item.name}
								_id={item._id}
								logo={item.logo}
							/>
						);
					})
				);
			});
	};
	useEffect(() => {
		getAgency();
		getTrips();
	}, []);

	const loaded = () => {
		return (
			<main>
				<Header
					drawerClickHandler={drawerClickHandler}
					activeCustomerId={activeCustomerId}
				/>
				<section className="home-content">
					<div className="heading">
						<h2>Popular Trips</h2>
						<span className="light-link">
							<Link to="/trips">See all</Link>
						</span>
					</div>
					<Carousel id="trip-carousel">{trips}</Carousel>
					<h2>Travel Agencies</h2>
					<Carousel id="agency-carousel">{agency}</Carousel>
				</section>
			</main>
		);
	};

	const loading = () => {
		return <div>Loading</div>;
	};

	if (trips.length > 0 && agency.length > 0) {
		return loaded();
	} else {
		return loading();
	}
};
export default Home;
