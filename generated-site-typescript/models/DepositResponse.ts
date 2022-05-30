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
 * @interface DepositResponse
 */
export interface DepositResponse {
    /**
     * 
     * @type {string}
     * @memberof DepositResponse
     */
    token?: string;
}

export function DepositResponseFromJSON(json: any): DepositResponse {
    return DepositResponseFromJSONTyped(json, false);
}

export function DepositResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function DepositResponseToJSON(value?: DepositResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}

