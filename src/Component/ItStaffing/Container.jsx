import React from 'react';

const Container = ({ heading, paragraph }) => {
    return (
        <div className="w-3/4 h-[300px] bg-gray-600 flex items-center justify-center mx-auto p-8 rounded-lg shadow-lg">
            <div className="text-center max-w-2xl px-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-950">{heading}</h1>
                <p className="text-lg text-yellow-850 mb-4">{paragraph}</p>
            </div>
        </div>
    );
};

export default Container;
