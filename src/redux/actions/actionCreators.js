import { UPDATE_HEADER, UPDATE_FILTERS, UPDATE_JWTTOKEN } from "./actions"

export function updateHeader(config) {
    return { type: UPDATE_HEADER, config}
}

export function updateFilters(tag, newFilter) {
    return { type: UPDATE_FILTERS, tag, newFilter}
}

export function updateJwtToken(config) {
    return { type: UPDATE_JWTTOKEN, config}
}