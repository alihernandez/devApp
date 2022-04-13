import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './Portfolio.css';
import '../Header/flicker.css';
import itemData from './itemData.js';

export default function Portfolio() {
  return (
    <ImageList id="projects" sx={{ width: 100, height: 650 }}>
      {itemData.map((item) => (
        <ImageListItem className="projectContains" key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
         

          <ImageListItemBar
            subtitle={item.title}
            title={<a href={item.link}>Project</a>}
            position="below"
          />
          
        </ImageListItem>
        
      ))}
    </ImageList>
  );
}
