import { React, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAll, getAllByTag, getAllTags, search } from '../../Services/foodService.js';
import Thumbnails from '../../Components/Thumbnails/thumbnails.js';
import Search from '../../Components/Search/Search.js';
import Tags from '../../Components/Tags/Tags.js';
import NotFound from '../../Components/NotFound/NotFound.js';
import classes from './designsPage.module.css';

const initialState = { foods: [], tags: [] };


const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    case 'TAGS_LOADED':
      // Sort tags alphabetically to maintain consistent order
      const sortedTags = [...action.payload].sort((a, b) => a.name.localeCompare(b.name));
      return { ...state, tags: sortedTags };
    default:
      return state;
  }
};

export default function DesignsPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTag, setActiveTag] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getAllTags().then((tags) => dispatch({ type: 'TAGS_LOADED', payload: tags }));
    
    const loadFoods = tag
      ? getAllByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();

    loadFoods.then((foods) => {
      dispatch({ type: 'FOODS_LOADED', payload: foods });
      setIsLoading(false);
    });
  }, [searchTerm, tag]);

  const handleTagClick = (tagName) => {
    setActiveTag(tagName === activeTag ? null : tagName);
  };

  return (
    <div className={classes.container}>
      {/* Hero Banner */}
      <section className={classes.heroBanner}>
        <div className={classes.heroContent}>
          <h1 className={classes.heroTitle}>Our Cake Collection</h1>
          <p className={classes.heroSubtitle}>
            Discover our handcrafted cakes made with premium ingredients and artistic flair
          </p>
        </div>
        <div className={classes.heroOverlay}></div>
        <div className={classes.heroImage}></div>
      </section>

      {/* Search Section */}
      <section className={classes.searchSection}>
        <div className={classes.searchContainer}>
          <Search />
        </div>
      </section>

      {/* Tags Filter */}
      <section className={classes.tagsSection}>
        <div className={classes.tagsContainer}>
          <h2 className={classes.sectionTitle}>Browse by Category</h2>
          <Tags 
            tags={tags} 
            activeTag={activeTag}
            onTagClick={handleTagClick}
          />
        </div>
      </section>

      {/* Cake Gallery */}
      <section className={classes.gallerySection}>
        {isLoading ? (
          <div className={classes.loadingSpinner}>
            <div className={classes.spinner}></div>
            <p>Loading delicious cakes...</p>
          </div>
        ) : foods.length === 0 ? (
          <NotFound linkText="Reset Search" />
        ) : (
          <>
            <h2 className={classes.sectionTitle}>
              {tag ? `${tag} Cakes` : searchTerm ? 'Search Results' : 'All Cakes'}
            </h2>
            <Thumbnails foods={foods} />
          </>
        )}
      </section>

      {/* Call to Action */}
      <section className={classes.ctaSection}>
        <div className={classes.ctaContent}>
          <h2>Can't Find What You're Looking For?</h2>
          <p>We specialize in custom cake designs for any occasion</p>
          <button onClick={()=>navigate('/CustomPage')} className={classes.ctaButton}>Request a Custom Cake</button>
        </div>
      </section>
    </div>
  );
}