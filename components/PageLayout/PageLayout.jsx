import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => {
  return (
    <div className="px-4 md:px-12 py-12">
      { children }
    </div>
  )
}

