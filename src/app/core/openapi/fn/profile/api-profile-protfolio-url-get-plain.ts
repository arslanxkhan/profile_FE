/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseModel } from '../../models/response-model';

export interface ApiProfileProtfolioUrlGet$Plain$Params {
  url: string;
}

export function apiProfileProtfolioUrlGet$Plain(http: HttpClient, rootUrl: string, params: ApiProfileProtfolioUrlGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
  const rb = new RequestBuilder(rootUrl, apiProfileProtfolioUrlGet$Plain.PATH, 'get');
  if (params) {
    rb.path('url', params.url, {});
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

apiProfileProtfolioUrlGet$Plain.PATH = '/api/profile/protfolio/{url}';
