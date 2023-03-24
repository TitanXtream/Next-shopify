import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { SortBy } from "lib/graphql/collection/getCollectionWithProducts";

type Props = {
  sortBy: SortBy;
};

const FilterToolbar: React.FC<Props> = ({ sortBy }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    location.search = `?sort_by=${value}`;
  };

  return (
    <div className="filter-toolbar border-t border-b border-gray--600">
      <div className="filter-toolbar__inner container flex h-full items-center">
        <div
          className="filter-toolbar__sort text-left"
          style={{ flex: "1 1 33%", lineHeight: "3.5rem" }}
        >
          <label
            htmlFor="sort-by"
            className="block lg:inline-block mt-2 mr-4 text-xs text-gray-600"
          >
            Sort by
          </label>
          <select
            className="bg-transparent cursor-pointer pr-4 py-2 text-base text-gray-700"
            id="sort-by"
            value={sortBy}
            onChange={handleChange}
          >
            <option value="manual">Recomendations</option>
            <option value="best-selling">Best Selling</option>
            <option value="title-ascending">Title Ascending, A-Z</option>
            <option value="title-descending">Title Descending, Z-A</option>
            <option value="price-ascending">Price Ascending</option>
            <option value="price-descending">Price Descending</option>
            <option value="created-ascending">Created Ascending</option>
            <option value="created-descending">Created Descending</option>
          </select>
        </div>
        {/* <div
          className="filter-toolbar__total flex-initial text-xs text-gray-600"
          style={{ lineHeight: "3.5rem" }}
        >
          {String(total)}products
        </div> */}
      </div>
    </div>
  );
};

export default FilterToolbar;
