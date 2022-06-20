import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Room from './components/rooms/Room';
import Board from './components/board/Board';
import { useState, useEffect } from 'react';
import MapModal from './components/mapModal/MapModal';
import DashBoard from './components/dashboard/DashBoard';
import DiceReact from './dice/DiceReact';
import { dice_initialize, throw_d100 }  from './dice/main.js'
import './dice/dice.css'



import { room1, room2, room3, room4, room5, room6, room7, room8, room9, room10,
         room11, room12, room13, room14, room15, room16, room17, room18, room19, room20,
         room21, room22, room23, room24, room25, room26, room27, room28, room29, room30,
         room31, room32, room33, room34, room35, room36, room37, room38, room39, room40, 
         room41, room42, room43, room44, room45, room46, room47, room48, room49, room50,
         room51, room52, room53, room54, room55, room56, room57, room58, room59, room60,
         room61, room62, room63, room64, room65, room66, room67, room68, room69, room70,
         room71, room72, room73, room74, room75, room76, room77, room78, room79, room80,
         room81, room82, room83, room84, room85, room86, room87, room88, room89, room90,
         room91, room92, room93, room94, room95, room96, room97, room98, room99, room100} from "./src/image/index"



  




export default function App() {

    const findObject1Key = [
        1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,
        4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,
        7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,
        10,10,10,10,10,11,11,11,11,11,
        12,12,12,12,12,13,13,13,13,13,
        14,14,14,14,14,15,15,15,15,15,
        16,16,16,16,16,17,17,17,17,17,
        18,18,18,18,18,19,19,19,19,19,
        20,20,20,20,20
    ]
    const findObject1 = {
        1: {
            time: 2,
            details: "The adventurer moves away some junk and hears a click, a trap is triggered, roll 1d10 on table G – Geographic."
        },
        2: {
            time: 2,
            details: "A monster is hiding and jumps out from the shadows to attack the adventurer, roll on table E – Encounter, the monster has (Surprise)."
        },
        3: {
            time: 2,
            details: "Moving through some of the rubbish strewn about the floor a small snake lashes out and bites the adventurer's hand injecting its venom into a vein, shade in two pips on the poison track."
        },
        4: {
            time: 1,
            details: "Searching through some of the larger heaps of debris, the adventurer abruptly stops and realises the pile is made up of diseased and rotting corpses, shade in 2 pips on the disease track."
        },
        5: {
            time: 1,
            details: "Whilst searching around a piece of equipment gets caught in a crevice of the dungeon wall, the adventurer carefully prises it free, but it has suffered some damage, roll 1d10 for location until an item is rolled and shade in 1 pip on its damage track."
        },
        6: {
            time: 1,
            details: "Climbing over some fallen rocks the adventurer accidentally stumbles and falls landing on their side, make a belt check."
        },
        7: {
            time: 1,
            details: "Searching for some considerable time the adventurer finds nothing of any real value."
        },
        8: {
            time: 1,
            details: "After a lot of digging through little more than junk, the adventurer eventfully wipes away the dirt to reveal something of value, roll on table I – Items."
        },
        9: {
            time: 1,
            details: "This area is dank and foul smelling, which is no surprise when a tomb is found hidden behind some fallen rocks, the tomb can be opened (optional) by rolling 1d10 on the table below and adding +1⮰ to the time track, add “Tomb F41” to the dungeon sheet and mark it with a ✔ if you decide to open it. 1: Empty apart from some strange blue beetles that are using the tomb as a nest. 2-4: A fresh corpse holding a bag of gold (+1d100gp). 5-10: A skeleton clutching a treasure, roll on table TA – Treasure A -15."
        },
        10: {
            time: 1,
            details: "Hidden and wedged in part of the dungeon wall is a Magic Scroll (200gp), roll once on table S – Spells, and add “Scroll of” before the spells name when adding it to the adventure sheet."
        },
        11: {
            time: 1,
            details: "Something catches the eye and the adventurer find something useful, roll on table N – Needed."
        },
        12: {
            time: 1,
            details: "Moving away some rubble a weapon is revealed, roll on table W – Weapons."
        },
        13: {
            time: 1,
            details: "Searching through some junk, a torn page from a spell book is found, it is a little crumbled but the spell is still intact, roll on table S – Spells and add the result to the spell book. "
        },
        14: {
            time: 1,
            details: "Behind a badly hung curtain a small lever is found, after it is pulled a far off rumble can be heard, shade 1 pip on the lever track."
        },
        15: {
            time: 0,
            details: "Shifting through some debris a piece of armour is revealed, roll on table A – Armour +15."
        },
        16: {
            time: 0,
            details: "The adventurer has found a secret tunnel, add the tunnel to the dungeon sheet by making a thin exit through one of the rock faces from the adventurer's current area to the middle section of an adjacent mapped or unmapped area, and mark the tunnel with an S (=S=). Movement between these two areas is now permitted."
        },
        17: {
            time: 0,
            details: "This part of the dungeon was once a library, most of the books are missing now but a quick scan reveals a spell book with two spells written inside, roll twice on table S – Spells and add the results to the spell book."
        },
        18: {
            time: 0,
            details: "Behind a broken cupboard a hole is found carved into the dungeon wall, peering inside the adventurer finds a treasure, roll on table TA – Treasure A."
        },
        19: {
            time: 0,
            details: "Moving a large mouldy carpet from part of the dungeon floor, the adventurer finds it was covering a recessed panel, prising it away reveals a treasure laying in a roughly carved out hollow, roll on table TB – Treasure B -15."
        },
        20: {
            time: 0,
            details: "Shifting through the rubbish strewn about the floor the adventurer is startled to find a skeleton. It has been a good source of nourishment for the small insects and rats that inhabit the dungeon. A quick search reveals the poor chap had very little at the time of his death; that is apart from this magnificent treasure, roll on table TC – Treasure C -15."
        }
    }

    

  const roomObject = {
    room1: {color: "yellow", left: "closed",right: "closed",up: "open"},room2: {color: "red", left: "closed",right: "door",up: "closed"},room3: {color: "yellow", left: "closed",right: "closed",up: "closed"},room4: {color: "red", left: "closed",right: "open",up: "open"},room5: {color: "yellow", left: "open",right: "closed",up: "closed"},
    room6: {color: "green", left: "open",right: "door",up: "closed"},room7: {color: "red", left: "door",right: "closed",up: "open"},room8: {color: "yellow", left: "open",right: "closed",up: "door"},room9: {color: "green", left: "closed",right: "door",up: "closed"},room10: {color: "red", left: "closed",right: "closed",up: "open"},
    room11: {color: "green", left: "open",right: "closed",up: "open"},room12: {color: "red", left: "closed",right: "closed",up: "open"},room13: {color: "yellow", left: "door",right: "open",up: "closed"},room14: {color: "green", left: "closed",right: "closed",up: "open"},room15: {color: "red", left: "closed",right: "open",up: "open"},
    room16: {color: "red", left: "closed",right: "open",up: "closed"},room17: {color: "yellow", left: "open",right: "closed",up: "door"},room18: {color: "red", left: "door",right: "door",up: "closed"},room19: {color: "yellow", left: "closed",right: "closed",up: "open"},room20: {color: "green", left: "closed",right: "open",up: "open"},
    room21: {color: "yellow", left: "closed",right: "door",up: "open"},
    room22: {color: "red", left: "closed",right: "closed",up: "open"},
    room23: {color: "yellow", left: "closed",right: "closed",up: "open"},
    room24: {color: "yellow", left: "open",right: "closed",up: "open"},
    room25: {color: "red", left: "closed",right: "closed",up: "closed"},
    room26: {color: "green", left: "open",right: "open",up: "closed"},
    room27: {color: "yellow", left: "open",right: "closed",up: "closed"},
    room28: {color: "yellow", left: "closed",right: "closed",up: "door"},
    room29: {color: "yellow", left: "closed",right: "open",up: "open"},
    room30: {color: "red", left: "closed",right: "open",up: "closed"},

    room31: {color: "red", left: "open",right: "closed",up: "closed"},
    room32: {color: "yellow", left: "closed",right: "open",up: "closed"},
    room33: {color: "red", left: "door",right: "closed",up: "door"},
    room34: {color: "yellow", left: "closed",right: "closed",up: "open"},
    room35: {color: "green", left: "closed",right: "open",up: "closed"},
    room36: {color: "red", left: "open",right: "open",up: "closed"},
    room37: {color: "open", left: "open",right: "open",up: "open"},
    room38: {color: "red", left: "open",right: "closed",up: "open"},
    room39: {color: "green", left: "closed",right: "closed",up: "door"},
    room40: {color: "yellow", left: "open",right: "open",up: "closed"},

    room41: {color: "yellow", left: "closed",right: "door",up: "closed"},
    room42: {color: "red", left: "open",right: "open",up: "closed"},
    room43: {color: "yellow", left: "closed",right: "open",up: "closed"},
    room44: {color: "green", left: "open",right: "open",up: "closed"},
    room45: {color: "yellow", left: "closed",right: "closed",up: "open"},
    room46: {color: "red", left: "open",right: "open",up: "door"},
    room47: {color: "yellow", left: "closed",right: "closed",up: "door"},
    room48: {color: "red", left: "open",right: "closed",up: "closed"},
    room49: {color: "yellow", left: "open",right: "open",up: "open"},
    room50: {color: "red", left: "closed",right: "closed",up: "door"},

    room51: {color: "green", left: "door",right: "closed",up: "closed"},
    room52: {color: "yellow", left: "open",right: "open",up: "open"},
    room53: {color: "red", left: "closed",right: "closed",up: "closed"},
    room54: {color: "green", left: "closed",right: "open",up: "door"},
    room55: {color: "closed", left: "closed",right: "closed",up: "closed"},
    room56: {color: "red", left: "open",right: "door",up: "closed"},
    room57: {color: "green", left: "closed",right: "closed",up: "door"},
    room58: {color: "red", left: "open",right: "open",up: "door"},
    room59: {color: "yellow", left: "door",right: "closed",up: "closed"},
    room60: {color: "red", left: "open",right: "closed",up: "open"},

    room61: {color: "red", left: "door",right: "open",up: "closed"},
    room62: {color: "yellow", left: "closed",right: "open",up: "closed"},
    room63: {color: "green", left: "open",right: "open",up: "open"},
    room64: {color: "yellow", left: "closed",right: "closed",up: "closed"},
    room65: {color: "green", left: "door",right: "closed",up: "closed"},
    room66: {color: "yellow", left: "open",right: "closed",up: "closed"},
    room67: {color: "yellow", left: "closed",right: "closed",up: "open"},
    room68: {color: "green", left: "door",right: "door",up: "door"},
    room69: {color: "red", left: "closed",right: "closed",up: "open"},
    room70: {color: "yellow", left: "closed",right: "door",up: "open"},

    room71: {color: "green", left: "closed",right: "open",up: "closed"},
    room72: {color: "red", left: "open",right: "door",up: "open"},
    room73: {color: "yellow", left: "open",right: "closed",up: "closed"},
    room74: {color: "red", left: "closed",right: "open",up: "closed"},
    room75: {color: "yellow", left: "closed",right: "closed",up: "open"},
    room76: {color: "yellow", left: "closed",right: "open",up: "door"},
    room77: {color: "red", left: "open",right: "closed",up: "closed"},
    room78: {color: "yellow", left: "closed",right: "closed",up: "open"},
    room79: {color: "red", left: "closed",right: "open",up: "door"},
    room80: {color: "green", left: "open",right: "closed",up: "closed"},

    room81: {color: "red", left: "door",right: "open",up: "open"},
    room82: {color: "yellow", left: "open",right: "closed",up: "closed"},
    room83: {color: "green", left: "closed",right: "door",up: "open"},
    room84: {color: "red", left: "closed",right: "closed",up: "open"},
    room85: {color: "yellow", left: "closed",right: "door",up: "closed"},
    room86: {color: "red", left: "closed",right: "door",up: "closed"},
    room87: {color: "yellow", left: "closed",right: "door",up: "closed"},
    room88: {color: "green", left: "open",right: "closed",up: "open"},
    room89: {color: "yellow", left: "closed",right: "closed",up: "door"},
    room90: {color: "red", left: "closed",right: "door",up: "open"},

    room91: {color: "blue", left: "open",right: "open",up: "closed"},
    room92: {color: "blue", left: "open",right: "closed",up: "door"},
    room93: {color: "blue", left: "closed",right: "closed",up: "closed"},
    room94: {color: "blue", left: "door",right: "closed",up: "open"},
    room95: {color: "blue", left: "door",right: "closed",up: "closed"},
    room96: {color: "blue", left: "door",right: "closed",up: "door"},
    room97: {color: "blue", left: "closed",right: "closed",up: "door"},
    room98: {color: "blue", left: "closed",right: "closed",up: "closed"},
    room99: {color: "blue", left: "closed",right: "closed",up: "open"},
    room100: {color: "blue", left: "closed",right: "closed",up: "closed"},

}

    let nextRoom;
    const [rollRoom, setRollRoom] = useState('On')
    const [roomInput, setRoomInput] = useState('')
    const [mapModal, setMapModal] = useState(false)
    const [currRoomObject, setRoomObject] = useState({}) 
    const [findInput, setFindInput] = useState('')
    const [rollFind, setRollFind] = useState('On')

    const mapSize = 21;
    function setRoomNumber(value) {
        setRoomInput(value)
    }

    function setFindNumber(value) {
        setFindInput(value)
    }

  let grid = new Array()
    for (let i = 0; i < mapSize; i++) {
        grid.push([])
    }
    grid.forEach(row => {
        for (let i = 0; i < mapSize; i++) {
            row.push('')
        }
    })
    const entrance = [Math.floor(grid.length / 2), Math.floor(grid[grid.length - 1].length / 2)]
    const [map, setMap] = useState(grid)

    const [currLocation, setLocation] = useState([entrance[0] + 1, entrance[1]])

    const [shiftLR, setShiftLR] = useState(0)
    const [shiftUD, setShiftUD] = useState(-200)
    const [shiftLRMap, setShiftLRMap] = useState(0)
    const [shiftUDMap, setShiftUDMap] = useState(0)
    const [diceFinished, setDiceFinished] = useState(0)
    const [oil, setOil] = useState(15)
    const [food, setFood] = useState(10)
    const [picks, setPicks] = useState(15)
    const [keys, setKeys] = useState(0)
    const [levers, setLevers] = useState(0)
    const [hour, setHour] = useState(-1)
    
    

    function rollForAmbush(ambushNum, row, col) {

        if (row != null && col != null) {
            let checkPlacedRoom = setInterval(makeAmbushCheck, 300)
            function makeAmbushCheck() {
                if (currRoomObject[`${row}${col}`] != null) {
                    clearInterval(checkPlacedRoom)
                }
            }
        }
        

        
        
    }

    function addHour(row, col, hours) {
        let currentHour = hour;
        let timeDivs = document.querySelector('[data-time-tracker]').children
        if (hour === -1) {

        } else {
            timeDivs[currentHour].classList.remove('current-time')
        }
        
        
        if (currentHour === 11) {
            if (hours === 2) {
                currentHour = 1;
            } else {
                currentHour = 0;
            }
            
        } else if (currentHour === 10 && hours === 2) {
            currentHour = 0;
        } else {
            if (hours === 2) {
                currentHour += 2;
            } else {
                currentHour += 1;
            }
            
        }
        timeDivs[currentHour].classList.add('current-time')
        
        if (hours === 2 && currentHour !== 0) {
            switch (currentHour - 1) {
                case 0:
                    if (oil !== 0) setOil(oil - 1)
                    break;
                case 1:
                    
                    break;
                case 2:
                    rollForAmbush(4, row, col)
                    break;
                case 3:
                    
                    break;
                case 4:
                    if (oil !== 0) setOil(oil - 1)
                    break;
                case 5:
                    
                    break;
                case 6:
                    rollForAmbush(5, row, col)
                    break;
                case 7:
                    
                    break;
                case 8:
                    if (oil !== 0) setOil(oil - 1)
                    break;
                case 9:
                    
                    break;
                case 10:
                    rollForAmbush(6, row, col)
                    break;
                case 11:
                    if (food !== 0) setFood(food - 1)
                    break;
            
                default:
                    break;
            }

        }

        if (hours === 2 && currentHour === 0) {
            if (food !== 0) setFood(food - 1)
        }

        switch (currentHour) {
            case 0:
                if (oil !== 0) setOil(oil - 1)
                break;
            case 1:
                
                break;
            case 2:
                rollForAmbush(4, row, col)
                break;
            case 3:
                
                break;
            case 4:
                if (oil !== 0) setOil(oil - 1)
                break;
            case 5:
                
                break;
            case 6:
                rollForAmbush(5, row, col)
                break;
            case 7:
                
                break;
            case 8:
                if (oil !== 0) setOil(oil - 1)
                break;
            case 9:
                
                break;
            case 10:
                rollForAmbush(6, row, col)
                break;
            case 11:
                if (food !== 0) setFood(food - 1)
                break;
        
            default:
                break;
        }
        setHour(currentHour);
    }


    function getRandomRoom(row, col, dir, color, rolledRoom) {
      const roomArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, 
                         room11, room12, room13, room14, room15, room16, room17, room18, room19, room20,
                         room21, room22, room23, room24, room25, room26, room27, room28, room29, room30,
                         room31, room32, room33, room34, room35, room36, room37, room38, room39, room40,
                         room41, room42, room43, room44, room45, room46, room47, room48, room49, room50,
                         room51, room52, room53, room54, room55, room56, room57, room58, room59, room60,
                         room61, room62, room63, room64, room65, room66, room67, room68, room69, room70,
                         room71, room72, room73, room74, room75, room76, room77, room78, room79, room80,
                         room81, room82, room83, room84, room85, room86, room87, room88, room89, room90,
                         room91, room92, room93, room94, room95, room96, room97, room98, room99, room100]
      let randomNumber;
      console.log(roomInput)
      if (roomInput !== '') {
        randomNumber = roomInput - 1;
    
      } else if (rolledRoom != null) {
        randomNumber = parseInt(rolledRoom) - 1
      } else {
        randomNumber = Math.floor(Math.random()*roomArray.length)
      }
      setRoomInput('')
      let randomRoom = roomArray[randomNumber];
      currRoomObject[`${row}${col}`] = roomObject[`room${randomNumber + 1}`]
      if (color == null) color = roomObject[`room${randomNumber + 1}`].color
      let left = currRoomObject[`${row}${col}`].left
      let right = currRoomObject[`${row}${col}`].right
      let up = currRoomObject[`${row}${col}`].up
      currRoomObject[`${row}${col}`].img = randomRoom
      currRoomObject[`${row}${col}`].number = Object.keys(currRoomObject).length - 1;
      console.log(dir)
      console.log(currRoomObject[`${row}${col}`])
      if (dir === "right") {
          currRoomObject[`${row}${col}`].up = left;
          currRoomObject[`${row}${col}`].left = 'open';
          currRoomObject[`${row}${col}`].down = right;
          currRoomObject[`${row}${col}`].right = up;
          currRoomObject[`${row}${col}`].dir = '90deg'
      } else if (dir === "left") {
          currRoomObject[`${row}${col}`].up = right;
          currRoomObject[`${row}${col}`].left = up;
          currRoomObject[`${row}${col}`].down = left;
          currRoomObject[`${row}${col}`].right = 'open';
          currRoomObject[`${row}${col}`].dir = '-90deg'
      } else if (dir === "down") {
          currRoomObject[`${row}${col}`].up = 'open';
          currRoomObject[`${row}${col}`].left = right;
          currRoomObject[`${row}${col}`].down = up;
          currRoomObject[`${row}${col}`].right = left;
          currRoomObject[`${row}${col}`].dir = '180deg';
      } else {
          currRoomObject[`${row}${col}`].down = 'open';
          currRoomObject[`${row}${col}`].dir = '0deg';
      }
      console.log(currRoomObject[`${row}${col}`])
      if (unblockedRoom(row, col, dir, color) === false) {
        placeRoom(row, col, color)
        return null;
      } 
      nextRoom = currRoomObject[`${row}${col}`]
     
      setRoomObject(currRoomObject)
      return {img: randomRoom, dir: dir}
  }

  function unblockedRoom(row, col, dir, color) {

    //check to see if new room is the right color
    if (currRoomObject[`${row}${col}`].color !== color) return false;

    // check to see if the current room has a door, then check to see if the adjacent room has a door.
    if (currRoomObject[`${row}${col}`].up === 'open' || currRoomObject[`${row}${col}`].up === 'door') {
        if (currRoomObject[`${row - 1}${col}`] != null) {
            if (currRoomObject[`${row - 1}${col}`].down !== 'open' && currRoomObject[`${row - 1}${col}`].down !== 'door') {
                return false;
            }
        }
    }
    if (currRoomObject[`${row}${col}`].down === 'open' || currRoomObject[`${row}${col}`].down === 'door') {
        if (currRoomObject[`${row + 1}${col}`] != null) {
            if (currRoomObject[`${row + 1}${col}`].up !== 'open' && currRoomObject[`${row + 1}${col}`].up !== 'door') {
                
                return false;
            }
        }
    }
    if (currRoomObject[`${row}${col}`].left === 'open' || currRoomObject[`${row}${col}`].left === 'door') {
        if (currRoomObject[`${row}${col - 1}`] != null) {
            if (currRoomObject[`${row}${col - 1}`].right !== 'open' && currRoomObject[`${row}${col - 1}`].right !== 'door') {
                
                return false;
            }
        }
    }
    if (currRoomObject[`${row}${col}`].right === 'open' || currRoomObject[`${row}${col}`].right === 'door') {
        if (currRoomObject[`${row}${col + 1}`] != null) {
            if (currRoomObject[`${row}${col + 1}`].left !== 'open' && currRoomObject[`${row}${col + 1}`].left !== 'door') {
                
                return false;
            }
        }
    }

    // check to see if the adjacent room has a door, then check to see if the current room has an adjacent door. 
    if (currRoomObject[`${row - 1}${col}`] != null) {
        if (currRoomObject[`${row - 1}${col}`].down === 'open' || currRoomObject[`${row - 1}${col}`].down === 'door') {
            if (currRoomObject[`${row}${col}`].up !== 'open' && currRoomObject[`${row}${col}`].up !== 'door') {
                return false;
            }
        }
    }


    if (currRoomObject[`${row + 1}${col}`] != null) {
        if (currRoomObject[`${row + 1}${col}`].up === 'open' || currRoomObject[`${row + 1}${col}`].up === 'door') {
            if (currRoomObject[`${row}${col}`].down !== 'open' && currRoomObject[`${row}${col}`].down !== 'door') {
                return false;
            }
        }
    }


    if (currRoomObject[`${row}${col + 1}`] != null) {
        if (currRoomObject[`${row}${col + 1}`].left === 'open' || currRoomObject[`${row}${col + 1}`].left === 'door') {
            if (currRoomObject[`${row}${col}`].right !== 'open' && currRoomObject[`${row}${col}`].right !== 'door') {
                return false;
            }
        }
    }


    if (currRoomObject[`${row}${col - 1}`] != null) {
        if (currRoomObject[`${row}${col - 1}`].right === 'open' || currRoomObject[`${row}${col - 1}`].right === 'door') {
            if (currRoomObject[`${row}${col}`].left !== 'open' && currRoomObject[`${row}${col}`].left !== 'door') {
                return false;
            }
        }
    }

    return true;
  }

  function legalNewRoom(row, col) {
    if (currRoomObject[`${currLocation[0]}${currLocation[1]}`] == null) return true
    if ((currLocation[0] + 1 === row && currLocation[1] === col && (currRoomObject[`${currLocation[0]}${currLocation[1]}`]['down'] === 'open' || currRoomObject[`${currLocation[0]}${currLocation[1]}`]['down'] === 'door')) ||
        (currLocation[0] - 1 === row && currLocation[1] === col && (currRoomObject[`${currLocation[0]}${currLocation[1]}`]['up'] === 'open' || currRoomObject[`${currLocation[0]}${currLocation[1]}`]['up'] === 'door')) ||
        (currLocation[0] === row && currLocation[1] + 1 === col && (currRoomObject[`${currLocation[0]}${currLocation[1]}`]['right'] === 'open' || currRoomObject[`${currLocation[0]}${currLocation[1]}`]['right'] === 'door')) ||
        (currLocation[0] === row && currLocation[1] - 1 === col && (currRoomObject[`${currLocation[0]}${currLocation[1]}`]['left'] === 'open' || currRoomObject[`${currLocation[0]}${currLocation[1]}`]['left'] === 'door'))) {
            if (map[row][col] === '') return true
    }
    return false;
  }



  function rollForRoom() {
    
  }




  function placeRoom(row, col, color, rolledRoom) {
    if (legalNewRoom(row, col) === false) return 
    let newMap = [...map]
    let dir;
    if (currLocation[0] + 1 === row && currLocation[1] === col) dir = 'down'
    if (currLocation[0] - 1 === row && currLocation[1] === col) dir = 'up'
    if (currLocation[0] === row && currLocation[1] + 1 === col) dir = 'right'
    if (currLocation[0] === row && currLocation[1] - 1 === col) dir = 'left'
    let nextPosition = getRandomRoom(row, col, dir, color, rolledRoom);
    if (nextPosition != null) newMap[row][col] = nextPosition
    if (newMap[row][col] == null) return
    setMap(newMap);
    moveLocation(row, col, dir)
    
      
  }

  function moveLocation(row, col, dir) {
      let currentRoom;
      if (currRoomObject[`${currLocation[0]}${currLocation[1]}`] != null) currentRoom = currRoomObject[`${currLocation[0]}${currLocation[1]}`] 
      if (currRoomObject[`${row}${col}`] != null) nextRoom = currRoomObject[`${row}${col}`]
      if (currentRoom != null) {
         if (dir === 'up') {
              if ((nextRoom.down !== 'open' && nextRoom.down !== 'door') || (currentRoom.up !== 'open' && currentRoom.up !== 'door')) {
                  return
              }
          } else if (dir === 'down') {
              if (nextRoom.up !== 'open' && nextRoom.up !== 'door' || (currentRoom.down !== 'open' && currentRoom.down !== 'door')) {
                  return
              }
          } else if (dir === 'left') {
              if (nextRoom.right !== 'open' && nextRoom.right !== 'door' || (currentRoom.left !== 'open' && currentRoom.left !== 'door')) {
                  return
              }
          } else if (dir === 'right') {
              if (nextRoom.left !== 'open' && nextRoom.left !== 'door' || (currentRoom.right !== 'open' && currentRoom.right !== 'door')) {
                  return
              }
          } 
      } 
      
      if (row === currLocation[0] && col === currLocation[1]) return
      if ((currLocation[0] + 1 === row && currLocation[1] === col) ||
          (currLocation[0] - 1 === row && currLocation[1] === col) ||
          (currLocation[0] === row && currLocation[1] + 1 === col) ||
          (currLocation[0] === row && currLocation[1] - 1 === col)) {
             let newLocation = [row, col]
              
              if (dir === 'down') {
                setShiftUD(shiftUD - 200)
                setShiftUDMap(shiftUDMap - 60)
              }
              if (dir === 'up') {
                setShiftUD(shiftUD + 200)
                setShiftUDMap(shiftUDMap + 60)
              } 
              if (dir === 'left') {
                setShiftLR(shiftLR + 200)
                setShiftLRMap(shiftLRMap + 60)
              } 
              if (dir === 'right') {
                setShiftLR(shiftLR - 200)
                setShiftLRMap(shiftLRMap - 60)
              } 
              setLocation(newLocation) 
      }
      addHour(row, col)
  }

  const [displayDice, setDisplayDice] = useState("block")

  function showDice() {
    setDisplayDice("block")
    console.log("show me the money!")
  }

  function hideDice() {
    console.log('hidden!')
    setDisplayDice("none")
  }


  const [diceInput, setDiceInput] = useState('')

  

  useEffect(()=> {
    dice_initialize(document.querySelector('[data-dice-body]'));
 }, [])
 

  return (
    <div data-dice-body  style={{margin: "0", padding: '0'}}>

<div style={{position:'fixed', display:`${displayDice}`, zIndex: '99999', top: '10%', pointerEvents: 'none'}}  id="canvas"></div>
<div style={{ position: 'relative', height: '100vh'}} >
        {mapModal ? <MapModal legalNewRoom={legalNewRoom} shiftLRMap={shiftLRMap} setShiftLRMap={setShiftLRMap} shiftUDMap={shiftUDMap} setShiftUDMap={setShiftUDMap} placeRoom={placeRoom} currLocation={currLocation} getRandomRoom={getRandomRoom} moveLocation={moveLocation} setLocation={setLocation} entrance={entrance} map={map} setMap={setMap} mapSize={mapSize} currRoomObject={currRoomObject} setRoomObject={setRoomObject} roomInput={roomInput} setRoomInput={setRoomInput} setMapModal={setMapModal} /> : null}
      <div style={{flexDirection: 'column', display: 'flex', justifyContent: 'space-around', height: '100%'}} >
        <div style={{height: '30%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}} >
          <DashBoard addHour={addHour} findObject1Key={findObject1Key} findObject1={findObject1} throw_d100={throw_d100} rollFind={rollFind} setRollFind={setRollFind} setFindNumber={setFindNumber} findInput={findInput} setFindInput={setFindInput} oil={oil} food={food} picks={picks} keys={keys} levers={levers} rollRoom={rollRoom} setRollRoom={setRollRoom} setDiceInput={setDiceInput} diceInput={diceInput} displayDice={displayDice} hideDice={hideDice} showDice={showDice} setMapModal={setMapModal} setRoomNumber={setRoomNumber} roomInput={roomInput} />
        </div>
        <div style={{flexDirection: 'column', display: 'flex', justifyContent: 'flex-end', height: '70%'}} >
          <Board addHour={addHour} legalNewRoom={legalNewRoom} diceFinished={diceFinished} setDiceFinished={setDiceFinished} setRoomInput={setRoomInput} throw_d100={throw_d100} rollRoom={rollRoom} shiftLR={shiftLR} setShiftLR={setShiftLR} shiftUD={shiftUD} setShiftUD={setShiftUD} placeRoom={placeRoom} currLocation={currLocation} getRandomRoom={getRandomRoom} moveLocation={moveLocation} setLocation={setLocation} entrance={entrance} map={map} setMap={setMap} mapSize={mapSize} currRoomObject={currRoomObject} setRoomObject={setRoomObject} roomInput={roomInput} />
        </div>
      </div>
      
      
      
    </div>



      
        

    </div>
       
      
    
    
    
  );
}

