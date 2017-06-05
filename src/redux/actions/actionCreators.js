import { UPDATE_HEADER, UPDATE_FILTERS, UPDATE_JWTTOKEN, UPDATE_USER, MENU_VISIBILITY, SMALL_SCREEN } from "./actions"

export function updateHeader(config) {
    return { type: UPDATE_HEADER, config}
}

export function updateFilters(tag, newFilter) {
    return { type: UPDATE_FILTERS, tag, newFilter}
}

export function updateJwtToken(config) {
    return { type: UPDATE_JWTTOKEN, config}
}

export function updateUser(config) {
    return { type: UPDATE_USER, config}
}

export function updateMenuVisibility(config) {
    return { type: MENU_VISIBILITY, config}
}

export function updateSmallScreen(config) {
    return { type: SMALL_SCREEN, config}
}