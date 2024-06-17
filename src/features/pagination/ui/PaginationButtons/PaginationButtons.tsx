import { useTheme } from "@/app/providers/ThemeProvider";
import { IPaginationProps } from "../../model/types";
import styles from "./styles.module.css";

const PaginationButtons = ({
  totalPages,
  currentPage,
  handlePageClick,
  handlePreviousPage,
  handleNextPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}>
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}>
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage >= totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;
