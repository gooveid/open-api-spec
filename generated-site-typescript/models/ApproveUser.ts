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
 * @interface ApproveUser
 */
export interface ApproveUser {
    /**
     * 
     * @type {string}
     * @memberof ApproveUser
     */
    teamID?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApproveUser
     */
    acc?: boolean;
}

export function ApproveUserFromJSON(json: any): ApproveUser {
    return ApproveUserFromJSONTyped(json, false);
}

export function ApproveUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApproveUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamID': !exists(json, 'teamID') ? undefined : json['teamID'],
        'acc': !exists(json, 'acc') ? undefined : json['acc'],
    };
}

export function ApproveUserToJSON(value?: ApproveUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teamID': value.teamID,
        'acc': value.acc,
    };
}

