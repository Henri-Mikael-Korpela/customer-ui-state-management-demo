export type PastryFromApi = {
    id: number;
    name: string;
    description: string;
    imagePath: string;
};
export type PastryToFrontend = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
};