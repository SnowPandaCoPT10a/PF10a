import React from 'react'
import './Footers.css'

const Footers = () => {
	return (
			<div>
		<footer className="footer-distributed">

      <div className="footer-right">
        <div className="footer-company-about">
        <p>
          <span>About the company</span>
          Societates sumus in solutionibus porttitor, qualitatem et excellentiam in servitii emptoris notavimus.
        </p>
        </div>
        <div className="footer-icons">

          <a className='linksF' ><FaFacebook aria-hidden="true" /></a>
          <a className='linksF' ><FaInstagram aria-hidden="true" /></a>
          <a className='linksF' ><FaLinkedin aria-hidden="true" /></a>
          <a className='linksF' ><FaGithubSquare aria-hidden="true" /></a>

        </div>
      </div>
      <div className="footer-right">
      </div>
      <div className='ctnResv'>
    <p >© ALL RIGHTS RESERVED SNOW PANDA COMPANY © 2023 | SNOWPANDA.COM </p>
    </div>
    </footer>
		</div>
	)
}


export default Footers