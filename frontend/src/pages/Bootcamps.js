import React from 'react';
import FilterByLocation from '../components/Bootcamps/FilterByLocation';
import Filters from '../components/Bootcamps/Filters';
import LatestBootcamps from '../components/Bootcamps/LatestBootcamps';
import Pagination from '../components/Bootcamps/Pagination';

const Bootcamps = () => {
  return (
    <section className='browse my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <FilterByLocation />

            <h4>Filter</h4>
            <Filters />
          </div>
          <div className='col-md-8'>
            <LatestBootcamps />
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bootcamps;
