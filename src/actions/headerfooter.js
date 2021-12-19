import {
    SET_HEADER_LINKS,
    SET_FOOTER_LINKS,
    CHANGE_HEADER_ACTIVE,
    CHANGE_FOOTER_ACTIVE
} from './types';

export function setHeaderLinks(links, onClick) {
    return ({
        type: SET_HEADER_LINKS,
        payload: {
            links,
            onClick: onClick ? onClick : ''
        }
    })
}

export function setFooterLinks(links2, onClick2) {
    return ({
        type: SET_FOOTER_LINKS,
        payload: {
            links2,
            onClick: onClick2 ? onClick2 : ''
        }
    })
}

export function changeHeaderActive(_id) {
    return ({
        type: CHANGE_HEADER_ACTIVE,
        payload: _id
    })
}

export function changeFooterActive(_id) {
    return ({
        type: CHANGE_FOOTER_ACTIVE,
        payload: _id
    })
}