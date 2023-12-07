import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Modal({ visible, setVisible, task, setTask }) {
  const [inputValue, setinputValue] = useState("");
  return (
    <>
      {visible && (
        <div className="modal">
          <div className="modal-content">
            <input
              value={inputValue}
              onChange={(event) => {
                setinputValue(event.target.value);
              }}
              className="text"
              type="text"
            />
            <input
              onClick={() => {
                //ajout au tableau, "..." je suis entrain de dire que je veux ramener tout les enciennes-
                //-valeurs du tableau et la vergule pour ajouter les nouvelles valeurs
                if (inputValue != "") {
                  setTask([...task, inputValue]);
                  setVisible(false);
                  setinputValue("");
                } else {
                  toast("Veuillez remplir le champ");
                }
              }}
              className="add"
              type="button"
              value="Add"
            />
          </div>
        </div>
      )}
    </>
  );
}
