
export default function LogoHeader() {
    return (
        <>
        <style jsx>{`
            #logo {
                display: block;
                width: 70%;
                max-width: 240px;
                margin: var(--s8) auto;
            } 
        `}</style>
        <header>
            <img id="logo" src="assets/logo.png" alt="LIVEINEVERYNOW logo"/>
        </header>
        </>
    )
}