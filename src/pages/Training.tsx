
import { ArrowLeft, CheckCircle, Trash, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Training() {

  const [clicked, setClicked] = useState(false);

  function Finished() {
    setClicked(!clicked);
  }

  return (
    <>

      <div className="flex justify-center mt-16 font-bold">
        <div className="flex items-center">
          <button type="button">
            <Link to='/'>
              <ArrowLeft size={25} weight="bold" />
            </Link>
          </button>
          <h1 className="text-2xl px-12">MEUS TREINOS</h1>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 gap-2">
        <div>
          <p className="text-sm">Músculo</p>
          <div
            className="bg-input text-sm w-72 h-10 px-2 rounded-md 
            focus:outline-none focus:ring focus:ring-placeIcons"
          />
        </div>
        <div>
          <p className="text-sm">Aparelho</p>
          <div
            className="bg-input text-sm w-72 h-10 px-2 rounded-md 
            focus:outline-none focus:ring focus:ring-placeIcons"
            
          />
        </div>
        <div className="flex">
          <div>
            <p className="text-sm">Séries</p>
            <div
              className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md 
              focus:outline-none focus:ring focus:ring-placeIcons"
            />
          </div>
           <X size={28} className="mt-7"/>
          <div className="pr-11">
            <p className="text-sm">Repetições</p>
            <div
              className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md 
              focus:outline-none focus:ring focus:ring-placeIcons"
            />
          </div>
          <div>
            <p className="text-sm">Descanso</p>
            <div
              className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md 
              focus:outline-none focus:ring focus:ring-placeIcons"
              placeholder="Seg"
            />
          </div>
        </div>
        <div className="mt-12">
          <p className="text-sm">Observações</p>
          <div
            className="bg-input w-72 h-20 p-2 text-sm rounded-md 
            focus:outline-none focus:ring focus:ring-placeIcons resize-none"
          />
        </div>
        <div className="flex gap-36 mt-6">
          <button
            className={`bg-button flex justify-center items-center w-[4.5rem] h-10 rounded-full font-semibold 
          ${clicked ? 'bg-check' : ''}`}
            type="button"
            onClick={Finished}
          >
            <CheckCircle size={25} />
          </button>
          <button
            className="bg-trash flex justify-center items-center w-[4.5rem] h-10 rounded-full font-semibold"
            type="button"
          >
            <Trash size={25} />
          </button>
        </div>
      </div>
    </>
  )
}