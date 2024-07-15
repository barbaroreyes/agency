const dummyDataTrips = [
	{
		_id: 2001,
		name: "Cairns Scuba Trip",
		photo: "https://prodivecairns.com/images/drone/prodive-drone-nov-2017-003-fullres.43.g.jpg",
		description: "Go scuba diving on a boat and see some fishes",
		activities: ["scuba diving", "boating"],
		location: {
			name: "Cairns QLD, Australia",
			type: "Point",
		},
		coordinates: [-16.8509347202358, 145.702737607069],
		agency: {
			ref: "Agency",
			type: "1000",
		},
		reviews: [
			{
				ref: "Review",
				type: "2000",
			},
			{
				ref: "Review",
				type: "2001",
			},
			{
				ref: "Review",
				type: "2002",
			},
		],
	},
	{
		id: 2002,
		name: "Perth Hikes",
		photo: "https://prodivecairns.com/images/drone/prodive-drone-nov-2017-003-fullres.43.g.jpg",
		description: "Go hiking in Perth",
		activities: ["hiking", "sites"],
		location: {
			name: "Perth, NSW, Australia",
			type: "Point",
		},
		coordinates: [-16.8509347202358, 145.702737607069],
		agency: {
			ref: "Agency",
			type: "1001",
		},
		reviews: [
			{
				ref: "Review",
				type: "2003",
			},
			{
				ref: "Review",
				type: "2004",
			},
			{
				ref: "Review",
				type: "2005",
			},
		],
	},
];
export default dummyDataTrips;
