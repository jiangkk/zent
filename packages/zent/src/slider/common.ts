import { CSSProperties } from 'react';

export const getLeft = (value: number, min: number, max: number) => {
  return ((value - min) * 100) / (max - min);
};

export const getValue = (value: number, min: number, max: number) => {
  return min + (max - min) * value;
};

export const toFixed = (value: number, fractionDigits: number) => {
  return Number(value.toFixed(fractionDigits));
};

export interface ISliderChildCommonProps {
  min: number;
  max: number;
  disabled: boolean;
  decimal: number;
  value: number;
  position: string;
  onChange(value: number | string | null): void;
}

export type IComputedProps =
  | {
      range: true;
      leftProps: ISliderChildCommonProps;
      rightProps: ISliderChildCommonProps;
      trackStyle: CSSProperties;
    }
  | {
      range: false;
      props: ISliderChildCommonProps;
      trackStyle: CSSProperties;
    };
