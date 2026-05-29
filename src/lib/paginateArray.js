import React from 'react';

const paginateArray = (array, cardsPerPage, pageNumber) => {
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = pageNumber * cardsPerPage;

    return array.slice(startIndex, endIndex);
};

export default paginateArray