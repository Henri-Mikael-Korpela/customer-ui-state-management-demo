import { CSSProperties, useState } from "react";
import starIcon from "../assets/star.png";
import "./StarRating.css";

const STAR_INDEXES = Array.from(generateRange(0, 5));

enum StarDisplayState {
    Unselected,
    Selected
}
const STAR_STYLES_PER_DISPLAY_STATE: Record<StarDisplayState, CSSProperties> = {
    [StarDisplayState.Unselected]: {
        opacity: 0.5
    },
    [StarDisplayState.Selected]: {
        opacity: 1
    }
};

export function StarRating() {
    const [rating, setRating] = useState(0);

    const starComponents = STAR_INDEXES.map(index => {
        let style!: CSSProperties;

        if (index < rating) {
            style = STAR_STYLES_PER_DISPLAY_STATE[StarDisplayState.Selected];
        }
        else {
            style = STAR_STYLES_PER_DISPLAY_STATE[StarDisplayState.Unselected];
        }

        return <img className="StarRating-star" key={index}
            src={starIcon}
            alt="star"
            style={{ ...style, width: 40 }}
            onClick={() => setRating(index + 1)} />;
    });

    return (
        <div className="StarRating-container">
            {starComponents}
        </div>
    );
}

function* generateRange(begin: number, end: number) {
    for (let i = begin; i < end; i++) {
        yield i;
    }
}