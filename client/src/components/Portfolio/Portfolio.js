import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Popover, Typography } from '@material-ui/core';
import itemData from './itemData';
import './Portfolio.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    // backgroundColor: hsla(0, 100%, 100%, 0.5),
    height: 650,
    margin:'4rem',
    
  },
  imageList: {
    
    width: 725,
    height: 550,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarImageList() {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
    console.log(event);
  }



  return (
    <div className='projectContains'>
    <div className={classes.root} id="projects">
      <h1 className="proTit" component="div">Previous Projects</h1>
      <ImageList rowHeight={180} className={classes.imageList} id="pro">
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            
            <ImageListItemBar
              title={item.title}
              subtitle={<Button variant="contained" color="primary" href={item.link}>
              Link
            </Button>}
            //   link={<Button variant="contained" color="primary" href="#contained-buttons">
            //   Link
            // </Button>}
            actionIcon={
              <IconButton 
              aria-label={`info about ${item.description}`} 
              className={classes.icon}
              onClick={openPopover}
              >
                <InfoIcon />
              </IconButton>
              
            }/>
            <Popover
            open={Boolean(anchor)}
            container={ImageListItemBar.title}
            anchorEl={anchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",

            }}
            aria-label={`info about ${item.description}`} 
            onClose={() => setAnchor(null)}>
            
              <Typography variant='h6'>{`${item.description}`} </Typography>
            </Popover>



            {/* <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
      
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}