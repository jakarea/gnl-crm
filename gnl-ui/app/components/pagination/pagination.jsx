import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function Pagination({ totalEntries, entriesPerPage, currentPage, onPageChange }) {

    const pathname = usePathname();
    // const { replace } = useRouter();

    // const router = useRouter();
    
	// const searchParams = useSearchParams();
    // const params = new URLSearchParams(searchParams);

    // replace(`${pathname}?${params.toString()}`);

    const totalPages = Math.ceil(totalEntries / entriesPerPage);

    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };
    


    return (
        <div className="pagination-section">
            <nav className="mt-4" aria-label="...">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a className="page-link page-link-left" onClick={() => onPageChange(currentPage - 1)}>
                            <i className="fa-solid fa-angle-left"></i>
                        </a>
                    </li>
                    {generatePageNumbers().map((page, index) => (
                        <li key={index} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <Link href={{ pathname, query: { page } }} passHref className="page-link" onClick={(e) => onPageChange(page) }>
                                {page}
                            </Link>
                            
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <a className="page-link page-link-right" onClick={() => onPageChange(currentPage + 1)}>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="pagination-text">
                <p>{`Showing ${(currentPage - 1) * entriesPerPage + 1} to ${Math.min(
                    currentPage * entriesPerPage,
                    totalEntries
                )} of ${totalEntries} entries`}</p>
            </div>
        </div>
    );
}

export default Pagination;
