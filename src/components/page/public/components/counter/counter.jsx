import React, {useContext} from 'react'
import {AppContext} from '../../../../AppContext/appContext.jsx'

// importation du style sass
import './public/sass/counter.scss'

export const Counter = () => {
      //recuperation de l'etat dans AppContext
    const { count, setState } = useContext(AppContext);

    return (
        <div className='counter'>
            {/* affichage du count */}
            <h1>{count}</h1>
            <div>
                {/* bouton pour decrementer */}
                <button onClick={() => setState({ type: "decrementer" })}>-</button>
                {/* bouton pour incrementer */}
                <button onClick={() => setState({ type: "incrementer" })}>+</button>
            </div>
        </div>
    );
}