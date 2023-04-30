import React from "react";
import { Link } from "react-router-dom";

export function Selection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <Link to='/training' >
          <button
            className="bg-button mt-12 w-72 h-10 rounded-md font-semibold"
            type="button"
          >
            MEUS TREINOS
          </button>
        </Link>
        <Link to='/createTraining' >
          <button
            className="bg-button w-72 h-10 rounded-md font-semibold"
            type="button"
          >
            ADICICIONAR TREINOS
          </button>
        </Link>
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