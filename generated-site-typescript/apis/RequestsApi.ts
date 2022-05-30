/* tslint:disable */
/* eslint-disable */
/**
 * GOOVE
 * GOOVE API Design Spec
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    OTPModel,
    OTPModelFromJSON,
    OTPModelToJSON,
    RequestStat,
    RequestStatFromJSON,
    RequestStatToJSON,
} from '../models';

/**
 * 
 */
export class RequestsApi extends runtime.BaseAPI {

    /**
     * Get Team Request
     */
    async requestsGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<OTPModel>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Refresh authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Token authentication
        }

        const response = await this.request({
            path: `/requests`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OTPModelFromJSON));
    }

    /**
     * Get Team Request
     */
    async requestsGet(initOverrides?: RequestInit): Promise<Array<OTPModel>> {
        const response = await this.requestsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get Team Request Stat
     */
    async requestsStatGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<RequestStat>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Refresh authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Token authentication
        }

        const response = await this.request({
            path: `/requests/stat`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestStatFromJSON(jsonValue));
    }

    /**
     * Get Team Request Stat
     */
    async requestsStatGet(initOverrides?: RequestInit): Promise<RequestStat> {
        const response = await this.requestsStatGetRaw(initOverrides);
        return await response.value();
    }

}
