/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProfileVm } from '../../models/profile-vm';
import { ResponseModel } from '../../models/response-model';

export interface ApiProfilePost$Plain$Params {
      body?: ProfileVm
}

export function apiProfilePost$Plain(http: HttpClient, rootUrl: string, params?: ApiProfilePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
  const rb = new RequestBuilder(rootUrl, apiProfilePost$Plain.PATH, 'post');
  if (params) {
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

apiProfilePost$Plain.PATH = '/api/profile';
