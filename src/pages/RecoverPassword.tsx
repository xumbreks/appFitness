import { ArrowLeft, User } from "@phosphor-icons/react";
import React from "react";

export function RecoverPassword(){
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24 text-sm gap-6">
        <div className="flex justify-center mt-16 font-bold">
          <div className="flex items-center">
            <button type="button">
              <ArrowLeft size={25} weight="bold" />
            </button>
            <h1 className="text-2xl px-12">RECUPERAÇÃO</h1>
          </div>
        </div>
        <div className="relative">
          <p>Email</p>
          <input
            className="bg-input text-sm w-72 h-10 pl-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            type="email"
            placeholder="example@gmail.com"
          />
          <div className="absolute inset-y-0 pt-5 pr-2 right-0 flex  items-center">
            <User size={25} className="text-placeIcons" />
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="bg-button w-72 h-10 rounded-md font-semibold"
            type="button"
          >
            RECUPERAR
          </button>
        </div>
        </div>
    </>
  )
}