import React from 'react'
import { singleNews } from '../queries/singleNews';
import { request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { NewsBlock } from '../components/NewsBlock/NewsBlock';
import { useParams } from 'react-router-dom';
import { NewsWrapper } from '../components/NewsWrapper/NewsWrapper';



export function SingleNews() {

  const {newsslug} = useParams();

    const { data, isLoading, error } = useQuery(
        {
            queryKey: ['SingleNews'],
            queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, singleNews, {newsslug: newsslug})
        }
    );

    if(isLoading){
      return <p>Loading News....</p>
    }
    
  return (
    <NewsWrapper>
      <NewsBlock
        title={data.newsPage.title}
        url={data.newsPage.image?.url}
        date={data.newsPage.date}
        author={data.newsPage.author}
        content={data.newsPage.content}
        ></NewsBlock>
    </NewsWrapper>
  )
}
