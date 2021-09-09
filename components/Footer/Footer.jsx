export const Footer = () => {
  return (
    <footer className="border-top padding-2 margin-top-7" >
      <p className="t7 margin-bot-1">Join our growing community</p>
      <ul className="no-bullets" >
	<li><a className="t5" href="#">Discord</a></li>
	<li><a className="t5" href="#">Instagram</a></li>
	<li><a className="t5" href="#">Twitter</a></li>
      </ul>

      <p className="t7 margin-bot-1 margin-top-2">Learn more about us</p>
      <ul className="no-bullets">
	<li><a className="t5" href="#">What is LIVEINEVERYNOW?</a></li>
	<li><a className="t5" href="#">Our Philosophy</a></li>
      </ul>
      <div className="t3 padding-top-5" >
	A LIVEINEVERYNOW. idea <span className="gray1">&copy;2021</span>
      </div>
    </footer>
  )
}
