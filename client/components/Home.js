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
    this.world = ["#####################################################################",
    "#                 ####         ****                          *  *  ##",
    "#   *  Ö  ##                 ########       oo                     ##",
    "#   *    ##        o o                 ****                ###     *#",
    "#       ##*                        ##########         Ö      ##*   *#",
    "#      ##***  *         ****                                 ##*  **#",
    "#* **  #  *  ***      #########       Ö                       ### **#",
    "#* **  #      *               #   *         ##         Ö          **#",
    "#     ##              #   o   #  ***         ###              #    ##",
    "#*            Ö       #       #   *        o  ##             ###    #",
    "#*                    #  ######                             ###     #",
    "###          ****          ***                                      #",
    "#       o                                  o       # ###      **    #",
    "#   *     ##  ##  ##  ##               ###         #########  ***   #",
    "#   **         #              *       #####  o     *****####        #",
    "##  **  o   o  #  #    ***  ***   Ö    ###              ****       o#",
    "###               #   *****                                         #",
    "#####################################################################"]


  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <table><tbody>{this.world.map(row => {
          return <tr>{row.split('').map(cell => {
            return <td>{cell}</td>
          })}</tr>
        })}</tbody></table>
      </div>
    )
  }

}

const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapState, mapDispatch)(Home)

