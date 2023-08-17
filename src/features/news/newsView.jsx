import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNews} from './newsSlice';

export const NewsView = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news)

    useEffect(() => {
        dispatch(fetchNews());
    }, [])


    return(
        <div>
            <h2>List of Articles</h2>
            {news.loading && <div>loading....</div>}
            {!news.loading && news.error? <div>Error: {news.error}</div>: null}
            {!news.loading && news.articles.length? (
                <ul>{news.articles.map((news) => (
                    <li key={news.author}>{news.title}</li>
                ))}
                </ul>
            ): null}
        </div>
    )
}