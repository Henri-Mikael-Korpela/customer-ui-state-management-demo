import { CSSProperties } from "react";
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

type StarRatingParams = {
    /**
     * The callback to be called when the user clicks on one of the stars.
     * 
     * If the value is `undefined`, the stars selection is disabled.
     */
    onChange?: (rating: number) => void;
    /**
     * The rating of the pastry, from 0 to 5.
     */
    rating: number;
    /**
     * The size of the stars, in pixels.
     */
    starSize: number;
}

/**
 * A component that displays a rating as a row of stars.
 */
export function StarRating({ onChange, rating, starSize }: StarRatingParams) {
    const starSizeStyle = {
        width: starSize
    };
    const starComponents = STAR_INDEXES.map(index => {
        let displayStyle!: CSSProperties;

        if (index < rating) {
            displayStyle = STAR_STYLES_PER_DISPLAY_STATE[StarDisplayState.Selected];
        }
        else {
            displayStyle = STAR_STYLES_PER_DISPLAY_STATE[StarDisplayState.Unselected];
        }

        if (onChange !== undefined) {
            return <img className="StarRating-star" key={index}
                src={starIcon}
                alt="star"
                style={{ ...displayStyle, ...starSizeStyle }}
                onClick={() => {
                    onChange(index + 1);
                }} />;
        }
        else {
            return <img className="StarRating-star" key={index}
                src={starIcon}
                alt="star"
                style={{ ...displayStyle, ...starSizeStyle }} />;
        }
    });

    return (
        <div className="StarRating-container">
            {starComponents}
        </div>
    );
}

/**
 * Generates a range of numbers from `begin` (inclusive) to `end` (exclusive).
 * The step is always +1.
 * 
 * @note There is no check to ensure that `begin` < `end`.
 */
function* generateRange(begin: number, end: number) {
    for (let i = begin; i < end; i++) {
        yield i;
    }
}