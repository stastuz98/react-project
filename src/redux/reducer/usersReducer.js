const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_START_POSITION = 'CHANGE-START-POSITION';
const IS_FETCHING = 'IS-FETCHING';

let initialUsersPage = {
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1,
    startPosition: 1, //для списка pages
    isFetching: false,
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
        default:
            return usersPage;
    }
}


export const followAC = id => ({ type: FOLLOW, userId: id });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setTotalUsersCountAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const startPositionChangeAC = startPosition => ({ type: CHANGE_START_POSITION, startPosition });
export const isFetchingChangeAC = () => ({ type: IS_FETCHING })

export default usersReducer;
