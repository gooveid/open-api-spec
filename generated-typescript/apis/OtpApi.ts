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
    OTPRequest,
    OTPRequestFromJSON,
    OTPRequestToJSON,
    OTPResponse,
    OTPResponseFromJSON,
    OTPResponseToJSON,
    ValidateRequest,
    ValidateRequestFromJSON,
    ValidateRequestToJSON,
} from '../models';

export interface OtpMakePostRequest {
    oTPRequest?: OTPRequest;
}

export interface OtpStatusGetRequest {
    id?: string;
}

export interface OtpValidatePostRequest {
    validateRequest?: ValidateRequest;
}

/**
 * 
 */
export class OtpApi extends runtime.BaseAPI {

    /**
     * make new otp
     */
    async otpMakePostRaw(requestParameters: OtpMakePostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OTPResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/otp/make`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OTPRequestToJSON(requestParameters.oTPRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OTPResponseFromJSON(jsonValue));
    }

    /**
     * make new otp
     */
    async otpMakePost(requestParameters: OtpMakePostRequest, initOverrides?: RequestInit): Promise<OTPResponse> {
        const response = await this.otpMakePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get status of otp
     */
    async otpStatusGetRaw(requestParameters: OtpStatusGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OTPModel>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/otp/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OTPModelFromJSON(jsonValue));
    }

    /**
     * get status of otp
     */
    async otpStatusGet(requestParameters: OtpStatusGetRequest, initOverrides?: RequestInit): Promise<OTPModel> {
        const response = await this.otpStatusGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * validate otp
     */
    async otpValidatePostRaw(requestParameters: OtpValidatePostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/otp/validate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ValidateRequestToJSON(requestParameters.validateRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * validate otp
     */
    async otpValidatePost(requestParameters: OtpValidatePostRequest, initOverrides?: RequestInit): Promise<void> {
        await this.otpValidatePostRaw(requestParameters, initOverrides);
    }

}
