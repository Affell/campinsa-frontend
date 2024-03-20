import "./TaxiMarker.css";
import taxiIcon from "../../assets/images/taxi.png";
import { useCycle } from "framer-motion";

interface TaxiMarkerProps {
  lat: number,
  lng: number,
  name: string
}
export default function TaxiMarker({ name }: TaxiMarkerProps) {

  const [clicked, toggleClicked] = useCycle(false, true);

  return <div className={"marker"} onClick={() => toggleClicked()}>
    <img className="marker-icon" src={taxiIcon} />
    {clicked && <div className="marker-popup">
      <h1>{name}</h1>
      <h2>Theme : TEST</h2>
    </div>}
  </div>
}