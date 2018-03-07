var mapRefreshState = false;

// function refreshMap(){
//       world.turn();
//       document.getElementById("world").innerHTML = world
//         .toString()
//         .replace( new RegExp(" ", "g"), "🌫")
//         .replace( new RegExp("#", "g"), "⬛️")
//         .replace( new RegExp("\\*", "g"), "🌿")
//         .replace( new RegExp("o", "g"), "🐰")
//         .replace( new RegExp("Ö", "g"), "🐍");
// }

// function setMapInterval(){
//       if(!mapRefreshState)
//             int = setInterval(refreshMap,200);
//             mapRefreshState = true;
// }

// setMapInterval();

// /*Start world*/

// var world = new LifelikeWorld(
//   ["#####################################################################",
//    "#                 ####         ****                          *  *  ##",
//    "#   *  Ö  ##                 ########       oo                     ##",
//    "#   *    ##        o o                 ****                ###     *#",
//    "#       ##*                        ##########         Ö      ##*   *#",
//    "#      ##***  *         ****                                 ##*  **#",
//    "#* **  #  *  ***      #########       Ö                       ### **#",
//    "#* **  #      *               #   *         ##         Ö          **#",
//    "#     ##              #   o   #  ***         ###              #    ##",
//    "#*            Ö       #       #   *        o  ##             ###    #",
//    "#*                    #  ######                             ###     #",
//    "###          ****          ***                                      #",
//    "#       o                                  o       # ###      **    #",
//    "#   *     ##  ##  ##  ##               ###         #########  ***   #",
//    "#   **         #              *       #####  o     *****####        #",
//    "##  **  o   o  #  #    ***  ***   Ö    ###              ****       o#",
//    "###               #   *****                                         #",
//    "#####################################################################"],
//   {"#": Wall,
//    "o": SmartPlantEater,
//    "Ö": Tiger,
//    "*": Plant}
// );

export const createWorld = function (map) {
  // create <table> element
  var goltable = document.createElement("tbody");

  // build Table HTML
  var tablehtml = '';
  for (var h=0; h<map.length; h++) {
    tablehtml += "<tr id='row+" + h + "'>";
    for (var w=0; w<map[h].length; w++) {
      tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
    }
    tablehtml += "</tr>";
  }
  goltable.innerHTML = tablehtml;

  return tablehtml
  // add table to the #board element
  // var world = document.getElementById('world');
  // world.appendChild(goltable);

  // once html elements are added to the page, attach events to them
 // this.setupBoardEvents();
}

  // add table to the #board element

