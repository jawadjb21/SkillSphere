import React from 'react';

export const pagination = (array, cardsPerPage) => {
    const paginationNumbers = Math.ceil(array.length / cardsPerPage);
    const paginationArr = [];
    for (let i = 1; i <= paginationNumbers; i++) {
        paginationArr.push(Number(i));
    };
    return paginationArr;
}

const paginateArray = (array, cardsPerPage, pageNumber) => {
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = pageNumber * cardsPerPage;

    return array.slice(startIndex, endIndex);
};

export default paginateArray