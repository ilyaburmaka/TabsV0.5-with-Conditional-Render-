import React  from 'react'
//import styles
import {Button} from 'styles/Tabs/styles'
//import Prop
import PropTypes from 'prop-types'


const Butn = (props) => {
  return( <Button inputColor={props.inputColor} onClick={props.handleTabChange}>
            {props.title}
          </Button>
)}

Butn.propTypes = {
  inputColor:PropTypes.bool.isRequired,
  handleTabChange:PropTypes.func.isRequired,
  title:PropTypes.string.isRequired
}

export default Butn
