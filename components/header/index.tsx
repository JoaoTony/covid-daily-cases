import { FC } from 'react';

import {
  Container, Title, FilterSection, Input,
} from './header.styles';

import ClickableElement from '../clickable-element';

const Header: FC = () => (
  <Container>
    <Title>Covid daily cases</Title>

    <FilterSection>
      <Input />
      <Input />
    </FilterSection>

    <ClickableElement />
  </Container>
);

export default Header;
