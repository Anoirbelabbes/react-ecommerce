function FilterMenu({ filters, onFilterChange }) {
    return (
      <div className="border rounded p-3 shadow-sm">
        <h5>Filters</h5>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={filters.category}
            onChange={(e) => onFilterChange("category", e.target.value)}
          >
            <option value="">All</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <select
            className="form-select"
            value={filters.genre}
            onChange={(e) => onFilterChange("genre", e.target.value)}
          >
            <option value="">All</option>
            <option value="Traditional">Traditional</option>
            <option value="Natural">Natural</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <div className="d-flex">
            <input
              type="number"
              className="form-control"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => onFilterChange("minPrice", e.target.value)}
            />
            <input
              type="number"
              className="form-control ms-2"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange("maxPrice", e.target.value)}
            />
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={filters.promotion}
            onChange={(e) => onFilterChange("promotion", e.target.checked)}
          />
          <label className="form-check-label">Promotions Only</label>
        </div>
      </div>
    );
  }
  
  export default FilterMenu;
  