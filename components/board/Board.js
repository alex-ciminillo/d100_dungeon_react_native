
import Room from "../rooms/Room"


import { useState, useEffect } from "react"

export default function Board({addHour, legalNewRoom, diceFinished, setDiceFinished, throw_d100, rollRoom, shiftLR, setShiftLR, shiftUD, setShiftUD, placeRoom, currLocation, getRandomRoom, moveLocation, setLocation, roomInput, setRoomInput, currRoomObject, setRoomObject, mapSize, map, setMap, entrance}) {
    
    
    useEffect(() => {
        placeRoom(entrance[0], entrance[1])
    }, []);


    return (
        <div style={{overflow: 'hidden', backgroundColor: '#F2DA90', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <div style={{marginLeft:`${shiftLR}px`,marginTop:`${shiftUD}px`,display: 'grid', gridTemplateColumns: `repeat(${mapSize}, 100px)`, gridTemplateRows: `repeat(${mapSize}, 100px)`}} >
                {map.map((row, idx) => {
                    return row.map((column, idx2) => {
                        if (map[idx][idx2] !== '' && map[idx][idx2] != null) {
                            
                            return <Room addHour={addHour} legalNewRoom={legalNewRoom} diceFinished={diceFinished} setDiceFinished={setDiceFinished} roomInput={roomInput} setRoomInput={setRoomInput} throw_d100={throw_d100} rollRoom={rollRoom} key={`${idx} + ${idx2}`} dir={map[idx][idx2].dir} room={map[idx][idx2].img} row={idx} col={idx2} currLocation={currLocation} setLocation={setLocation} moveLocation={moveLocation} />
                        } else {
                            return <Room addHour={addHour} legalNewRoom={legalNewRoom} diceFinished={diceFinished} setDiceFinished={setDiceFinished} roomInput={roomInput} setRoomInput={setRoomInput} throw_d100={throw_d100} rollRoom={rollRoom} key={`${idx} + ${idx2}`} placeRoom={placeRoom} row={idx} col={idx2} currLocation={currLocation} setLocation={setLocation} />
                        }
                    })
                })}
            </div>
        </div>
    )


}








