export const allNews = `query NewsQuery {
    newsPages (first: 50) {
        content
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