import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_WORLD = 'GET_WORLD'


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
const getWorld = user => ({type: GET_WORLD})


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

    default:
      return state
  }
}
