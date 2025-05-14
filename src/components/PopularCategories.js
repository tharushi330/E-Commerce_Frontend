import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/PopularCategories.css';

import giftPackImg from '../assets/giftpack.JPG'
import flowerImg from '../assets/flowers.JPG'
import cakesImg from '../assets/cakes.JPG'
import toysImg from '../assets/toys.JPG'

const categories = [
  {
    name: 'Gift Pack',
    image: giftPackImg,
  },
  {
    name: 'Flowers',
    image: flowerImg,
  },
  {
    name: 'Cakes',
    image: cakesImg,
  },
  {
    name: 'Toys',
    image: toysImg,
  },
];

const PopularCategories = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">POPULAR CATEGORIES</h2>
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="row g-0 h-100">
                <div className="col-6">
                  <img src={cat.image} alt={cat.name} className="img-fluid h-100 w-100 object-fit-cover" />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center bg-success text-white p-3">
                  <h4>{cat.name}</h4>
                  <a href="#" className="text-white text-decoration-underline mt-2">SHOP NOW →</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
