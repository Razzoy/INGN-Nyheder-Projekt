import Markdown from 'markdown-to-jsx'
import style from './NewsBlock.module.scss'

export function NewsBlock({title, url, date, author, content, children}) {
  return (
    <article>
        <h2>{title}</h2>
        <Markdown>
            {content}
        </Markdown>
        <p className={style.edited}>Skrevet af: {author}. D: {date}</p>
        {children}
        <img src={url} />
    </article>
  )
}
