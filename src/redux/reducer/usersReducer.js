const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_START_POSITION = 'CHANGE-START-POSITION';
const IS_FETCHING = 'IS-FETCHING';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';

let initialUsersPage = {
    users: [],
    totalUsersCount: 0,
    pageSize: 80,
    currentPage: 1,
    startPosition: 1, //для списка pages
    isFetching: false,
    profile: null,
}

let usersReducer = (usersPage=initialUsersPage, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersPage,
                users: usersPage.users.map(user => {
                    if (user.id === action.userId)
                        return { ...user, followed: !user.followed }
                    else return user;
                })
            }
        case SET_USERS:
            return { ...usersPage, users: action.users };//[...action.users]
        case SET_TOTAL_USERS_COUNT:
            return { ...usersPage, totalUsersCount: action.totalUsersCount };
        case SET_CURRENT_PAGE:
            return { ...usersPage, currentPage: action.currentPage };
        case CHANGE_START_POSITION:
            return { ...usersPage, startPosition: action.startPosition };
        case IS_FETCHING:
            return { ...usersPage, isFetching: !usersPage.isFetching };
        case SET_PROFILE_INFO:
            return { ...usersPage, profile: action.profile };
        default:
            return usersPage;
    }
}

export const follow = id => ({ type: FOLLOW, userId: id });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setStartPositionChange = startPosition => ({ type: CHANGE_START_POSITION, startPosition });
export const isFetchingChange = () => ({ type: IS_FETCHING })
export const setProfileInfo = (profile) => ({ type: SET_PROFILE_INFO, profile})

export default usersReducer;
