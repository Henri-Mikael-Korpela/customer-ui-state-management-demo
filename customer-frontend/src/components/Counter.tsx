import { useDispatch, useSelector } from "react-redux";
import { RootState, increment } from "../state_management";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 onClick={() => dispatch(increment())}>Counter: {count}</h1>
        </div>
    )
}