import React from 'react';

// .product - pagination {
//     margin - top: 20px;
// }

const Pagination = () => (
    <nav aria-label="Page navigation example" className="product-pagination ">
        {/** Pagination for next phase */}
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav>
)

export default Pagination