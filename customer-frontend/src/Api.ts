import { PastryFromApi } from "./entities/Pastry";

export module Api {
    const BACKEND_SERVER_URL = "http://localhost:8081";

    /**
     * Returns a list of pastries from the backend server.
     * @todo Add error handling.
     */
    export function getPastries(): Promise<PastryFromApi[]> {
        return fetch(urlFromPath("/pastries"))
            .then(async response => await response.json())
    }

    /**
     * Returns an URL to the backend server with the given relative path.
     */
    export function urlFromPath(relativePath: string) {
        return BACKEND_SERVER_URL + relativePath;
    }
}