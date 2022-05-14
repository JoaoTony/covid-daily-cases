import { FC, useState } from 'react';

import {
  Container, Title, FilterSection,
} from './header.styles';

import ClickableElement from '../clickable-element';

import InputSelect from '../input-select';

const availableYears = ['2020', '2021', '2022'];
const availableViewingPreferences = ['Data Atual', 'Data acumuluda'];

const Header: FC = () => {
  const [selectedYear, setSelectedYear] = useState(availableYears[0]);

  return (
    <Container>
      <Title>Covid daily cases</Title>

      <FilterSection>
        <InputSelect values={availableYears} onChangeValue={(value) => setSelectedYear(value)} />
        <InputSelect style={{ marginLeft: 10 }} values={availableViewingPreferences} />
      </FilterSection>

      <ClickableElement selectedYear={selectedYear} />
    </Container>
  );
};

export default Header;
