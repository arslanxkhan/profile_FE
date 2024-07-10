/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseModel } from '../../models/response-model';

export interface ApiProfileImageIdPost$Plain$Params {
  id: string;
      body?: {
'incomingFile'?: Blob;
}
}

export function apiProfileImageIdPost$Plain(http: HttpClient, rootUrl: string, params: ApiProfileImageIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
  const rb = new RequestBuilder(rootUrl, apiProfileImageIdPost$Plain.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
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

apiProfileImageIdPost$Plain.PATH = '/api/profile/image/{id}';
