export const allNews = `query NewsQuery {
    newsPages {
        content
        category
        date
        title
        author
        slug
        image {
            url
            fileName
        }
    }
}`