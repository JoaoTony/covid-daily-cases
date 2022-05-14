import { FC, useState, useEffect } from 'react';

import {
  Container, Floating, Target,
} from './clickable-element.styles';

import { getNumberOfDayIn365 } from './clickable-element-utils';
import LocationPoints from './location-point';

const daysOfYear = Array.from({ length: 365 }, (_v, i) => i);

const ClickableElement: FC = () => {
  const [selectedDate, setSelectedDate] = useState<any>();
  const [elementW, setElementW] = useState<number>(0);

  useEffect(() => {
    const $clickable = document.getElementById('clickable-element');
    const $selected = document.getElementById('selected');
    const $float = document.getElementById('floating');

    const windowsWidth = window.innerWidth;
    const tenPercentOfTheWindow = (windowsWidth * 10) / 100;

    const divWidth = $clickable?.getBoundingClientRect().width ?? 0;
    setElementW(divWidth);

    const divider = divWidth / daysOfYear.length;

    $clickable?.addEventListener('mousemove', (e) => {
      const floatWidth = $float?.getBoundingClientRect().width ?? 0;
      const selectedWidth = $selected?.getBoundingClientRect().width ?? 0;
      const getPositionInElement = Math.trunc((e.x - tenPercentOfTheWindow) / divider);

      const getSpecificDate = getNumberOfDayIn365(daysOfYear[getPositionInElement], '2022').toLocaleDateString('pt-PT');

      if ($float) {
        $float.style.left = `${(e.x - (floatWidth / 2)) - tenPercentOfTheWindow}px`;
        $float.innerText = `${getSpecificDate}`;
      }

      $clickable?.addEventListener('click', () => {
        setSelectedDate(getSpecificDate);

        if ($selected) {
          $selected.style.left = `${e.x - (selectedWidth / 2) - tenPercentOfTheWindow}px`;
        }
      });
    });
  }, []);

  return (
    <Container id="clickable-element">
      <Floating id="floating" />
      <Target id="selected" />
      <LocationPoints elementWidth={elementW} daysOfYear={daysOfYear} />
    </Container>
  );
};

export default ClickableElement;
