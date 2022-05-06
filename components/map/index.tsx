import { MapContainer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

const Map = () => {


  return (
    <MapContainer style={{ height: '70vh', width: '100vw'}} zoom={2} center={[20, 100]}>

    </MapContainer>
  )
}

export default Map