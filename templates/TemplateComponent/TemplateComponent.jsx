import PropTypes from 'prop-types'

export const TemplateComponent = ({
    label="Label",
    darkMode=false,
}) => {
    const className = darkMode ? 'dark' : ''
    return (
	<p className={className}>{ label }</p>
    )
}

TemplateComponent.propTypes = {
    label: PropTypes.string,
    darkMode: PropTypes.bool,
}
