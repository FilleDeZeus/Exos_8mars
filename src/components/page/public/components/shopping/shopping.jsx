import React, { useContext } from "react";
import { AppContext } from "../../../../AppContext/appContext"; 

//importation du style sass
import './public/sass/shopping.scss'

// tableau d'objet des produit
const produits = [
  { id: 1, nom: "Produit 1" },
  { id: 2, nom: "Produit 2" },
  { id: 3, nom: "Produit 3" },
];

//creation et exportaion du composant Shopping
export const Shopping = () => {
  //recuperation de l'etat dans AppContext
  const { panier, setState } = useContext(AppContext);

  return (
    <div className="shopping">
      <div className="produit">
        <h2>Produits</h2>
        <ul>
          {/* creation d'un liste à partir du tab des produits */}
          {produits.map((produit) => (
            <li key={produit.id}>
              {produit.nom}{" "}
              {/* creation d'un btn pour ajouter produit*/}
              <button className="add"
              // appelle la fonction au click
                onClick={() =>
                  setState({ type: "addProduit", value: produit })
                }
              >
                ajouter au panier
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="panier">
      <h2>Panier</h2>
        <ul>
          {panier.map((item) => (
            <li key={item.produit.id}>
              {item.produit.nom} (Quantité: {item.quantit})
              {/* creation d'un btn pour enlever une qunatité produit*/}
              <button className="dedu"
              // appelle la fonction au click
                onClick={() =>
                  setState({ type: "deduProduit", value: item.produit.id })
                }
              >
                -
              </button>
              {/* creation d'un btn pour supprimer produit*/}
              <button className="supp"
              // appelle la fonction au click
                onClick={() =>
                  setState({ type: "suppProduit", value: item.produit.id })
                }
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};