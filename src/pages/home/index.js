import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  getRefMovieList,
  getCurrentMovieList,
  getCurrentCategories,
  getPerPage,
  getCategories,
  getCurrentPage,
  getTotalPage,
  setCurrentList,
  setCurrentCategory,
  setPerPage,
  setCurrentPage
   } from "../../features/movieList";
import MovieItem from "../../components/MovieItem";
import { Multiselect } from 'multiselect-react-dropdown';
import ReactPaginate from 'react-paginate';
import StyledHome from "./StyledHome";

const Home = () => {
  const movieListRef = useSelector(getRefMovieList);
  const movieList = useSelector(getCurrentMovieList);
  const currentCategory = useSelector(getCurrentCategories);
  const categoriesList = useSelector(getCategories);
  const perPage = useSelector(getPerPage);
  const totalPage = useSelector(getTotalPage);
  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentList());
  }, [movieListRef, currentCategory, perPage, currentPage, dispatch])

   return(
     <React.Fragment>
      <Multiselect
        options={categoriesList}
        selectedValues={currentCategory}
        onSelect={(list) => dispatch(setCurrentCategory(list))}
        onRemove={(list) => dispatch(setCurrentCategory(list))}
        displayValue="name"
      />
       <StyledHome className="home-container">
        <div className="row start-xs">
          {movieList.map((el) => {
            return (<MovieItem key={el.id} item={el}/>)
          })}
        </div>
        <div id="react-paginate" className="row center-xs">
          <ReactPaginate
            pageCount={totalPage}
            pageRangeDisplayed={null}
            previousLabel={"prec"}
            nextLabel={"suiv"}
             onPageChange={(x) => dispatch(setCurrentPage(x.selected))}
            initialPage={0}
          />
        </div>
        <div className="row center-xs end-sm">
          <div>Nombre d'item par page : </div>
          <select value={perPage} onChange={(e) => dispatch(setPerPage(e.target.value))}>
            <option value={4} label={4}></option>
            <option value={8} label={8}></option>
            <option value={12} label={12}></option>
          </select>
        </div>
      </StyledHome>
     </React.Fragment>
   );
};

export default Home;