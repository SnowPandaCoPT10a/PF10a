import React from "react";
import './Values.css';

const Values =()=>{
    return (
        <div className='wrapper'>
            <h1 className='text-center mt-5 text-secondary'>OUR VALUES</h1>
            <div className='cols'>
                {/* valor 1 */}
                <div className="col" ontouchstart="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front">
							<div className="inner">
								<p>Pasión</p>
                            	<span>por el snowboard</span>
						    </div>
					    </div>
					    <div className="back">
						    <div className="inner">
						  		<p>Nuestra pasión por este deporte se refleja en todo lo que hacemos.</p>
							</div>
						</div>
					</div>
				</div>
            	{/* valor 2 */}
            	<div className="col" ontouchstart="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front2">
							<div className="inner">
								<p>Excelencia</p>
              					<span>en la calidad</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
						  		<p>Trabajamos con los mejores fabricantes y proveedores de la industria, ofreciendo productos de alta calidad.</p>
							</div>
						</div>
					</div>
				</div>
            	{/* valor 3 */}
            	<div className="col" ontouchstart="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front3">
							<div className="inner">
								<p>Servicio</p>
              					<span>excepcional al cliente</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
						 		 <p>Asesoramiento experto y personalizado para ayudar a encontrar los productos que mejor se adapten a sus necesidades.</p>
							</div>
						</div>
					</div>
				</div>
              	{/* valor 4 */}
            	<div className="col" ontouchstart="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front4">
							<div className="inner">
								<p>Responsabilidad</p>
              					<span>social</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
						  		<p>Nos preocupamos por el impacto que nuestra empresa tiene en la comunidad y el medio ambiente. </p>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    )
}

export default Values