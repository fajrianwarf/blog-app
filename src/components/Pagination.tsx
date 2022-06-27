import React from 'react';

const Pagination: React.FC<any> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex items-center justify-center mt-4'>
      <ul className='flex items-center justify-center gap-x-2'>
        {pageNumbers.map((number, index) => (
          <li
            key={number}
            className={`${
              currentPage === index + 1 ? 'bg-green-200' : 'bg-red-100'
            } border px-2 py-1 cursor-pointer`}
            onClick={(e) => paginate(e, number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
