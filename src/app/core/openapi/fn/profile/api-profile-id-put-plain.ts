/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProfileVm } from '../../models/profile-vm';
import { ResponseModel } from '../../models/response-model';

export interface ApiProfileIdPut$Plain$Params {
  id: string;
      body?: ProfileVm
}

export function apiProfileIdPut$Plain(http: HttpClient, rootUrl: string, params: ApiProfileIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
  const rb = new RequestBuilder(rootUrl, apiProfileIdPut$Plain.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
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

apiProfileIdPut$Plain.PATH = '/api/profile/{id}';
