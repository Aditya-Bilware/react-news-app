import { NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";
import Headlines from "./Headlines";
import { TbWorldShare } from "react-icons/tb";

const Navbar = ({ className, onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={`bg-dark ${className}`}>
      <Wrapper>
        <nav className="navbar">
          <div className="container-fluid">
            <h1 className="navbar-brand text-white">
              <TbWorldShare className="fw-bold mb-1 me-2" />
              News
            </h1>

            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                onSearch(searchValue.trim());
                setSearchValue("");
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />

              <Headlines />
            </form>
          </div>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navbar;
