import style from './NewsWrapper.module.scss'

export function NewsWrapper({children}) {
    return (
        <section className={style.wrapperStyling}>
            {children}
        </section>
    )
}
