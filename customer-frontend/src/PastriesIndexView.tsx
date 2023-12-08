import { Link } from "react-router-dom";
import { Page } from "./Page";
import "./PastriesIndexView.css";
import buttermilkCheeseCakeImage from './assets/40214-piimajuustokakku-800x534.jpeg';
import blueberryCheeseCakeImage from './assets/41100-mustikkajuustokakku-800x534.jpeg';

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
  return (
    <>
      <Page>
        <h1>Recipes made with love</h1>
        <p className="description" >Here are some sweet baked goods to make you happy!</p>

        <PastryListCard id={100} name="Buttermilk cheesecake" description="Fresh buttermilk cheesecake brings childhood taste memories to the tongue. The oat base, buttermilk, blueberries and cardamom are a gentle flavor combination. In addition to berries, grated white chocolate and spruce nuts are suitable for decoration." imageUrl={buttermilkCheeseCakeImage} />
        <PastryListCard id={101} name="Blueberry cheesecake" description="Blueberry cheesecake is just as much a casual summer party treat as a festive Independence Day cake. If you want, you can marbleize the filling as per the instructions with blueberry puree or mix it completely with the cream cheese filling, which will make the cake a beautiful purple." imageUrl={blueberryCheeseCakeImage} />
      </Page>
    </>
  )
}

export default PastriesIndexView
