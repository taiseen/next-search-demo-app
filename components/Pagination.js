import React from 'react'

// this component is responsible only for 
// 1. displaying page number by box style...
// 2. send the number, that user click...


const Pagination = ({ totalData, dataPerPage, pageNumberClick }) => {

    const pageNumber = []
    const totalPages = Math.ceil(totalData / dataPerPage);

    for (let i = 0; i < totalPages; i++) {
        pageNumber.push(i + 1)
    }

    return (
        <ul className='pagination'>
            {
                pageNumber.map(number => (
                    <li
                        key={number}
                        className='pageBox'
                        onClick={() => pageNumberClick(number)}
                    >
                        {number}
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination