import React from "react";

export function Selection(){
  return(
    <>
    <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <button
          className="bg-button mt-12 w-72 h-10 rounded-md font-semibold"
          type="button"
          >
          MEUS TREINOS
        </button>
        <button
          className="bg-button w-72 h-10 rounded-md font-semibold"
          type="button"
          >
          ADICICIONAR TREINOS
        </button>
        <button
          className="bg-trash w-72 h-10 rounded-md font-semibold"
          type="button"
          >
          SAIR DA CONTA
        </button>
      </div>
      </>
  )
}