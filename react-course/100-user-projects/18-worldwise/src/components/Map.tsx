import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  function handlePosition() {
    setSearchParams({ lat: String(23), lng: String(50) });
  }

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={handlePosition}>Change Position</button>
    </div>
  );
}

export default Map;
