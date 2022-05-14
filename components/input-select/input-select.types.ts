/* eslint-disable no-unused-vars */
import { HTMLAttributes } from 'react';

export interface InputSelectProps extends HTMLAttributes<HTMLDivElement> {
  values: string[];
  onChangeValue?: (value: string) => void;
}
