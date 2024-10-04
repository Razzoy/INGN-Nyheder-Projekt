import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { newsByCategory } from '../queries/newsByCategory';
import { NewsBlock } from '../components/NewsBlock/NewsBlock';
import { Link, useParams } from 'react-router-dom';

export function Categories() {

  const {categories} = useParams();


    const { data, isLoading, error } = useQuery(
        {
          queryKey: ['newsByCategory', categories],
          queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, newsByCategory, {categories: categories})
        }
      );

      console.log(data);
      
  return (
    <section>
            {data?.newsPages?.map((item) => (
            <NewsBlock key={item.slug}
            title={item.title}
            url={item.image?.url}
            date={item.date}
            author={item.author}
            content={item.content.substring(0, 120) + '...'}>
                <Link to={`../singleNews/${item.slug}`}>Læs mere</Link>
            </NewsBlock>
            ))}
        </section>
  )
}
