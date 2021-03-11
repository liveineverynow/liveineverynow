import css from 'styled-jsx/css'

const styles = css`
    nav {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        grid-template-areas: 
            "title"
            "links"
            "desc";
        margin: var(--s3) 0;
        padding: var(--s3) 0;
    }
section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}

h2 {
    grid-area: title;
    font-size: var(--s6);
    text-align: center;
}

.description {
    grid-area: desc;
    font-size: var(--s3);    
    text-align: center;
}

.links {
    grid-area: links;
    font-size: var(--s5);
    padding: var(--s2) 0 var(--s1) 0;
    padding: var(--s1) 0;
    align-self: center;
    justify-self: center;
}

nav a {
  color: #c4c4c4;
  padding: var(--s1);
}

nav a:hover {
  color: #000000;
}

nav a:last-child {
  padding-right: 0;
}

@media only screen and (min-width: 800px) {
nav {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "title links"
        "desc desc";
}
h2 {
    text-align: left;
}

.links {
    justify-self: end;
}

.description {
    text-align: left;
}
}

`

export default function NavSection(props) {

    const { title, description, links } = props

    return (
        <nav>
            <h2>{title}</h2>
            <div className="links">
                {props.children}
                { links.map( (link, index) => (
                    <a key={index} href={link[0]}>{link[1]}</a>
                ))}
            </div>
            <p className="description">{description}</p>
            <style jsx>{styles}</style>
        </nav>
    )
}