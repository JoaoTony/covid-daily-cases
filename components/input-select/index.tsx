/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useState } from 'react';

import { Container, Options, Input } from './input-select.styles';

import { InputSelectProps } from './input-select.types';

const InputSelect: FC<InputSelectProps> = ({ values, onChangeValue, ...rest }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [activeItem, setActiveItem] = useState(values[0] || '');

  const handleActiveItem = (item: string) => {
    setActiveItem(item);
    setShowOptions(false);
    if (onChangeValue) onChangeValue(item);
  };

  return (
    <Container {...rest}>
      <Input
        onBlur={() => {
          setTimeout(() => setShowOptions(false), 100);
        }}
        value={activeItem}
        onClick={() => setShowOptions((prev) => !prev)}
      />
      {showOptions && (
      <Options>
        {values.map((value) => (
          <p
            key={value}
            onClick={() => handleActiveItem(value)}
          >
            {value}
          </p>
        ))}
      </Options>
      )}
    </Container>
  );
};

export default InputSelect;
