import React from 'react';
import classes from './tags.module.css';
import { Link } from 'react-router-dom';

export default function Tags({ tags, forFoodPage, activeTag, onTagClick }) {
  return (
    <div className={classes.tagsContainer}>
      {tags.map(tag => (
        <Link 
          key={tag.name} 
          to={`/tag/${tag.name}`}
          className={`${classes.tag} ${activeTag === tag.name ? classes.active : ''}`}
          onClick={() => onTagClick(tag.name)}
        >
          {tag.name}
          {!forFoodPage && <span className={classes.count}>({tag.count})</span>}
        </Link>
      ))}
    </div>
  );
}