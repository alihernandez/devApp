import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProgressBars.css'

const useStyles = makeStyles((theme) => ({
  root: {
   
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    height: 675,
    
    
    '& > * + *': {
      // marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 60 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root} id="circles">
      <h2>Skills:</h2>
      <br />
      <br />
      <div className="cirBox"> 
      <h4>HTML</h4>
      <br />
      <h4>CSS</h4>
      <br />
      <h4>JavaScript</h4>
      <br />
      <h4>ReactJS</h4>
      <br />
      <h4>NodeJS</h4>
      <br />
      <h4>MongoDB</h4>
      <br />
      <h4>MySQL</h4>
      <br />
      </div>
      <br />
      <h4><a href="https://docs.google.com/document/d/1HfO7EoBMV-xKG8VwBZy7KIfKpd2i5ta-Kq9GEGOsHKE/edit?usp=sharing">Resume</a></h4>

    </div>
  );
}