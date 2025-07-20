import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, price, location }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-md font-bold">${price} / night</p>
      </div>
    </div>
  );
};

export default Card;
