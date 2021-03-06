/**
 * Switch Database REST API
 * Switch API is the primary endpoint of data sevices and Switch DB's platform. You can do adding, editing, deleting or listing data works to your database with query operations by using this low-level API based on HTTP.
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class AuthorizationApi {
    protected basePath = 'http://tr02.switchapi.com/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Generate Access Token
     * For generating Access Token, you need API Key and API Secret parameters that are provided from the developer portal. At the request, API Key that will be sent by using header is generated as portal API Key and Signature parameter is generated as md5(APISecret + ExpireTimestamp) format. At Expire parameter, token&#39;s expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information. 
     * @param aPIKey Your Switch API Key.
     * @param signature Signature parameter is generated as md5(APISecret + ExpireTimestamp) format.
     * @param expire Expire parameter, token&#39;s expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information.
     */
    public tokenGet(aPIKey: string, signature: string, expire: number, extraHttpRequestParams?: any): Observable<string> {
        return this.tokenGetWithHttpInfo(aPIKey, signature, expire, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Generate Access Token
     * For generating Access Token, you need API Key and API Secret parameters that are provided from the developer portal. At the request, API Key that will be sent by using header is generated as portal API Key and Signature parameter is generated as md5(APISecret + ExpireTimestamp) format. At Expire parameter, token&#39;s expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information. 
     * @param aPIKey Your Switch API Key.
     * @param signature Signature parameter is generated as md5(APISecret + ExpireTimestamp) format.
     * @param expire Expire parameter, token&#39;s expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information.
     */
    public tokenGetWithHttpInfo(aPIKey: string, signature: string, expire: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/Token`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'aPIKey' is not null or undefined
        if (aPIKey === null || aPIKey === undefined) {
            throw new Error('Required parameter aPIKey was null or undefined when calling tokenGet.');
        }
        // verify required parameter 'signature' is not null or undefined
        if (signature === null || signature === undefined) {
            throw new Error('Required parameter signature was null or undefined when calling tokenGet.');
        }
        // verify required parameter 'expire' is not null or undefined
        if (expire === null || expire === undefined) {
            throw new Error('Required parameter expire was null or undefined when calling tokenGet.');
        }
        headers.set('APIKey', String(aPIKey));

        headers.set('Signature', String(signature));

        headers.set('Expire', String(expire));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
