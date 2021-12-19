import {
    SET_HEADER_LINKS,
    SET_FOOTER_LINKS,
    CHANGE_HEADER_ACTIVE,
    CHANGE_FOOTER_ACTIVE
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [],
    footerLinks: [
        {
          _id: 0,
          title: 'POLÍTICA DE PRIVACIDAD',
          active: false,
          path: '/política-de-privacidad'
        },
        {
          _id: 1,
          title: 'OPINIONES',
          active: false,
          path: '/opiniones'
        },
        {
          _id: 2,
          title: 'RECOMENDACIONES',
          active: false,
          path: '/recomendaciones'
        }
      ],
    onClick: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            const { links, onClick } = action.payload; 
            return {
                ...state,
                headerLinks:links,
                onClick: onClick
            }
        case SET_FOOTER_LINKS:
            const { links2, onClick2 } = action.payload; 
            return {
                ...state,
                footerLinks: links2,
                onClick: onClick2
            }
        case CHANGE_HEADER_ACTIVE: 
            const headerLinks = state.headerLinks.map(link => {
                link.active = false;
                if(link._id == action.payload) {
                    link.active = true;
                }
                return link;
            })
            return {
                ...state,
                headerLinks
            }
        case CHANGE_FOOTER_ACTIVE: 
            const footerLinks = state.footerLinks.map(link => {
                link.active = false;
                if(link._id == action.payload) {
                    link.active = true;
                }
                return link;
            })
            return {
                ...state,
                footerLinks
            }
        default: return state;
    }
}