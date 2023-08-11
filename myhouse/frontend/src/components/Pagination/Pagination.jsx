import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export function Pagination({ itemsPerPage, items, ItemsComponent }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <ItemsComponent currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next &gt;"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="&lt; previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination-container"
                pageClassName="pagination-page"
                pageLinkClassName="pagination-page"
                activeClassName="pagination-active"
                activeLinkClassName="pagination-active"
                previousClassName="pagination-prev"
                previousLinkClassName="pagination-prev"
                nextClassName="pagination-next"
                nextLinkClassName="pagination-next"
                disabledClassName="pagination-disabled"
                disabledLinkClassName="pagination-disabled"
            />
        </div>
    );
}