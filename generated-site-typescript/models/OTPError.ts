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
 * @interface OTPError
 */
export interface OTPError {
    /**
     * 
     * @type {Date}
     * @memberof OTPError
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof OTPError
     */
    cause?: string;
    /**
     * 
     * @type {string}
     * @memberof OTPError
     */
    explenation?: string;
}

export function OTPErrorFromJSON(json: any): OTPError {
    return OTPErrorFromJSONTyped(json, false);
}

export function OTPErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): OTPError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'cause': !exists(json, 'cause') ? undefined : json['cause'],
        'explenation': !exists(json, 'explenation') ? undefined : json['explenation'],
    };
}

export function OTPErrorToJSON(value?: OTPError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'cause': value.cause,
        'explenation': value.explenation,
    };
}

