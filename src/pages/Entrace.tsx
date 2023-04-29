import React from "react";
import {LockKey, User} from '@phosphor-icons/react';

export function Entrace () {
  return(
    <>
      <div className="flex justify-center mt-9">
        <img
          src='./src/assets/capa.jpg'
          alt="LogoTipo"
          />
      </div>
      <div className="flex flex-col items-center justify-center mt-24 text-sm gap-6">
        <div className="relative">
          <p>Email</p>
          <input
            className="bg-input text-sm w-72 h-10 pl-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
            type="email"
            placeholder="example@email.com"
            />
            <div  className="absolute inset-y-0 pt-5 pr-2 right-0 flex  items-center">
            <User size={25} className="text-placeIcons"/>
            </div>
        </div>
        <div className="relative">
          <p>Senha</p>
        <input
          className="bg-input text-sm w-72 h-10 pl-2 rounded-md focus:outline-none focus:ring focus:ring-placeIcons"
          type="password"
          placeholder="password"
        />
        <div  className="absolute inset-y-0 pt-5 pr-2 right-0 flex  items-center">
            <LockKey size={25} weight="fill" className="text-placeIcons"/>
            </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <button
          className="bg-button mt-12 w-72 h-10 rounded-md font-semibold"
          type="button"
        >
          ENTRAR
        </button>
        <button
          className="bg-button w-72 h-10 rounded-md font-semibold"
          type="button"
        >
          CADASTRE-SE
        </button>
      </div>
      <span className="flex flex-col items-center">
        <button
          className="underline mt-6 text-placeIcons"
          type="button"
        >
          esqueci a senha
        </button>
      </span>
    </>
  )
}