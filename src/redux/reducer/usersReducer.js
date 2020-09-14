const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_START_POSITION = 'CHANGE-START-POSITION';

/*[
    { id: 1, followed: true, fullName: 'Stas T.', status: 'I love my baby', location: { country: 'Russian Federation', city: 'Samara' } },
    { id: 2, followed: false, fullName: 'Alex T.', status: 'I want to be developer', location: { country: 'Ukraine', city: 'Kiev' } },
    { id: 3, followed: false, fullName: 'Nikita M.', status: 'Hello, world', location: { country: 'Belarus', city: 'Minsk' } },
    { id: 4, followed: true, fullName: 'Vera N.', status: 'I live in small room', location: { country: 'Germany', city: 'Berlin' } },
],*/

let initialUsersPage = {
    users: [],
    totalUsersCount: 0,
    pageSize: 80,
    currentPage: 1,
    startPosition: 1, // для списка pages
};

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
            };
        case SET_USERS:
            return { ...usersPage, users: action.users };//[...action.users]
        case SET_TOTAL_USERS_COUNT:
            return { ...usersPage, totalUsersCount: action.totalUsersCount };
        case SET_CURRENT_PAGE:
            return { ...usersPage, currentPage: action.currentPage };
        case CHANGE_START_POSITION:
            return { ...usersPage, startPosition: action.startPosition };
        default:
            return usersPage;
    }
}


export const followAC = id => ({ type: FOLLOW, userId: id });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setTotalUsersCountAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const startPositionChangeAC = startPosition => ({ type: CHANGE_START_POSITION, startPosition });

export default usersReducer;
