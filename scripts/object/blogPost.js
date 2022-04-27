const blogData = {
    title: 'title',
    body: 'body',
    author: 'author',
    views: 20,
    comments: [{
            authorC: 'authorC 1',
            bodyC: 'bodyC 1'
        },
        {
            authorC: 'authorC 2',
            bodyC: 'bodyC 2'
        }
    ],
    isLive: true
}

console.log(blogData);
console.log(blogData.comments[0]);

function BlogDataConstructor(title, body, author, countViews, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = countViews;
    this.comments = [];
    this.isLive = isLive;
}

const blogFirst = new BlogDataConstructor('first blog', 'this is first blog', 'mohadese', 25, true);
console.log(blogFirst);