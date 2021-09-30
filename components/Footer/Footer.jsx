import { NavDropdown } from '../NavDropdown/NavDropdown'

export const Footer = () => {
  return (
    <footer className="px-4 md:px-12 border-t w-full pb-12" >
      <div className="pt-16 text-2xl md:text-4xl flex flex-col md:flex-row">
	<p className="md:w-96">Join our growing community</p>
	<ul className="space-y-4 pt-8 md:pt-0">
	  <li><a href="#">Discord</a></li>
	  <li><a href="#">Instagram</a></li>
	  <li><a href="#">Twitter</a></li>
	</ul>
      </div>

      <div className="pt-16 text-2xl md:text-4xl flex flex-col md:flex-row">
	<p className="md:w-96">Learn more about us</p>
	<ul className="space-y-4 pt-8 md:pt-0">
	  <li><a className="t5" href="#">
	    What is LIVEINEVERYNOW?</a></li>
	  <li><a className="t5" href="#">
	    Our Philosophy</a></li>
	</ul>
      </div>
      <div className="pt-16 md:pt-20 text-black flex flex-col md:flex-row justify-between space-y-4 md:space-y-0" >
	<NavDropdown></NavDropdown>
	<span className="flex-grow text-center md:text-right">A LIVEINEVERYNOW. Idea <span className="text-gray-400">&nbsp;&copy;2021</span></span>
      </div>
    </footer>
  )
}
