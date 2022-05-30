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
import {
    PricingModel,
    PricingModelFromJSON,
    PricingModelFromJSONTyped,
    PricingModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface Pricing
 */
export interface Pricing {
    /**
     * 
     * @type {PricingModel}
     * @memberof Pricing
     */
    whatsappIndirect?: PricingModel;
    /**
     * 
     * @type {PricingModel}
     * @memberof Pricing
     */
    telegram?: PricingModel;
}

export function PricingFromJSON(json: any): Pricing {
    return PricingFromJSONTyped(json, false);
}

export function PricingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pricing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'whatsappIndirect': !exists(json, 'whatsapp_indirect') ? undefined : PricingModelFromJSON(json['whatsapp_indirect']),
        'telegram': !exists(json, 'telegram') ? undefined : PricingModelFromJSON(json['telegram']),
    };
}

export function PricingToJSON(value?: Pricing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'whatsapp_indirect': PricingModelToJSON(value.whatsappIndirect),
        'telegram': PricingModelToJSON(value.telegram),
    };
}

