/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseModel } from '../../models/response-model';

export interface ApiProfileGet$Plain$Params {
}

export function apiProfileGet$Plain(http: HttpClient, rootUrl: string, params?: ApiProfileGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
  const rb = new RequestBuilder(rootUrl, apiProfileGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ResponseModel>;
    })
  );
}

apiProfileGet$Plain.PATH = '/api/profile';
