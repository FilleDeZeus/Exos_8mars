import React from 'react'

import { Counter } from './public/components/counter/counter.jsx'
import { Todolist } from './public/components/todoList/todolist.jsx'
import { Formulaire } from './public/components/formulaire/formulaire.jsx'
import { Shopping } from './public/components/shopping/shopping.jsx'

// importaion du style de la page
import './public/sass/page.scss'

export const Page = () => {
    return (
        <div className='page'>
            <p>Ceci est ma page d'exercice sur UseReducer </p>
            <Counter/>
            <Todolist/>
            <Formulaire/>
            <Shopping/>
        </div>
    )
}
