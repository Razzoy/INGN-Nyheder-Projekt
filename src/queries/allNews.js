export const allNews = `query NewsQuery {
    newsPages {
        indhold
        kategori
        dato
        overskrift
        skribent
        slug
        billede {
            url
            fileName
        }
    }
}`