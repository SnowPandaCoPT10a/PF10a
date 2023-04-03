import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const Marcas = ({ datos, scroll }) => {
  let dataBrand = datos?.map((e) => e.brand.brandName);
  let marcas = [...new Set(dataBrand)];

  console.log(marcas);

  return (
    <div className="container">
      <h2 className="text-secondary text-center my-5">NUESTRAS MARCAS</h2>
      <div className="d-block row row-cols-4 d-flex justify-content-center lign-items-center">
        {marcas?.map((e) => (
          <Link
            onClick={() => scroll()}
            to={`/Products/${e}`}
            key={`/${e}`}
            className="py-4 text-secondary text-decoration-none rounded"
          >
            <b className="fluor fluor1 items">{e}</b>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marcas;
