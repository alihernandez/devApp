import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: 650,
    margin:'4rem',
    '& > * + *': {
      marginLeft: theme.spacing(2),
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
    <div className={classes.root}>
        <h4>HTML 85%</h4>
      <CircularProgress variant="determinate" value={85} />
      <br />
      <h4>CSS 75%</h4>
      <CircularProgress variant="determinate" value={75} />
      <br />
      <h4>JavaScript 65%</h4>
      <CircularProgress variant="determinate" value={65} />
      <br />
      <h4>nodeJS 70%</h4>
      <CircularProgress variant="determinate" value={70} />
      <br />
      <h4>React JS 60%</h4>
      <CircularProgress variant="determinate" value={progress} />
    </div>
  );
}