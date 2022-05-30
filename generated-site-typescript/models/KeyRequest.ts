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
 * @interface KeyRequest
 */
export interface KeyRequest {
    /**
     * 
     * @type {string}
     * @memberof KeyRequest
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof KeyRequest
     */
    capabilities?: Array<string>;
}

export function KeyRequestFromJSON(json: any): KeyRequest {
    return KeyRequestFromJSONTyped(json, false);
}

export function KeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'capabilities': !exists(json, 'capabilities') ? undefined : json['capabilities'],
    };
}

export function KeyRequestToJSON(value?: KeyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'capabilities': value.capabilities,
    };
}

