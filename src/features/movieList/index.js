
import { createSlice } from '@reduxjs/toolkit';
import ListMovies from "../../assets/movie";

// list without deleted item
const getList = (list) => {
  return list.filter((el) => !el.deleted)
};

// list of categories
const getCategoriesList = (list) => {
  let categoriesList = [];
  let categoriesListRef = [];
  list.map((el) => {
    if (categoriesListRef.indexOf(el.category) === -1 && !el.deleted) {
      categoriesListRef.push(el.category);
      categoriesList.push({name: el.category});
    }
    return null;
  });
  return categoriesList;
};

/**
 * verify if movie is in categories selected
 * @param {array of category} selector 
 * @param {*item movie} item 
 */
const isCategorySelected = (selector, item) => {
  let result = false;
  selector.forEach((element) => {
    if (item.category === element.name) {
      result =  true;
    }
  });
  return result;
};

// verify listCategory when delete item
const verifyCurrentCategory = (ListCategories, currentCategories) => {
  const categoryToReturn = [];
  ListCategories.forEach((el) => {
    currentCategories.forEach((item) => {
      if (item.name === el.name) {
        categoryToReturn.push(el);
      }
    })
  });
  return categoryToReturn;
};

//get only item from current page
const listByPagination = (list, perPage, page) => {
  const ref= [];
  for (let index = page * perPage; index < (page + 1) * perPage; index++) {
    if (list[index]){
      ref.push(list[index]);
    }
  }
  return ref;
};

const movieList = createSlice(
  {
    name: "movieList",
    initialState: {
      list: ListMovies,
      refList: getList(ListMovies),
      currentList: listByPagination(getList(ListMovies), 4, 0),
      ListCategories: getCategoriesList(ListMovies),
      currentCategories: getCategoriesList(ListMovies),
      currentPage: 0,
      perPage: 4,
      totalPage: ListMovies.length / 4
    },
    reducers: {
      
      setCurrentCategory: (state, action) => {
        state.currentCategories = action.payload;
        return;
      },
      setCurrentList: (state, action) => {
        state.totalPage = state.refList.filter((el) => isCategorySelected(state.currentCategories, el)).length / state.perPage;
        state.currentList = listByPagination(state.refList.filter((el) => isCategorySelected(state.currentCategories, el)), state.perPage, state.currentPage);
        return;
      },
      setPerPage: (state, action) => {
        state.perPage = action.payload;
        state.currentPage = 0;
        return;
      },
      setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
        return;
      },
      deleteItem:(state, action) => {
        
        state.refList = getList(state.refList.map((el) => {
          if (el.id === action.payload){
            el.deleted = 1;
          }
          return el;
        }))
        state.ListCategories = getCategoriesList(state.refList);
        state.currentCategories = verifyCurrentCategory(state.ListCategories, state.currentCategories);
      },
      likeByDefault: (state, action) => {
        state.refList = state.refList.map((el) => {
          if (el.id === action.payload) {
            el.likes += 1;
          }
          return el;
        })
      },
      setMovieLike:(state, action) => {
        state.refList = state.refList.map((el) => {
          if (el.id === action.payload) {
            el.likes += 1;
            el.dislikes -= 1;
          }
          return el;
        });
      },
      setMoviedisLike:(state, action) => {
        state.refList = state.refList.map((el) => {
          if (el.id === action.payload) {
            el.likes -= 1;
            el.dislikes += 1;
          }
          return el;
        });
      }
    }
  }
);
export const { setCurrentList, setCurrentCategory, deleteItem, likeByDefault, setMovieLike, setMoviedisLike, setPerPage, setCurrentPage } = movieList.actions;
export const getRefMovieList = (state) => state.movieList.refList;
export const getCurrentMovieList = (state) => state.movieList.currentList;
export const getCurrentCategories = (state) => state.movieList.currentCategories;
export const getCategories = (state) => state.movieList.ListCategories;
export const getTotalPage = (state) => state.movieList.totalPage;
export const getPerPage = (state) => state.movieList.perPage;
export const getCurrentPage = (state) => state.movieList.currentPage;

export default movieList.reducer;