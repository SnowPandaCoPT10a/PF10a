import React from "react";
import "./Members.css";
import { member } from "../../data/members.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Members() {
  return (
    <div className="member" key="prueba">
      
        <h1 className="text-center mt-5 titulos-color">PROYECT</h1>
        <h2 className="aboutUsTitle" key="aboutus1">
          Soy HENRY y <span>Snow Panda</span>!
        </h2>
        <p className="textoMembers" key="text1">
          ¡Hola! Somos Pau, Facu Frias, Facu Etcheverry, Facu Gomez, Lucho, Gaston
          y Agus. Hace algunos meses nos encontramos comenzando en este bootcamp
          de Henry, algunos para dar nuestros primeros pasos en el mundo de la
          programación y otros con un poco más de conocimientos, pero todos con el
          mismo objetivo: llegar hasta aquí y que las puertas al mundo de la
          tecnología también se puedan abrir para nosotros.{" "}
        </p>
        <p className="textoMembers" key="text2">
          Es así como nace Snow Panda, un ecommerce creado íntegramente por este
          equipo como parte del proyecto final que nos propone el bootcamp. Desde
          distintas partes de Argentina, como Buenos Aires, Córdoba,Arrecifes,
          Mendoza, Bariloche y un cordobés que está en Italia, fuimos fusionando
          ideas, conocimientos y gustos personales, dando rienda suelta a nuestra
          creatividad para crear esta tienda (completamente ficticia) de productos
          de snowboard.
        </p>
        <h2 className="aboutUsTitle" key="aboutus2">
          TECNOLOGÍAS USADAS
        </h2>
        <h4 className="textoTitulo" key="title1">
          <span>FRONT END</span>
        </h4>
        <p className="textoMembers" key="text3">
          React || Redux
        </p>
        <h4 className="textoTitulo" key="title2">
          <span>BACK END</span>
        </h4>
        <p className="textoMembers" key="text4">
          NodeJS || Express || PostgreSQL || Sequelize
        </p>
        <h4 className="textoTitulo" key="title3">
          <span>DEPLOY</span>
        </h4>
        <p className="textoMembers" key="text5">
          Railway || Vercel
        </p>
        <h4 className="textoTitulo" key="title4">
          <span>OTROS</span>
        </h4>
        <p className="textoMembers" key="text6">
          auth0 || Bootstrap || SweetAlert2 || Cloudinary || MercadoPago ||
          Nodemailer || Todas las imagenes que se encuentras en la tienda fueron
          creadas por Inteligencia Artificial
        </p>      
      <div className="row mx-auto member-contain">
        {member.map((e) => (
          <div key={e.name} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={e.image} />
              </div>
              <div className="team-content">
                <h3 className="name">{e.name}</h3>
                <h4 className="title">{e.title}</h4>
              </div>
              <ul className="social">
                <li>
                  <a href={e.github} className="fa fa-google-plus">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href={e.linkedin} className="fa fa-linkedin">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
