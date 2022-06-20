

import Room from "../rooms/Room"

export default function MapModal({ legalNewRoom, setMapModal, shiftLRMap, setShiftLRMap, shiftUDMap, setShiftUDMap, placeRoom, currLocation, getRandomRoom, moveLocation, setLocation, roomInput, setRoomInput, currRoomObject, setRoomObject, mapSize, map, setMap, entrance }) {



    const imgSize = '30px'


    return (
        <div onClick={()=>{setMapModal(false)}} style={{position: 'absolute' , width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, .5)', zIndex: '99999'}} >
            <div style={{overflow: 'hidden', backgroundColor: '#F2DA90', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <div style={{marginLeft:`${shiftLRMap}px`,marginTop:`${shiftUDMap}px`, display: 'grid', gridTemplateColumns: `repeat(${mapSize}, ${imgSize})`, gridTemplateRows: `repeat(${mapSize}, ${imgSize})`}} >
                {map.map((row, idx) => {
                    return row.map((column, idx2) => {
                        if (map[idx][idx2] !== '') {
                            return <Room legalNewRoom={legalNewRoom} key={`${idx} + ${idx2}`} dir={map[idx][idx2].dir} room={map[idx][idx2].img} row={idx} col={idx2} currLocation={currLocation} setLocation={setLocation} moveLocation={moveLocation} imgSize={imgSize} />
                        } else {
                            return <Room legalNewRoom={legalNewRoom} key={`${idx} + ${idx2}`} placeRoom={placeRoom} row={idx} col={idx2} currLocation={currLocation} setLocation={setLocation} imgSize={imgSize} />
                        }
                    })
                })}
            </div>
            </div>
        </div>
    )


}


