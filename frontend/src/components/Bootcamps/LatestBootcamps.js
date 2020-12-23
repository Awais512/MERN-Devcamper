import React from 'react';
import img1 from '../../img/image_1.jpg';
import img2 from '../../img/image_2.jpg';
import img3 from '../../img/image_3.jpg';
import img4 from '../../img/image_4.jpg';

const LatestBootcamps = () => {
  return (
    <>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={img1} className='card-img' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                <a href='bootcamp.html'>
                  Devworks Bootcamp
                  <span className='float-right badge badge-success'>8.8</span>
                </a>
              </h5>
              <span className='badge badge-dark mb-2'>Boston, MA</span>
              <p className='card-text'>
                Web Development, UI/UX, Mobile Development
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={img2} className='card-img' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                <a href='bootcamp.html'>
                  ModernTech Bootcamp
                  <span className='float-right badge badge-success'>7.5</span>
                </a>
              </h5>
              <span className='badge badge-dark mb-2'>Boston, MA</span>
              <p className='card-text'>
                Web Development, UI/UX, Mobile Development
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={img3} className='card-img' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                <a href='bootcamp.html'>
                  Codemasters
                  <span className='float-right badge badge-success'>9.2</span>
                </a>
              </h5>
              <span className='badge badge-dark mb-2'>Burlington, VT</span>
              <p className='card-text'>
                Web Development, Data Science, Marketing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={img4} className='card-img' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                <a href='bootcamp.html'>
                  DevCentral Bootcamp
                  <span className='float-right badge badge-success'>6.4</span>
                </a>
              </h5>
              <span className='badge badge-dark mb-2'>Kingston, RI</span>
              <p className='card-text'>
                Web Development, UI/UX, Mobile Development, Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBootcamps;
