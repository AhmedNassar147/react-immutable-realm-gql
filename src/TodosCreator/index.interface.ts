import immutable from 'immutable';

export type IStateImmutable = immutable.Map<string, number | string>;

export interface FormProps {
  onSubmit: (values: IStateImmutable) => void
}

export interface TodoProps {
  item: IStateImmutable;
};