import React from 'react'

export enum ButtonSkins {
  Simple = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  Outline = 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded',
  Disabled = 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed',
  Icons = 'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center',
}

export default ButtonSkins
