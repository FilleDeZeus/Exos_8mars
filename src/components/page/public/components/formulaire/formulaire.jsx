import React, { useContext } from "react";
import { AppContext } from "../../../../AppContext/appContext.jsx";

//importation du style sass
import './public/sass/formulaire.scss'

//creation et ecportation du composant Formulaire
export const Formulaire = () => {
  //recureperation de l'etat de puis le appContext
  const { form, setState  } = useContext(AppContext);

  //fonction lorsque que l'on valide le form
  const valider = (event) => {
    event.preventDefault(); //empeche le rechargement par default
    setState({ type: "form" }); 
  };

  //fct lorsque le nom est changé
  const changeNom = (event) => {
    setState({ type: "nom", value: event.target.value }); 
  };

  //fct lorsque l'email est changé
  const changeEmail = (event) => {
    setState({ type: "email", value: event.target.value });
  };

  //verifiaction si input vide
  const isInputEmpty = form.nom.trim() === '' || form.email.trim() === '';

  return (
    <div className="formulaire">
      {/* le formualaire*/}
        <form onSubmit={valider}>
          <label htmlFor="nom">Nom :
            <input type="text" value={form.nom} onChange={changeNom} />
          </label>
          <label htmlFor="email">Adresse e-mail :
            <input type="email" value={form.email} onChange={changeEmail}  />
          </label>
          {/* le bouton de validation du form et desactiver si champ vie*/}
          <button type="submit" disabled={isInputEmpty}>Valider</button>
          
          {form.valide && ( //si formulaire valider voila l'affichage
            <p>
              {form.nom}, votre inscription est bien validée avec comme adresse email{" "}
              {form.email}.
            </p>
          )}
      </form>
    </div>
  );
};