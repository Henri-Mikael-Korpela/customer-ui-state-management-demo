import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../state_management";
import { Page } from "./Page";
import "./PastriesIndexView.css";
import { StarRating } from "./StarRating";

type PastryListCardParams = {
	id: number;
	description: string;
	name: string;
	imageUrl: string;
	/**
	 * The rating of the pastry, from 0 to 5.
	 * The value is `undefined` if the pastry has not been rated yet.
	 */
	rating: number | undefined;
};
function PastryListCard({ description, id, name, imageUrl, rating }: PastryListCardParams) {
	const imageStyle = {
		backgroundImage: `url('${imageUrl}')`,
	};
	const ratingDescription = rating === undefined
		? <>Not rated yet</>
		: <>Your rating: <StarRating rating={rating} starSize={24} /></>;

	return (
		<div className="PastryListCard">
			<div className="PastryListCard-image-container">
				<div className="PastryListCard-image" style={imageStyle}></div>
			</div>
			<div className="PastryListCard-info">
				<h2><Link to={`/pastries/${id}`}>{name}</Link></h2>
				<p>{description}</p>
				<p className="PastryListCard-rating-description">{ratingDescription}</p>
			</div>
		</div>
	);
}

function PastriesIndexView() {
	const pastries = useSelector((state: RootState) => state.pastriesIndex.pastries);
	const pastryRatings = useSelector((state: RootState) => state.pastriesIndex.pastryRatings);

	return (
		<>
			<Page>
				<h1>Recipes made with love</h1>
				<p className="description">Here are some sweet baked goods to make you happy!</p>

				{pastries.map(pastry =>
					<PastryListCard
						key={pastry.id}
						id={pastry.id}
						name={pastry.name}
						description={pastry.description}
						imageUrl={pastry.imageUrl}
						rating={pastryRatings[pastry.id]} />
				)}
			</Page>
		</>
	)
}

export default PastriesIndexView
