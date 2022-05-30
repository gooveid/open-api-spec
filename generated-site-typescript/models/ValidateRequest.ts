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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ValidateRequest
 */
export interface ValidateRequest {
    /**
     * 
     * @type {string}
     * @memberof ValidateRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateRequest
     */
    otp?: string;
}

export function ValidateRequestFromJSON(json: any): ValidateRequest {
    return ValidateRequestFromJSONTyped(json, false);
}

export function ValidateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'otp': !exists(json, 'otp') ? undefined : json['otp'],
    };
}

export function ValidateRequestToJSON(value?: ValidateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'otp': value.otp,
    };
}

