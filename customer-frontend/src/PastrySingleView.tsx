import { useParams } from "react-router-dom";
import { Page } from "./Page";

export function PastrySingleView() {
    const { pastryId } = useParams<{ pastryId: string }>();

    return (
        <Page>
            <div>{pastryId}</div>
        </Page>
    );
}