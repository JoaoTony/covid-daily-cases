export const getNumberOfDayIn365 = (numberOfDayIn365: number, year: string) => {
  const myPastDate = new Date(year);
  myPastDate.setDate(numberOfDayIn365 + 1);

  return new Date(myPastDate);
};

export const getPositionOnElementFromSpecificPoint = (
  elementWidth: number,
  numberOfPoints: number,
  position: number,
) => {
  const howManyPercentOfElement = (position * 100) / numberOfPoints;

  return (elementWidth * howManyPercentOfElement) / 100;
};
