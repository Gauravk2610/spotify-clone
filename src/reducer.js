export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null
    // token: 'BQDxzyVxfj1ObMSw6OoMM_UDnY6QDL3cMZL9wkJiGRpP7BaPpPhmRNfbzZsvCh011rpUWh_vnajzUTBr9rvttlexEigXMm06qZX1MToyXkH5C9bpuykR_KI1PEZ9nzSVaktXCT2s-ZyEI3bl91fPVLpJusWC33dMXTKfZP0N_X6L6_ji',
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer