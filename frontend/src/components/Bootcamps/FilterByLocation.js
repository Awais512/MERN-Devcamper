import React from 'react';

const FilterByLocation = () => {
  return (
    <div class='card card-body mb-4'>
      <h4 class='mb-3'>By Location</h4>
      <form>
        <div class='row'>
          <div class='col-md-6'>
            <div class='form-group'>
              <input
                type='text'
                class='form-control'
                name='miles'
                placeholder='Miles From'
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <input
                type='text'
                class='form-control'
                name='zipcode'
                placeholder='Enter Zipcode'
              />
            </div>
          </div>
        </div>
        <input
          type='submit'
          value='Find Bootcamps'
          class='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default FilterByLocation;
