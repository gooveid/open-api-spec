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
 * @interface TeamInvitationRequest
 */
export interface TeamInvitationRequest {
    /**
     * 
     * @type {string}
     * @memberof TeamInvitationRequest
     */
    memberEmail?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TeamInvitationRequest
     */
    roles?: Array<string>;
}

export function TeamInvitationRequestFromJSON(json: any): TeamInvitationRequest {
    return TeamInvitationRequestFromJSONTyped(json, false);
}

export function TeamInvitationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamInvitationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memberEmail': !exists(json, 'member_email') ? undefined : json['member_email'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
    };
}

export function TeamInvitationRequestToJSON(value?: TeamInvitationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'member_email': value.memberEmail,
        'roles': value.roles,
    };
}

