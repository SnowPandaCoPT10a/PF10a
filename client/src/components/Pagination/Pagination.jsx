import React from 'react';
import './Pagination.css';


const Pagination = ({ productPerPage, filteredProducts, pagination, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination' >
        {pageNumbers &&
          pageNumbers.map((number, i) => {
            return <li className='number' key={number}>
              <button
                key={i}
                className={number === currentPage ? 'active button3' : 'button3'}
                onClick={() => {
                  {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: 'smooth'
                    })
                  }
                  pagination(number)
                }}>
                {number}
              </button>
            </li>
          })}
      </ul>
    </nav>
  );
};


export default Pagination