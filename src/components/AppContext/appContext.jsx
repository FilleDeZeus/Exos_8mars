import React, { useReducer, createContext } from "react";

// creation 
export const AppContext = createContext();

// creation de tout les reducers
const reducer = (state, action) => {
  // switch pour les different etats en fct de l'action
  switch (action.type) {

    case "incrementer": //incrementation de la valeur
      return { ...state, //copie l'ensemble de l'etat
        count: state.count + 1 }; //ajout de 1 à count
    case "decrementer": //decrementation de la valeur
      return { ...state, //copie l'ensemble de l'etat
        count: state.count - 1 };//enleve de 1 à count
    case "addTask": // ajout une new add
      return {
        ...state,  //copie l'ensemble de l'etat
        tasks: [...state.tasks, { id: Date.now(), title: action.value, ok: false }]
      };
    case "checkTask": //modifie
      return {
        ...state, //copie l'ensemble de l'etat
        tasks: state.tasks.map((task) =>
          task.id === action.value ? { ...task, ok: !task.ok } : task
        )
      };
    case "suppTask":
      return {
        ...state, //copie l'ensemble de l'etat 
        tasks: state.tasks.filter((task) => task.id !== action.value)
      };
    case "nom": // modifie prop du nom de form
      return { ...state, //copie l'ensemble de l'etat
        form: { ...state.form, nom: action.value } };
    case "email": // modifie prop l'email de form
      return { ...state, //copie l'ensemble de l'etat
        form: { ...state.form, email: action.value } };
    case "form": // modifie la prop valide de form
      return { ...state, //copie l'ensemble de l'etat
        form: { ...state.form, valide: true } };
    case "addProduit": //ajoute un prod au panier
      const indexProduit = state.panier.findIndex((item) => item.produit.id === action.value.id); //recher l'index du produit dans le panier
      if (indexProduit >= 0) { //si index >= 0 dans
        const newPanier = [...state.panier]; //creeation d'une copier du panier
        newPanier[indexProduit].quantite += 1; // puis il rajoute 1 quantite
        return { ...state, //copie l'ensemble de l'etat
          panier: newPanier }; // il remet à jour l'etat
      } else { //si produit pas present dans panier 
        return { ...state, //copie l'ensemble de l'etat
          panier: [...state.panier, { produit: action.value, quantite: 1 }] }; 
      }
    case "suppProduit": //supp produit du panier
      return {
        ...state, //copie l'ensemble de l'etat
        panier: state.panier.filter((item) => item.produit.id !== action.value) // new tab sur celui exisatan
      };
    case "deduProduit": //supp 1 quantité du panier
      const produitIndex = state.panier.findIndex((item) => item.produit.id === action.value); //recup l'index du produit qui correspond à l'id
      if (state.panier[produitIndex].quantite === 1) { //si quantite = 1
        return {
          ...state, //copie l'ensemble de l'etat
          panier: state.panier.filter((item) => item.produit.id !== action.value) //panier filtré
        };
      } else { //sinon
        const newPanier = [...state.panier]; //copie du panier
        newPanier[produitIndex].quantite -= 1; //on enleve une quantite
        return { ...state, panier: newPanier }; //le nex panier
      }
    default:
      return state; //etat sans changemnt
  }
};

// creation et exportation du composant AppContextProvider
export const AppContextProvider = ({ children }) => {
  //creation d'un etat
  const [state, setState] = useReducer(reducer, { //reducer permet les modif de l'etat 
    //etat inital = objt
    count: 0,
    tasks: [],
    form: {
      nom: "",
      email: "",
      valide: false
    },
    panier: []
  });

  return <AppContext.Provider value={{ ...state, setState }}>{children}</AppContext.Provider>;
};