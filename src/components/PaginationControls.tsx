type PaginationProps = {
  handlePrevious: () => void
  handleNext: () => void
  pageSize: number
};

export default function PaginationContols (props: Readonly<PaginationProps>) {
  const { handleNext, handlePrevious, pageSize } = props;
  return (
    <nav aria-label="Blog list navigation">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button 
            className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 
            onClick={handlePrevious}
          >
            Previous
          </button>
        </li>
        <li>
          <button 
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 
            onClick={handleNext}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}