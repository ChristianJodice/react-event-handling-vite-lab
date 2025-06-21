// Code SubmitButton Component Here

function SubmitButton (){
    function handleSubmit(event){
        event.preventDefault()
        alert("Password submitted!")
    }

    function handleEnter() {
        console.log("Mouse Entering")
    }

    function handleLeave() {
        console.log("Mouse Exiting")
    }

    return(
        <div>
            <button 
                onClick={handleSubmit}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                Submit Password
            </button>
        </div>
    )
}

export default SubmitButton;