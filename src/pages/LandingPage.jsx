import { request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { allNews } from '../queries/allNews';
import { NewsBlock } from '../components/NewsBlock/NewsBlock';
import { Link } from 'react-router-dom';
import { NewsWrapper } from '../components/NewsWrapper/NewsWrapper';
import style from '../components/NewsWrapper/NewsWrapper.module.scss'


export function LandingPage() {

    function splitArray(arr, size) {
        let newArray = [];
        for (let x = 0; x < arr.length / size; x++) {
            let res = arr.slice(size * x, size * (1 + x));
            newArray.push(res);
        }
        return newArray;
    }

    const { data, isLoading, error } = useQuery(
        {
            queryKey: ['AllNews'],
            queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, allNews)
        }
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const getGridAreaClass = (index) => {
        const gridClasses = [
            'news1', 'news2', 'news3', 'news4', 'news5',
            'news6', 'news7', 'news8', 'news9'
        ];
        return gridClasses[index % 9]; // Returner den rigtige grid-area baseret på index
    };

    return splitArray(data.newsPages, 9).map((arr, index) => {
        return (
            <NewsWrapper key={index}>
                {arr.map((item, index) => {
                    return (
                        <div key={item.slug} className={style[getGridAreaClass(index)]}>
                            <NewsBlock
                                title={item.title}
                                url={item.image?.url}
                                date={item.date}
                                author={item.author}
                                content={item.content.substring(0, 120) + '...'}>
                                <Link to={`./singleNews/${item.slug}`}>Læs mere</Link>
                            </NewsBlock>
                        </div>
                    )
                }
                )}
            </NewsWrapper>
        )
    })

}
