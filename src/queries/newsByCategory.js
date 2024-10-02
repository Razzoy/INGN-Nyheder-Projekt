export const newsByCategory = `query MyQuery ($categories: String!) {
  newsPages(where: {category: $categories}) {
    content
    author
    date
    image {
      url
    }
    slug
    title
  }
}`