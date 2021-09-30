import PropTypes from 'prop-types'
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import {
  useState,
} from 'react';


export const NavDropdown = () => {
  const links = [
    {
      name: "Podcast",
    },
    {
      name: "Home",
    },
    {
      name: "Mag",
    },
  ]

  const [current, setCurrent] = useState("Home")
  const [open, setOpen] = useState(false)

  const sortedLinks = () => {
    const i = links.findIndex(e => e.name == current)
    const s = links.sort((a, b) => {
      if (a.name == current) return -1
      if (b.name == current) return 1
      return 0
    })
    return s
  }

  const openDropdown = (
    <div className="flex flex-col">
    { sortedLinks().map((n, i) => (
      <div className="w-28 flex justify-between bg-white" key={i} onClick={e =>  {
	setCurrent(n.name)
	setOpen(false)
      }} ><a className="no-underline" href="#" >{ n.name }</a> { (i == 0) ? <ArrowDropUp/> : null } </div>

    ) )}
    </div>
  )

  const closedDropdown = (
    <div className="w-28 flex justify-between" onClick={e => setOpen(true) }>
      { current }
      <ArrowDropDown />
    </div>
  )

  return (
    <div className="m-auto flex space-x-2 text-2xl relative h-6">
      <h1 className="font-extrabold tracking-tight">LIVEINEVERYNOW.</h1>
      <div className="relative cursor-pointer">{ open ? openDropdown : closedDropdown }</div>
    </div>
  )
}

NavDropdown.propTypes = {

}
