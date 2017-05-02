import { UPDATE_HEADER, UPDATE_FILTERS } from "./actions"

export function updateHeader(config) {
    return { type: UPDATE_HEADER, config}
}

export function updateFilters(tag, newFilter) {
    return { type: UPDATE_FILTERS, tag, newFilter}
}