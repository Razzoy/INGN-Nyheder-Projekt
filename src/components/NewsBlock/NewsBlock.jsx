import Markdown from 'markdown-to-jsx'
import style from './NewsBlock.module.scss'

export function NewsBlock({ title, url, date, author, content, children, isSingleNews = false }) {
  return (
    <article className={isSingleNews ? style.singleNews : style.landingNews}>
      {isSingleNews ? (
        <>
        <img src={url} alt={title} />
          <div className={style.contentContainer}>
            <h2>{title}</h2>
            <p className={style.edited}>Skrevet af: {author}. D: {date}</p>
            <Markdown>{content}</Markdown>
            {children}
          </div>
        </>
      ) : (
        <>
          <div className={style.contentContainer}>
            <h2>{title}</h2>
            <Markdown>{content}</Markdown>
            <p className={style.edited}>Skrevet af: {author}. D: {date}</p>
            {children}
          </div>
          <img src={url} alt={title} />
        </>
      )}
    </article>
  );
}