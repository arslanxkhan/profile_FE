/* tslint:disable */
/* eslint-disable */
export interface ResponseModel {
  content?: string | null;
  data?: any | null;
  errors?: {
[key: string]: string | null;
};
  isSuccess?: boolean;
  title?: string | null;
}
