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
 * @interface UserSnippet
 */
export interface UserSnippet {
    /**
     * 
     * @type {string}
     * @memberof UserSnippet
     */
    userID?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSnippet
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSnippet
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSnippet
     */
    avatarurl?: string;
}

export function UserSnippetFromJSON(json: any): UserSnippet {
    return UserSnippetFromJSONTyped(json, false);
}

export function UserSnippetFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSnippet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userID': !exists(json, 'userID') ? undefined : json['userID'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'avatarurl': !exists(json, 'avatarurl') ? undefined : json['avatarurl'],
    };
}

export function UserSnippetToJSON(value?: UserSnippet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userID': value.userID,
        'name': value.name,
        'email': value.email,
        'avatarurl': value.avatarurl,
    };
}

