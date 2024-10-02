export const singleNews = `query NewsQuery ($newsslug: String!) {
  newsPage(where: {slug: $newsslug}) {
    author
    content
    date
    title
    image {
      fileName
      url
    }
    slug
  }
}`