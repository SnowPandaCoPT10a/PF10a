import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions/index";
import Banner from "./banner/Banner";
import Categorias from "./categorias/Categorias";
import Destacados from "./destacados/Destacados";
import Marcas from "./marcas/Marcas";
import "./style.css";
import { Link } from "react-router-dom";

const tienda = () => {
  const datos = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const scroll = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };
  return (
    <div className="tiendaCont p-0 m-0 text-center">
      <Banner />
      <Categorias scroll={scroll} />
      <Destacados datos={datos} />
      <Marcas scroll={scroll} datos={datos} />
      <button><Link 
              key="allProducts"
              to={`/Products/`}
              className="text-center mt-5 text-secondary"
              onClick={() => scroll()}
            >SHOW ALL PRODUCTS</Link></button>
    </div>
  );
};

export default tienda;
