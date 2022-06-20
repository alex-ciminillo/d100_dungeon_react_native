


export default function FindModal({ setFindInput, addHour, setFindModal, findDetails }) {


    function closeModal() {
        console.log(findDetails.time)
        if (findDetails.time === 2) {
            addHour(undefined,undefined,2)
        } else if (findDetails.time === 1) {
            addHour()
        }
        setFindInput('')
        setFindModal(false)
    }


    return (
        <div onClick={()=>{closeModal()}} style={{position: 'absolute' , top: '0px', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, .7)', zIndex: '99999'}} >
            <div style={{color: 'white', fontSize: '25px', marginBottom: '10px'}} >{findDetails.time > 0 ? findDetails.time > 1 ? `+${findDetails.time} hours` : `+${findDetails.time} hour` : ''}</div>
            <div style={{color: 'white', fontSize: '25px', paddingLeft: '20px', paddingRight: '20px'}} >{findDetails.details}</div>
        </div>
    )


}
















