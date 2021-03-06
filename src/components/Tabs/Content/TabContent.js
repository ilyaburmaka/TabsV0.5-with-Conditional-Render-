import React, { Fragment }  from 'react'
//import styles
import { Text,Img } from 'styles/Tabs/styles'
//import constants
import { activeTabs } from 'constants/Tabs/Constant'
//import Prop
import PropTypes from 'prop-types'
//import image
import myPict from 'additionals/Tabs/pictureForTab.png'


const TabsContent = (props) => (
  <Fragment>
    {props.tab === activeTabs.FIRST && <Text>my first text</Text>}
    {props.tab === activeTabs.SECOND && <Text>my second text</Text>}
    {props.tab === activeTabs.THIRD && <Img src={myPict} alt="Picture" />}
  </Fragment>
)

TabsContent.propTypes = {
  tab: PropTypes.string.isRequired
}

export default TabsContent
