import React from 'react';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-10'>
            <h1 className='font-bold text-7xl text-purple-500'>Error Page -404</h1>
            <p className='font-semibold text-2xl text-gray-400'>Ooops! Unable to find page...</p>
        </div>
    );
};

export default ErrorPage;