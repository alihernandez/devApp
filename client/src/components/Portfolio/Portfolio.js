import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import itemData from './itemData';
import './Portfolio.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: 650,
    margin:'4rem',
  },
  imageList: {
    border: 'solid',
    width: 725,
    height: 650,
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

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Previous Projects</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            
            <ImageListItemBar
              title={item.title}
              subtitle={<Button variant="contained" color="primary" href={item.link}>
              Link
            </Button>}
              link={<Button variant="contained" color="primary" href="#contained-buttons">
              Link
            </Button>}
              
            />
            <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}