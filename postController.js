const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
];

export const getPosts = () =>posts;

export const getPostsLength = () => posts.length;

//can also do this to export;
// const getPosts = () => posts
// export {getPosts, getPostsLength};

// to export as default of there is only one to export
// export  default getPosts;