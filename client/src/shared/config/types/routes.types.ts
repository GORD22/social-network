import { IAccess } from './access';

export interface IRoutingItem {
  url: string;
  label: string;
}

export type IRouting = {
  [key in keyof IAccess]: IRoutingItem;
};
