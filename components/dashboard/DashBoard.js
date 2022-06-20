

import { useState } from 'react';
import './Dashboard.css'
import FindModal from '../findModal/FindModal';


export default function DashBoard( {setFindInput, addHour, findObject1, findObject1Key, throw_d100, rollFind, setRollFind, setFindNumber, findInput, oil, food, picks, keys, levers, rollRoom, setRollRoom, setDiceInput, setMapModal, setRoomNumber, roomInput, diceInput, hideDice, showDice} ) {

  const [findModal, setFindModal] = useState(false)
  const [findDetails, setFindDetails] = useState({})
  
  function showFind(type) {
    let findNumber;
    let find;
    switch (type) {
      case "roll":
        let label = document.getElementById('label')
        let labelArray = label.innerHTML.split(' ')
        if (labelArray[0] === '0' && labelArray[1] === '10') {
          findNumber = 100
        } else if (labelArray[1] === '10') {
          findNumber = labelArray[labelArray.length - 1] - '10'
        } else {
          findNumber = labelArray[labelArray.length - 1]
        }
        find = findObject1[findObject1Key[findNumber - 1]]
        break;
      case "input":
        findNumber = findInput
        find = findObject1[findObject1Key[findNumber - 1]]
        break;
      case "random":
        findNumber = Math.floor(Math.random()*100) + 1
        find = findObject1[findObject1Key[findNumber - 1]]
        break;
    
      default:
        break;
    }
    setFindDetails(find)
    setFindModal(true)
  }


  function rollForFind() {
    if (rollFind === 'On' && findInput === '') {
        let label = document.getElementById('label')
        label.innerHTML = ''
        throw_d100(document.querySelector('[data-dice-body]'))
        let keepCheckingThrow = setInterval(checkIfThrowIsFinished, 500);
        function checkIfThrowIsFinished() {
            if (label.innerHTML !== '') {
                let labelArray = label.innerHTML.split(' ')
                let findNumber = labelArray[labelArray.length - 1]
                showFind('roll')
                clearInterval(keepCheckingThrow)
            }
        }
        
    } else if (findInput !== '') {
      showFind('input')
    } else {
      showFind('random')
    }
}


  let backgroundColor = 'green'
  if (rollRoom === 'On') {
    backgroundColor = 'green'
  } else {
    backgroundColor = 'rgb(185, 0, 0)'
  }

  let backgroundColorFind = 'green'
  if (rollFind === 'On') {
    backgroundColorFind = 'green'
  } else {
    backgroundColorFind = 'rgb(185, 0, 0)'
  }

    function toggleRollRoom() {
      if (rollRoom === 'On') {
        setRollRoom('Off')
      } else {
        setRollRoom('On')
      }
    }

    function toggleRollFind() {
      if (rollFind === 'On') {
        setRollFind('Off')
      } else {
        setRollFind('On')
      }
    }

    return (
      <div style={{display: 'flex', flexDirection: 'column'}} >
        {findModal ? <FindModal setFindInput={setFindInput} addHour={addHour} setFindModal={setFindModal} findDetails={findDetails} /> : null}
        <div style={{display:'flex', width: '100%', justifyContent: 'center'}} >
          <div style={{paddingRight: '15px'}} >Oil: {oil}</div>
          <div style={{paddingRight: '15px'}} >Food: {food}</div>
          <div style={{paddingRight: '15px'}} >Picks: {picks}</div>
          <div style={{paddingRight: '15px'}} >Keys: {keys}</div>
          <div style={{paddingRight: '15px'}} >Levers: {levers}</div>
        </div>
        {/* time tracker */}
        <div data-time-tracker className='timeTrackerContainer' style={{display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '10px'}} >
          <div className="timeTracker" >
            <div>🕐</div>
            <div>🕯️</div>
          </div>
          <div className="timeTracker bottomSpace" >
            <div>🕑</div>
          </div>
          <div className="timeTracker" >
            <div>🕒</div>
            <div>⚔️</div>
          </div>
          <div className="timeTracker bottomSpace" >
            <div>🕓</div>
          </div>
          <div className="timeTracker" >
            <div>🕔</div>
            <div>🕯️</div>
          </div>
          <div className="timeTracker bottomSpace" >
            <div>🕕</div>
          </div>
          <div className="timeTracker" >
            <div>🕖</div>
            <div>⚔️</div>
          </div>
          <div className="timeTracker bottomSpace" >
            <div>🕗</div>
          </div>
          <div className="timeTracker" >
            <div>🕘</div>
            <div>🕯️</div>
          </div>
          <div className="timeTracker bottomSpace" >
            <div>🕙</div>
          </div>
          <div className="timeTracker" >
            <div>🕚</div>
            <div>⚔️</div>
          </div>
          <div className="timeTracker" >
            <div>🕛</div>
            <div>🍽️</div>
          </div>

        </div>

        {/* Room and Map buttons */}
        <div style={{display: 'flex', justifyContent: 'space-around'}} >
          
          
          {/* hidden dice elements */}
          <div style={{display: 'none'}} className="center_field">
            <div style={{display: 'none', flexDirection: 'row'}} >
            {/* <input type="text" id="set" value={diceInput} onChange={e => setDiceInput(e.target.value)} ></input><br/> */}
            <span style={{display: 'none'}} id="label"></span>
            </div>
            <button style={{display: 'none'}} id="clear" onClick={()=>{hideDice()}} >clear</button>
            <button style={{marginLeft: "0.6em", display: 'none'}} onClick={()=>{showDice()}} id="throw">throw</button>
          </div>
          {/* end hidden dice elements */}


          {/* room button and input */}
          <div>
            <div style={{display:'flex'}} >
              <div>Room #</div>
              <input style={{height: '13px', width: '20px', marginLeft:'5px'}} onChange={e => setRoomNumber(e.target.value)} value={roomInput} />
            </div>
            <div><button onClick={()=>{toggleRollRoom()}} style={{backgroundColor: `${backgroundColor}`, color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px'}} >Roll {rollRoom}</button>
            </div>
          </div>

          {/* find button and input */}
          <div>
            <div style={{display:'flex'}} >
              <div>Find #</div>
              <input style={{height: '13px', width: '20px', marginLeft:'5px'}} onChange={e => setFindNumber(e.target.value)} value={findInput} />
            </div>
            <div><button onClick={()=>{toggleRollFind()}} style={{backgroundColor: `${backgroundColorFind}`, color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px'}} >Roll {rollFind}</button>
            </div>
            <button onClick={()=>{rollForFind()}} >Search</button>
          </div>

          {/* mini-map button */}
          <button style={{height: '30px'}} onClick={()=>{setMapModal(true)}} >Map</button>
        </div>
        </div>
    )

}












