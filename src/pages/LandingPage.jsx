import { request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { allNews } from '../queries/allNews';
import Markdown from 'markdown-to-jsx';
import { NewsBlock } from '../components/NewsBlock/NewsBlock';
import { Link } from 'react-router-dom';


export function LandingPage() {
    const { data, isLoading, error } = useQuery(
        {
            queryKey: ['AllNews'],
            queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, allNews)
        }
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <section>
            {data.newsPages.map((item) => (
            <NewsBlock key={item.slug}
            title={item.title}
            url={item.image?.url}
            date={item.date}
            author={item.author}
            content={item.content.substring(0, 120) + '...'}>
                <Link to={`./singleNews/${item.slug}`}>Læs mere</Link>
            </NewsBlock>
            ))}
        </section>
    )
}
