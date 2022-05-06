import { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { Container } from './home.styles';

import { loadCountries } from '../../utils/load-countries';

const Map = dynamic(() => import('../../components/map'), { ssr: false });

const Home: FC = () => {
  const [countries, setCountries] = useState([]);

  const getCroutries = () => {
    loadCountries(setCountries);
  };

  useEffect(() => {
    getCroutries();
  }, []);

  return (
    <Container>
      <h1>Header</h1>
      <Map countries={countries} />
    </Container>
  );
};

export default Home;
