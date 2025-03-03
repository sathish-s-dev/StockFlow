export function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="flex justify-center space-x-1 dark:text-gray-800 pt-4">
      <button
        title="previous"
        type="button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {
        <div className="flex gap-2">
          {visiblePages.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:border-gray-100 ${
                currentPage === page
                  ? "bg-orange-500 text-white"
                  : "dark:text-gray-800 bg-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      }

      <button
        title="next"
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
    //   <div className="flex justify-center space-x-1 dark:text-gray-800">
    //     <button
    //       title="previous"
    //       type="button"
    //       onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    //       disabled={currentPage === 1}
    //       className="inline-flex items-center disabled:cursor-not-allowed disabled:bg-gray-300 justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
    //     >
    //       <svg
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         fill="none"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         className="w-4"
    //       >
    //         <polyline points="15 18 9 12 15 6"></polyline>
    //       </svg>
    //     </button>
    //     <button
    //       type="button"
    //       title="Page 1"
    //       className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-green-600 dark:border-green-600"
    //     >
    //       {currentPage}
    //     </button>

    //     <button
    //       title="next"
    //       type="button"
    //       onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    //       disabled={currentPage === totalPages}
    //       className="inline-flex items-center disabled:cursor-not-allowed disabled:bg-gray-300 justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
    //     >
    //       <svg
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         fill="none"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         className="w-4"
    //       >
    //         <polyline points="9 18 15 12 9 6"></polyline>
    //       </svg>
    //     </button>
    //   </div>
  );
}

const getVisiblePages = (currentPage: number, totalPages: number) => {
  if (totalPages <= 3)
    return Array.from({ length: totalPages }, (_, i) => i + 1);

  if (currentPage <= 3) return [1, 2, 3]; // Show first 3 pages
  if (currentPage >= totalPages - 2)
    return [totalPages - 2, totalPages - 1, totalPages]; // Show last 3 pages

  return [currentPage - 1, currentPage, currentPage + 1]; // Show dynamic pages
};
