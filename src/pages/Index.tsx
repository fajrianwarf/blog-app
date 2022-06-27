import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlog } from '../api';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [blogData, setBlogData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(4);

  useEffect(() => {
    if (!localStorage.getItem('blog-token')) {
      navigate('/login');
    }

    getBlog(setBlogData, setLoading);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (
    e: React.ChangeEvent<HTMLInputElement>,
    pageNumber: number
  ) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const handleClick = (item: any) => {
    navigate('/detail', { state: item });
  };

  return (
    <div className='min-h-screen bg-sky-200 '>
      <Navbar />
      <div className='container mx-auto px-4 py-5'>
        <h1 className='text-4xl text-center'>Blog List</h1>
        <div className='bg-white rounded-md px-8 py-6 mt-4'>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'>
            {loading && <p>Loading....</p>}
            {currentPosts.map((item: any) => (
              <div
                key={item.id}
                className='overflow-hidden border-2 border-blue-500 rounded-lg shadow-lg px-4 py-2'
              >
                <div className='flex items-center justify-between mb-1'>
                  <div>
                    Author :{' '}
                    <span>
                      <a
                        href={item.author.url}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-blue-600 hover:font-bold'
                      >
                        {item.author.displayName}
                      </a>
                    </span>
                  </div>
                  <button
                    className='px-2 py-1 border bg-blue-100 hover:bg-blue-300 hover:text-white rounded-md'
                    onClick={() => handleClick(item)}
                  >
                    detail
                  </button>
                </div>
                <p className='text-xl mb-2'>{item.title}</p>
                <p>replies : {item.replies.totalItems}</p>
              </div>
            ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={blogData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
