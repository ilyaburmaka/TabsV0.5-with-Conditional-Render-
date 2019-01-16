import React  from 'react'
//import styles
import {Text,Img} from 'styles/Tabs/styles'
//import constants
import {activeTabs} from 'constants/Tabs/Constant'
//import Prop
import PropTypes from 'prop-types'
//import image
import myPict from 'additionals/Tabs/pictureForTab.png'

export function Welcome(props){
   return ((props.tab === activeTabs.FIRST && <Text>my first text</Text>) ||
           (props.tab === activeTabs.SECOND && <Text>my second text</Text>) ||
           (props.tab === activeTabs.THIRD && <Img src={myPict} alt="Picture" />)
          )
}

Welcome.propTypes = {
  tab:PropTypes.string.isRequired
}
