import style from './Footer.module.scss'

export function Footer() {
  return (
    <div className={style.footerContainer}>
        <ul>
            <li><h3>Adresse:</h3></li>
            <li>Intet nyt - Godt nyt ApS</li>
            <li>Tulipanvej 232</li>
            <li>7320</li>
            <li>Valby Øster</li>
        </ul>
        <ul>
            <li><h3>Links</h3></li>
            <li>vikanweb.dk</li>
            <li>overpådenandenside.dk</li>
            <li>retsinformation.dk</li>
            <li>nogetmednews.dk</li>
        </ul>
        <ul>
            <li><h3>Politik</h3></li>
            <li>Privatlivspolitik</li>
            <li>Cookiepolitik</li>
            <li>Købsinformation</li>
            <li>Delingspolitik</li>
        </ul>
        <ul>
            <li><h3>Kontakt</h3></li>
            <li>ingn@nyhed.dk</li>
            <li>telefon: 23232323</li>
            <li>fax: 123123-333</li>
        </ul>
        
    </div>
  )
}
