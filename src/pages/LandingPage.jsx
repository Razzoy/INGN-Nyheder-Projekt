import { request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { allNews } from '../queries/allNews';

export function LandingPage() {
    const { data, isLoading, error } = useQuery(
        {
            queryKey: ['AllNews'],
            queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, allNews)
        }
    );

    console.log(data);
    
    return (
        <section>

        </section>
    )
}
