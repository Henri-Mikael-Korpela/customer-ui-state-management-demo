import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../state_management";
import { Page } from "./Page";
import "./PastriesIndexView.css";

type PastryListCardParams = {
	id: number;
	description: string;
	imageUrl: string;
	name: string;
};
function PastryListCard({ description, id, imageUrl, name }: PastryListCardParams) {
	const imageStyle = {
		backgroundImage: `url('${imageUrl}')`,
	};

	return (
		<div className="PastryListCard">
			<div className="PastryListCard-image-container">
				<div className="PastryListCard-image" style={imageStyle}></div>
			</div>
			<div className="PastryListCard-info">
				<h2><Link to={`/pastries/${id}`}>{name}</Link></h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

function PastriesIndexView() {
	const pastries = useSelector((state: RootState) => state.pastriesIndex.pastries);

	return (
		<>
			<Page>
				<h1>Recipes made with love</h1>
				<p className="description" >Here are some sweet baked goods to make you happy!</p>

				{pastries.map(pastry =>
					<PastryListCard key={pastry.id} id={pastry.id} name={pastry.name} description={pastry.description} imageUrl={pastry.imageUrl} />
				)}
			</Page>
		</>
	)
}

export default PastriesIndexView
