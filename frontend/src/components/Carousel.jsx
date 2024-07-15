import React from 'react'

const Carousel = (props) => {

	return (
		<section className="carousel-container">
			<div className="carousel">{props.children}</div>
		</section>
	)
}
export default Carousel