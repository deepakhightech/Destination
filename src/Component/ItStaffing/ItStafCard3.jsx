import React from 'react';

const ItstaffingCard3 = ({ image, title, description }) => {
    return (
        <div className="bg-black-100 rounded-lg overflow-hidden text-center p-5 shadow-lg shadow-gray-500/50 border border-gray-300">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-yellow-700">{title}</h3>
<p className="text-white-800 mt-2">{description}</p>
        </div>
    );
};

export default ItstaffingCard3;

