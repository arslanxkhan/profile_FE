/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiProfileGet } from '../fn/profile/api-profile-get';
import { ApiProfileGet$Params } from '../fn/profile/api-profile-get';
import { apiProfileGet$Plain } from '../fn/profile/api-profile-get-plain';
import { ApiProfileGet$Plain$Params } from '../fn/profile/api-profile-get-plain';
import { apiProfileIdDelete } from '../fn/profile/api-profile-id-delete';
import { ApiProfileIdDelete$Params } from '../fn/profile/api-profile-id-delete';
import { apiProfileIdDelete$Plain } from '../fn/profile/api-profile-id-delete-plain';
import { ApiProfileIdDelete$Plain$Params } from '../fn/profile/api-profile-id-delete-plain';
import { apiProfileIdGet } from '../fn/profile/api-profile-id-get';
import { ApiProfileIdGet$Params } from '../fn/profile/api-profile-id-get';
import { apiProfileIdGet$Plain } from '../fn/profile/api-profile-id-get-plain';
import { ApiProfileIdGet$Plain$Params } from '../fn/profile/api-profile-id-get-plain';
import { apiProfileIdPut } from '../fn/profile/api-profile-id-put';
import { ApiProfileIdPut$Params } from '../fn/profile/api-profile-id-put';
import { apiProfileIdPut$Plain } from '../fn/profile/api-profile-id-put-plain';
import { ApiProfileIdPut$Plain$Params } from '../fn/profile/api-profile-id-put-plain';
import { apiProfileImageIdPost } from '../fn/profile/api-profile-image-id-post';
import { ApiProfileImageIdPost$Params } from '../fn/profile/api-profile-image-id-post';
import { apiProfileImageIdPost$Plain } from '../fn/profile/api-profile-image-id-post-plain';
import { ApiProfileImageIdPost$Plain$Params } from '../fn/profile/api-profile-image-id-post-plain';
import { apiProfilePost } from '../fn/profile/api-profile-post';
import { ApiProfilePost$Params } from '../fn/profile/api-profile-post';
import { apiProfilePost$Plain } from '../fn/profile/api-profile-post-plain';
import { ApiProfilePost$Plain$Params } from '../fn/profile/api-profile-post-plain';
import { apiProfileProtfolioUrlGet } from '../fn/profile/api-profile-protfolio-url-get';
import { ApiProfileProtfolioUrlGet$Params } from '../fn/profile/api-profile-protfolio-url-get';
import { apiProfileProtfolioUrlGet$Plain } from '../fn/profile/api-profile-protfolio-url-get-plain';
import { ApiProfileProtfolioUrlGet$Plain$Params } from '../fn/profile/api-profile-protfolio-url-get-plain';
import { ResponseModel } from '../models/response-model';

@Injectable({ providedIn: 'root' })
export class ProfileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProfileProtfolioUrlGet()` */
  static readonly ApiProfileProtfolioUrlGetPath = '/api/profile/protfolio/{url}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileProtfolioUrlGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileProtfolioUrlGet$Plain$Response(params: ApiProfileProtfolioUrlGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileProtfolioUrlGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileProtfolioUrlGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileProtfolioUrlGet$Plain(params: ApiProfileProtfolioUrlGet$Plain$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileProtfolioUrlGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileProtfolioUrlGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileProtfolioUrlGet$Response(params: ApiProfileProtfolioUrlGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileProtfolioUrlGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileProtfolioUrlGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileProtfolioUrlGet(params: ApiProfileProtfolioUrlGet$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileProtfolioUrlGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /** Path part for operation `apiProfileGet()` */
  static readonly ApiProfileGetPath = '/api/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Plain$Response(params?: ApiProfileGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Plain(params?: ApiProfileGet$Plain$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Response(params?: ApiProfileGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet(params?: ApiProfileGet$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /** Path part for operation `apiProfilePost()` */
  static readonly ApiProfilePostPath = '/api/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfilePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePost$Plain$Response(params?: ApiProfilePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfilePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfilePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePost$Plain(params?: ApiProfilePost$Plain$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfilePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfilePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePost$Response(params?: ApiProfilePost$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfilePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfilePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePost(params?: ApiProfilePost$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfilePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /** Path part for operation `apiProfileIdGet()` */
  static readonly ApiProfileIdGetPath = '/api/profile/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdGet$Plain$Response(params: ApiProfileIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdGet$Plain(params: ApiProfileIdGet$Plain$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdGet$Response(params: ApiProfileIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdGet(params: ApiProfileIdGet$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /** Path part for operation `apiProfileIdPut()` */
  static readonly ApiProfileIdPutPath = '/api/profile/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfileIdPut$Plain$Response(params: ApiProfileIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfileIdPut$Plain(params: ApiProfileIdPut$Plain$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfileIdPut$Response(params: ApiProfileIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfileIdPut(params: ApiProfileIdPut$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /** Path part for operation `apiProfileIdDelete()` */
  static readonly ApiProfileIdDeletePath = '/api/profile/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdDelete$Plain$Response(params: ApiProfileIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdDelete$Plain(params: ApiProfileIdDelete$Plain$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdDelete$Response(params: ApiProfileIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileIdDelete(params: ApiProfileIdDelete$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /** Path part for operation `apiProfileImageIdPost()` */
  static readonly ApiProfileImageIdPostPath = '/api/profile/image/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileImageIdPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProfileImageIdPost$Plain$Response(params: ApiProfileImageIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileImageIdPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileImageIdPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProfileImageIdPost$Plain(params: ApiProfileImageIdPost$Plain$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileImageIdPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileImageIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProfileImageIdPost$Response(params: ApiProfileImageIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseModel>> {
    return apiProfileImageIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileImageIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProfileImageIdPost(params: ApiProfileImageIdPost$Params, context?: HttpContext): Observable<ResponseModel> {
    return this.apiProfileImageIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseModel>): ResponseModel => r.body)
    );
  }

}
