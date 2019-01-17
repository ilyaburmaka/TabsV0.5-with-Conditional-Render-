import React  from 'react'
// styles
import { Button } from 'styles/Tabs/styles'
// libs
import PropTypes from 'prop-types'

const Butn = ({ isActiveTab, handleTabChange, title }) => (
  <Button inputColor={isActiveTab} onClick={handleTabChange}>
    {title}
  </Button>
)

Butn.propTypes = {
  isActiveTab: PropTypes.bool.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Butn
