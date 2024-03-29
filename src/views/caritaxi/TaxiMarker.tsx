import "./TaxiMarker.css";
import taxiIcon from "../../assets/images/taxi.png";
import { useCycle } from "framer-motion";
import { useEffect } from "react";

interface TaxiMarkerProps {
  lat: number,
  lng: number,
  name: string,
  focused: boolean
}
export default function TaxiMarker({ name, focused }: TaxiMarkerProps) {

  const [clicked, toggleClicked] = useCycle(false, true);

  useEffect(() => {
    toggleClicked(focused ? 1 : 0)
  }, [focused])

  return <div className={"marker"} onClick={() => toggleClicked()}>
    <img className="marker-icon" src={taxiIcon} />
    {(focused || clicked) && <div className="marker-popup">
      <h1>{name}</h1>
      <h2>Theme : TEST</h2>
    </div>}
  </div>
}