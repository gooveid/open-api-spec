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
 * @interface OtpValidated
 */
export interface OtpValidated {
    /**
     * 
     * @type {boolean}
     * @memberof OtpValidated
     */
    otpValidated?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OtpValidated
     */
    validatedDuration?: number;
    /**
     * 
     * @type {Date}
     * @memberof OtpValidated
     */
    otpValidatedAt?: Date;
}

export function OtpValidatedFromJSON(json: any): OtpValidated {
    return OtpValidatedFromJSONTyped(json, false);
}

export function OtpValidatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtpValidated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'otpValidated': !exists(json, 'otpValidated') ? undefined : json['otpValidated'],
        'validatedDuration': !exists(json, 'validatedDuration') ? undefined : json['validatedDuration'],
        'otpValidatedAt': !exists(json, 'otpValidatedAt') ? undefined : (new Date(json['otpValidatedAt'])),
    };
}

export function OtpValidatedToJSON(value?: OtpValidated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'otpValidated': value.otpValidated,
        'validatedDuration': value.validatedDuration,
        'otpValidatedAt': value.otpValidatedAt === undefined ? undefined : (value.otpValidatedAt.toISOString()),
    };
}

