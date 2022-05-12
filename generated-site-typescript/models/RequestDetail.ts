/* tslint:disable */
/* eslint-disable */
/**
 * MNCOTP
 * MNCOTP API Design Spec
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
 * @interface RequestDetail
 */
export interface RequestDetail {
    /**
     * 
     * @type {string}
     * @memberof RequestDetail
     */
    method?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestDetail
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestDetail
     */
    sent?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestDetail
     */
    validated?: number;
}

export function RequestDetailFromJSON(json: any): RequestDetail {
    return RequestDetailFromJSONTyped(json, false);
}

export function RequestDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'method': !exists(json, 'method') ? undefined : json['method'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'sent': !exists(json, 'sent') ? undefined : json['sent'],
        'validated': !exists(json, 'validated') ? undefined : json['validated'],
    };
}

export function RequestDetailToJSON(value?: RequestDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'method': value.method,
        'total': value.total,
        'sent': value.sent,
        'validated': value.validated,
    };
}

