import './ShotgunList.css';
import { useEffect, useState } from "react";
import { getFetch } from "../../configs/Fetch";
import { MagnifyingGlass } from "react-loader-spinner";

const ShotgunList = () => {

  const [data, setData] = useState({});

  const [isLoading, setIsloading] = useState(true);

  const refreshData = () => {
    getFetch("shotgun/list", setData, setIsloading, { debug: true });
  }

  useEffect(() => {
    window.addEventListener("refreshData", refreshData);
    refreshData();
    // setTimeout(() => refreshData(), 1000);
    return () => window.removeEventListener("refreshData", refreshData);
  }, []);

  return isLoading ?
    <div className="box-center">
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor='#c0efff'
        color='#e15b64'
      />
    </div>
    :
    <div className='shotgun-list scroller'>
      <h2>Shotgun en cours</h2>
      <div className='shotgun-grid'>
        {data && data.data?.running?.map((o, _) =>
          <div className="shotgun-card" key={o.id}>
            <img className="shotgun-img" src={`data:image/jpeg;base64,${o.image_bytes}`} alt="Shotgun Logo" />
            <div className="shotgun-content">
              <h3>
                {o.name}
              </h3>
              <h5>
                {o.description}
              </h5>
            </div>
          </div>
        )}
      </div>
      <h2>Shotgun terminés</h2>
      <div>

      </div>
    </div >
};

export default ShotgunList;