import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, setRatingForPastry } from "../state_management";
import { Page } from "./Page";
import "./PastrySingleView.css";
import { StarRating } from "./StarRating";

export function PastrySingleView() {
    const { pastryId } = useParams<{ pastryId: string }>();

    const pastry = useSelector((state: RootState) => {
        const pastries = state.pastriesIndex.pastries;

        if (typeof pastryId !== "string") {
            return undefined;
        }

        const pastryIdNum = parseInt(pastryId);

        if (isNaN(pastryIdNum)) {
            return undefined;
        }

        return pastries.find(pastry => pastry.id === pastryIdNum);
    });
    const pastryRatings = useSelector((state: RootState) => state.pastriesIndex.pastryRatings);

    const dispatch = useDispatch();

    return (
        <Page>
            {pastry &&
                <>
                    <h1>{pastry.name}</h1>
                    <img className="PastrySingleView-image" src={pastry.imageUrl} alt={pastry.name} />
                    <p className="PastrySingleView-description">{pastry.description}</p>

                    <div className="PastrySingleView-rating">
                        <p className="PastrySingleView-description">Rate this recipe:</p>
                        <StarRating
                            onChange={rating => dispatch(setRatingForPastry({
                                pastryId: pastry.id,
                                rating
                            }))}
                            rating={pastryRatings[pastry.id] ?? 0}
                            starSize={40} />
                    </div>
                </>
            }
        </Page>
    );
}