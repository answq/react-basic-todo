import { useSearchParams } from "react-router";

const useFilterParmas = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter");

  return selectedFilter;
};

export default useFilterParmas;
