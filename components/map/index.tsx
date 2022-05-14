/* eslint-disable react/destructuring-assignment */
import { MapContainer, GeoJSON } from 'react-leaflet';
import { memo } from 'react';
import 'leaflet/dist/leaflet.css';

// eslint-disable-next-line no-unused-vars
import L from 'leaflet';

const Map = (countries: any) => {
  // console.log(countries.countries);

  const onEachCountry = (country: any, layer: any) => {
    const name = country.properties.ADMIN;
    layer.bindPopup(`${name}`);
  };

  return (
    <MapContainer style={{ flex: 1, height: 'calc(100% - 150px)', width: '80%' }} zoom={2} center={[20, 100]}>
      <GeoJSON data={countries.countries} onEachFeature={onEachCountry} />
    </MapContainer>
  );
};

export default memo(Map);
