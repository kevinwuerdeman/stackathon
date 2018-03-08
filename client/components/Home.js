import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'
//import {World} from '../world.js'

/**
 * COMPONENT
 */
class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log(this.props.map.forEach(item => {
      if (item === '*') {
        console.log(item)
      }
    }))
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <table><tbody>{this.props.world.map((row, i) => {
          return <tr id={`row ${i}`}>{row.split('').map((cell, j) => {
            return <td id={`${j}-${i}`} >{cell}</td>
          })}</tr>
        })}</tbody></table>
      </div>
    )
  }

}

const mapState = state => {
  return {
    world: state.world,
    map: state.world.join('').split('')
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Home)

