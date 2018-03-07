import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'
import {createWorld} from '../world.js'

/**
 * COMPONENT
 */
class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <table><tbody>{this.props.world.map(row => {
          return <tr>{row.split('').map(cell => {
            return <td>{cell}</td>
          })}</tr>
        })}</tbody></table>
      </div>
    )
  }

}

const mapState = state => {
  return {
    world: state.world
  }
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapState, mapDispatch)(Home)

