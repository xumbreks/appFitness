import { ArrowLeft } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CreateTraining() {

  const[muscle, setMuscle] = useState('Biceps/Antebraço');
  const[exercise, setExercise] = useState({})
  const[series, setSeries] = useState('')
  const[repeat, setRepeat] = useState('')
  const[rest, setRest] = useState('')
  const[note, setNote] = useState('')

  function envio(){
    console.log(muscle, exercise, series, repeat, rest, note)
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
          <h1 className="text-2xl px-6">MONTE SEU TREINO</h1>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 gap-2">
        <div>
          <p className="text-sm">Selecione o músculo</p>
          <select
            className="bg-input text-sm w-72 h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            onChange={event => setMuscle(event.target.value)}
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
            onChange={event => setExercise(event.target.value)}
          />
        </div>
        <div className="flex gap-9">
          <div>
            <p className="text-sm">Séries</p>
            <input
              className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
              type="number"
              onChange={event => setSeries(event.target.value)}
            />
          </div>
          <div>
            <p className="text-sm">Repetições</p>
            <input
              className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
              type="number"
              onChange={event => setRepeat(event.target.value)}
            />
          </div>
          <div>
            <p className="text-sm">Descanso</p>
            <input
              className="bg-input text-sm w-[4.5rem] h-10 px-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
              type="number"
              placeholder="Seg"
              onChange={event => setRest(event.target.value)}
            />
          </div>
        </div>
        <div className="mt-12">
          <p className="text-sm">Observações</p>
          <textarea
            className="bg-input w-72 h-20 p-2 text-sm rounded-md 
                      focus:outline-none focus:ring focus:ring-placeIcons resize-none"
            onChange={event => setNote(event.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <button
            className="bg-button mt-12 w-72 h-10 rounded-md font-semibold"
            type="button"
            onClick={envio}
          >
            SALVAR
          </button>
          <Link to='/training'>
          <button
            className="bg-button w-72 h-10 rounded-md font-semibold"
            type="button"
          >
            MEUS TREINOS
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}