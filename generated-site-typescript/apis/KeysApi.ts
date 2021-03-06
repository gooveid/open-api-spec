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
    KeyRequest,
    KeyRequestFromJSON,
    KeyRequestToJSON,
    Keys,
    KeysFromJSON,
    KeysToJSON,
} from '../models';

export interface KeyDeleteRequest {
    id?: string;
}

export interface KeyPostRequest {
    keyRequest?: KeyRequest;
}

/**
 * 
 */
export class KeysApi extends runtime.BaseAPI {

    /**
     * Delete Key
     */
    async keyDeleteRaw(requestParameters: KeyDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Refresh authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Token authentication
        }

        const response = await this.request({
            path: `/key`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Key
     */
    async keyDelete(requestParameters: KeyDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.keyDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Get Team Key
     */
    async keyGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Keys>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Refresh authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Token authentication
        }

        const response = await this.request({
            path: `/key`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(KeysFromJSON));
    }

    /**
     * Get Team Key
     */
    async keyGet(initOverrides?: RequestInit): Promise<Array<Keys>> {
        const response = await this.keyGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Add new key
     */
    async keyPostRaw(requestParameters: KeyPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Refresh authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Token authentication
        }

        const response = await this.request({
            path: `/key`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: KeyRequestToJSON(requestParameters.keyRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add new key
     */
    async keyPost(requestParameters: KeyPostRequest, initOverrides?: RequestInit): Promise<void> {
        await this.keyPostRaw(requestParameters, initOverrides);
    }

}
