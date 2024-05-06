
import {React,useEffect, useReducer} from 'react';
import { useParams } from 'react-router-dom';
import {getAll,getAllByTag,getAllTags, search} from '../../Services/foodService.js';
import Thumbnails from '../../Components/Thumbnails/thumbnails.js';
import Search from '../../Components/Search/Search.js';
import Tags from '../../Components/Tags/Tags.js';
import NotFound from '../../Components/NotFound/NotFound.js';
import classes from './designsPage.module.css';

const initialState={ foods:[], tags: []};

const reducer=(state, action)=>{
    switch (action.type){
        case 'FOODS_LOADED':
          return {...state, foods: action.payload };
        case 'TAGS_LOADED':
          return {...state, tags:action.payload};
        default:
            return state;
    }
};


export default function DesignsPage() {
  const [state, dispatch]= useReducer(reducer, initialState);
  const { foods,tags} = state;
  const {searchTerm,tag}=useParams();

  useEffect(()=>{
    getAllTags().then((tags) => dispatch({type:'TAGS_LOADED',payload:tags}));
    const loadFoods = tag
    ? getAllByTag(tag)
    :searchTerm
    ? search(searchTerm)
    : getAll();

    loadFoods.then((foods) => dispatch({type: 'FOODS_LOADED',payload: foods}));

  },[searchTerm,tag]);


  return(
      <div className={classes.container}>
        <div className={classes.container1}>
          <div className={classes.picture}>

          </div>
          <div className={classes.content}>
             Welcome to MD Cakes!
          </div>

        </div>

        <div className={classes.container2}>
         <Search />
        </div>
      
        <div className={classes.container3}>
          <Tags tags={tags}/>
          {foods.length === 0 && <NotFound linkText="Reset Search"/>}
          <Thumbnails foods={foods}/>
        </div>
   

      </div>

    
  );
};
