import { useState } from "react";
import NoteContext from "./noteContext"; 


const NoteState = (props)=>{

    const notesInitial =[
        {
          "_id": "63eccc66500bfc5770c31633",
          "user": "63ea1006291efe61762adc9a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-02-15T12:13:26.178Z",
          "__v": 0
        },
        {
          "_id": "63eccc6b500bfc5770c31635",
          "user": "63ea1006291efe61762adc9a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-02-15T12:13:31.732Z",
          "__v": 0
        },
        {
          "_id": "63ee0614713813639421ba9a",
          "user": "63ea1006291efe61762adc9a",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-16T10:31:48.635Z",
          "__v": 0
        },
        {
          "_id": "63ee117e66497193b38c5085",
          "user": "63ea1006291efe61762adc9a",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-16T11:20:30.749Z",
          "__v": 0
        },
        {
            "_id": "63eccc66500bfc5770c31633",
            "user": "63ea1006291efe61762adc9a",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-02-15T12:13:26.178Z",
            "__v": 0
          },
          {
            "_id": "63eccc6b500bfc5770c31635",
            "user": "63ea1006291efe61762adc9a",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-02-15T12:13:31.732Z",
            "__v": 0
          },
          {
            "_id": "63ee0614713813639421ba9a",
            "user": "63ea1006291efe61762adc9a",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "Youtube",
            "date": "2023-02-16T10:31:48.635Z",
            "__v": 0
          },
          {
            "_id": "63ee117e66497193b38c5085",
            "user": "63ea1006291efe61762adc9a",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "Youtube",
            "date": "2023-02-16T11:20:30.749Z",
            "__v": 0
          }
      ];

      const [notes,setNotes] = useState(notesInitial);

    return(
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );

};

export default NoteState;