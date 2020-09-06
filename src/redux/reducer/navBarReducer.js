let navBarExample = [
    { id:1, name: 'Max-1' },
    { id:2, name: 'Max-2' },
    { id:3, name: 'Max-3' },
    { id:4, name: 'Max-4' }
]

let navBarReducer = (navBar=navBarExample, action) => {
    return navBar;
};

export default navBarReducer;
