/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseModel } from '../../models/response-model';

export interface ApiProfileProtfolioUrlGet$Params {
  url: string;
}

export function apiProfileProtfolioUrlGet(http: HttpClient, rootUrl: string, params: ApiProfileProtfolioUrlGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
  const rb = new RequestBuilder(rootUrl, apiProfileProtfolioUrlGet.PATH, 'get');
  if (params) {
    rb.path('url', params.url, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ResponseModel>;
    })
  );
}

apiProfileProtfolioUrlGet.PATH = '/api/profile/protfolio/{url}';