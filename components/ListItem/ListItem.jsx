import PropTypes from 'prop-types'

export const ListItem = ({
    title="Title",
    children,
}) => {
    return (
      <li className="py-6 md:py-12 flex flex-col md:flex-row md:justify-between items-start md:items-center border-b first:border-t space-y-6 md:space-y-0">
	<h3 className="text-2xl md:text-4xl flex-shrink">{ title }</h3>
	<div className="flex space-x-4 text-xl md:text-2xl flex-shrink-0">
	  { children }
	</div>
      </li>
    )
}

ListItem.propTypes = {
    title: PropTypes.string,
}
