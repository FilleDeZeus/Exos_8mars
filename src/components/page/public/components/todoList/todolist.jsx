import React, {useContext} from 'react'
import {AppContext} from '../../../../AppContext/appContext.jsx'

// importation du style sass
import './public/sass/todolist.scss'

//creation et exportaion du composant Todolist
export const Todolist = () => {
  //recuperation de l'etat dans AppContext
    const { tasks, setState } = useContext(AppContext);

    // fct pour ajouter tache
    const addTask = (e) => {
        // annule le rechargement de la page
        e.preventDefault();
        // recuperation de la valeur de l'input et supp espace vide
        const taskValue = e.target.elements.task.value.trim();
        // si inout vide il ne fait rien
        if (taskValue === '') {
            return;
        }
        // sinon ajout de la tache à letat
        setState({ type: "addTask", value: taskValue });
        e.target.reset(); // reset le form
    }

    // fct pour cocher et decocher 
    const checkTask = (id) => {
        setState({ type: "checkTask", value: id });//mis a jour de l'etat
    }
    //fct pour supprimer
    const suppTask = (id) => {
        setState({ type: "suppTask", value: id });
    }

    return (
        <div className='todolist'>
            <form onSubmit={addTask}>
                <input type="text" name="task" />
                <button type="submit">ajouter</button>
            </form>
            <ul>
          {/* creation d'un liste à partir du tab des tasks */}
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.ok}
                            onChange={() => checkTask(task.id)} //appelle de la fct au changment
                        />
                        {/*  si coché tache barré */}
                        <span style={{ textDecoration: task.ok ? "line-through" : "none" }}>
                            {task.title}
                        </span>
                        {/* btn pour supprimer la tache */}
                        <button onClick={() => suppTask(task.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}