
import { Image } from 'react-native'
import { useEffect, useState } from 'react';

export default function Room( {addHour, legalNewRoom, roomInput,setRoomInput, throw_d100, rollRoom, dir, moveLocation, room, placeRoom, row, col, currLocation, setLocation, imgSize} ) {


    function goToNextRoom(row, col) {
        let dir;
        if (currLocation[0] + 1 === row && currLocation[1] === col) dir = 'down'
        if (currLocation[0] - 1 === row && currLocation[1] === col) dir = 'up'
        if (currLocation[0] === row && currLocation[1] + 1 === col) dir = 'right'
        if (currLocation[0] === row && currLocation[1] - 1 === col) dir = 'left'
        moveLocation(row, col, dir)
    }

    let rotation = '0deg'
    if (imgSize == null) imgSize = '100px';
    if (dir === 'right') rotation = '90deg'
    if (dir === 'left') rotation = '-90deg'
    if (dir === 'down') rotation = '180deg'

    
    const [diceFinished, setDiceFinished] = useState(false)

    function rollForTheRoom(row, col) {
        if (legalNewRoom(row, col) === false) return 
        if (rollRoom === 'On' && roomInput === '') {
            let label = document.getElementById('label')
            label.innerHTML = ''
            throw_d100(document.querySelector('[data-dice-body]'))
            let keepCheckingThrow = setInterval(checkIfThrowIsFinished, 500);
            function checkIfThrowIsFinished() {
                if (label.innerHTML !== '') {
                    let roomNumber;
                    let labelArray = label.innerHTML.split(' ')
                    if (labelArray[0] === '0' && labelArray[1] === '10') {
                        roomNumber = 100
                      } else if (labelArray[1] === '10') {
                        roomNumber = labelArray[labelArray.length - 1] - '10'
                      } else {
                        roomNumber = labelArray[labelArray.length - 1]
                      }
                    
                    placeRoom(row,col, undefined, roomNumber)
                    clearInterval(keepCheckingThrow)
                }
            }
            
        } else {
            placeRoom(row, col)
        }

    }
    
    function getRoom() {

        if (room != null) {

                // add border for current room
                if (currLocation[0] === row && currLocation[1] === col) {
                    return <div onClick={()=>{goToNextRoom(row, col)}} >
                            <Image style={{transform: `rotate(${rotation})`,width: `${imgSize}`, height: `${imgSize}`, borderTop: '2px solid green', borderLeft: '2px solid green', borderBottom: '2px solid green', borderRight: '2px solid green'}} source={room} />
                        </div>
                }
                // no border for other rooms
                return <div onClick={()=>{goToNextRoom(row, col)}} >
                            <Image style={{transform: `rotate(${rotation})`,width: `${imgSize}`, height: `${imgSize}`}} source={room} />
                        </div>
            

        } else {
            return <div onClick={()=>{rollForTheRoom(row, col)}} >
                        <div style={{width: `${imgSize}`, height: `${imgSize}`}} ></div>
                    </div>
        }

    }
    
    return (
        <div  >{getRoom()}</div>
        
    )

    

}







