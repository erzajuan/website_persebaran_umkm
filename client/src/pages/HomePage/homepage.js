import MainNavbar from "../../components/navbar";
import React, { useState } from "react";
import { Pagination } from 'react-bootstrap';

const HomePage = (props) => {
  const { loginCbHandler } = props;
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 9;
  // const length = 12

  const data = [
    {
      id: 1,
      name: 'nama 1',
      location: 'loc1',
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: 'https://picsum.photos/200/200?random=1',
    },
    {
      id: 2,
      name: 'nama 2',
      location: 'loc2',
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: 'https://picsum.photos/200/200?random=2',
    },

  ];

  // Calculate total number of pages based on number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Filter albums to display based on current active page
  const filteredDatas = data.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <>
      <MainNavbar loginCbHandler={loginCbHandler}></MainNavbar>
      <h1 className="text-center">Homepage</h1>
      <div class="album py-5 bg-light">
        <div class="container ">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {filteredDatas.map((x, i) => (
              <div class="col">
                <div class="card shadow-sm">
                  <img  src={x.image} alt={x.name} style={{width:"100%" , height:225}}/>

                  <div class="card-body">
                    <h3 class="card-name"> {x.name}</h3>
                    <p class="card-text">
                    {x.description}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">Locations: {x.location} </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 container d-flex justify-content-center">
        <Pagination>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === activePage}
            onClick={() => setActivePage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
      </div>
      </div>
      
    </>
  );
};

export default HomePage;
