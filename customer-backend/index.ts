import express from "express";

type Pastry = {
    id: number;
    name: string;
    description: string;
    imagePath: string;
};

const app = express();

app.get('/pastries', (req, res) => {
    const pastries: Pastry[] = [
        {
            id: 100,
            name: "Buttermilk cheesecake",
            description: "Fresh buttermilk cheesecake brings childhood taste memories to the tongue. The oat base, buttermilk, blueberries and cardamom are a gentle flavor combination. In addition to berries, grated white chocolate and spruce nuts are suitable for decoration.",
            imagePath: "/assets/images/40214-piimajuustokakku-800x534.jpeg"
        },
        {
            id: 101,
            name: "Blueberry cheesecake",
            description: "Blueberry cheesecake is just as much a casual summer party treat as a festive Independence Day cake. If you want, you can marbleize the filling as per the instructions with blueberry puree or mix it completely with the cream cheese filling, which will make the cake a beautiful purple.",
            imagePath: "/assets/images/41100-mustikkajuustokakku-800x534.jpeg"
        }
    ]
    res.status(200).json(pastries);
});

app.use("/assets/images", express.static('./assets'));

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});