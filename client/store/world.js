import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_WORLD = 'GET_WORLD'
const UPDATE_WORLD = 'UPDATE_WORLD';

let animals = []

/**
 * INITIAL STATE
 */
const defaultWorld = ["#####################################################################",
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

/**
 * ACTION CREATORS
 */
const getWorld = () => ({ type: GET_WORLD })
const updateWorld = world => ({ type: UPDATE_WORLD, world })

/**
 * THUNK CREATORS
 */


/**
 * REDUCER
 */
export default function (state = defaultWorld, action) {
  switch (action.type) {
    case GET_WORLD:
      return state
    case UPDATE_WORLD:
      return action.world
    default:
      return state
  }
}
