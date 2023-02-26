import NoteContext from "./noteContext"; 


const NoteState = (props)=>{

    const state = {
        "name" : "xyz",
        "class" : "24",
    }

    return(
        <NoteContext.Provider value = {state}>
            {props.children}
        </NoteContext.Provider>
    );

};

export default NoteState;