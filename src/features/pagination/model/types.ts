export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}
