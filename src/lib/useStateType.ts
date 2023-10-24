import { Dispatch, SetStateAction } from 'react';

export interface IUseState<T> {
  value: string;
  setValue: Dispatch<SetStateAction<T>>;
}
