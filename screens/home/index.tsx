import { FC } from 'react';
import dynamic from 'next/dynamic'

import { Container } from './home.styles';

const Map = dynamic(() => import('../../components/map'), { ssr: false })

const Home: FC = () => {

  return (
    <Container>
      <h1>Header</h1>
      <Map/>
    </Container>
  )
}

export default Home
