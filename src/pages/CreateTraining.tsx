import { ArrowLeft } from "@phosphor-icons/react";
import React from "react";

export function CreateTraining() {
  return (
    <>
        <div className="flex justify-center mt-16 font-bold">
        <div className="flex items-center">
          <button type="button">
            <ArrowLeft size={25} weight="bold" />
          </button>
        <h1 className="text-2xl px-6">MONTE SEU TREINO</h1>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 gap-2">
        <div>
          <p className="text-sm">Selecione o músculo</p>
          <select
            className="bg-input text-sm w-72 h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            
          >
            <option value="Biceps">Biceps/Antebraço</option>
            <option value="Costas">Costas</option>
            <option value="Ombros">Ombros</option>
            <option value="Peito">Peito</option>
            <option value="Pernas">Pernas</option>
            <option value="Triceps">Triceps</option>
          </select>
        </div>
        <div>
          <p className="text-sm">Digite o aparelho</p>
          <input
            className="bg-input text-sm w-72 h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            type="text"
          />
        </div>
        <div className="flex gap-9">
          <div>
          <p className="text-sm">Séries</p>
          <input
            className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            type="number"
          />
          </div>
          <div>
          <p className="text-sm">Repetições</p>
          <input
            className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            type="number"
          />
          </div>
          <div>
          <p className="text-sm">Descanso</p>
          <input
            className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            type="number"
            placeholder="Seg"
          />
          </div>
        </div>
        <div className="mt-12">
          <p className="text-sm">Observações</p>
        <textarea
          className="bg-input w-72 h-20 p-2 text-sm rounded-md 
          focus:outline-none focus:ring focus:ring-placeIcons resize-none"
        />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
        <button
          className="bg-button mt-12 w-72 h-10 rounded-md font-semibold"
          type="button"
          >
          SALVAR
        </button>
        <button
          className="bg-button w-72 h-10 rounded-md font-semibold"
          type="button"
          >
          FINALIZAR
        </button>
        </div>
      </div>
    </>
  )
}