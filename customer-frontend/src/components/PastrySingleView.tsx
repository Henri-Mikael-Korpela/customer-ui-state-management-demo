import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../state_management";
import { Page } from "./Page";

export function PastrySingleView() {
    const { pastryId } = useParams<{ pastryId: string }>();

    const pastry = useSelector((state: RootState) => {
        const pastries = state.pastriesIndex.pastries;

        if (pastryId) {
            const pastryIdNum = parseInt(pastryId);
            return pastries.find(pastry => pastry.id === pastryIdNum)
        }
        else {
            return undefined;
        }
    });

    return (
        <Page>
            {pastry &&
                <p><strong>{pastry.name}</strong> {pastry.description}</p>
            }
        </Page>
    );
}