import { FC, useEffect, useState } from 'react';

import { LocationPoint } from './clickable-element.styles';
import { getNumberOfDayIn365, getPositionOnElementFromSpecificPoint } from './clickable-element-utils';

const locationPoints = [1, 91.25, 182.5, 273.75, 365];

export interface LocationPointProps {
  elementWidth: number,
  daysOfYear: number[],
}

const LocationPoints: FC<LocationPointProps> = ({ elementWidth, daysOfYear }) => {
  const [locationPointWidth, setLocationPointWidth] = useState(0);

  useEffect(() => {
    const $locationPoint = document.getElementById('location-point');
    setLocationPointWidth($locationPoint?.getBoundingClientRect().width ?? 0);
  }, []);

  return (
    <>
      {locationPoints.map((locationPoint, index) => {
        const eachPosition = getPositionOnElementFromSpecificPoint(
          elementWidth,
          daysOfYear.length,
          locationPoint,
        );

        const putInTheRightPlace = () => {
          if (index === 0) return eachPosition;
          if (index === locationPoints.length - 1) return eachPosition - locationPointWidth;

          return eachPosition - locationPointWidth / 2;
        };

        const positionIn365days = Math.trunc(eachPosition / (elementWidth / daysOfYear.length));

        return (
          <LocationPoint id="location-point" key={locationPoint} left={putInTheRightPlace()}>
            {getNumberOfDayIn365(daysOfYear[positionIn365days - 1], '2022').toLocaleDateString('pt-PT')}
          </LocationPoint>
        );
      })}
    </>
  );
};

export default LocationPoints;
