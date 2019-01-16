//import
import React , { Component } from 'react'
//styles
import {Wrapper} from 'styles/Tabs/styles'
//constants
import {activeTabs,textForTab} from 'constants/Tabs/Constant'
//components
import {Welcome} from 'components/Tabs/Text/Text'
import {Butn} from 'components/Tabs/Button/Button'


class App extends Component {
  state = {
    activeTab: activeTabs.FIRST
  }

  handleSubmit = (activeTab) => (e) =>{
    this.setState({activeTab})
  }

  render() {
    const {activeTab} = this.state
    return(
      <Wrapper>
        {textForTab.map(({ value, title }) =>
          <Butn
           key={value}
           inputColor={activeTab === value}
           handleTabChange={this.handleSubmit(value)}
           title={title}
          />
        )}
        <Welcome tab={activeTab} />
      </Wrapper>
    )
  }
}

export default App;
