import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 170,
      height:140
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    cardTitle: {
      fontSize: 28,
      color:'#0DAC99',
      textAlign:"center",
    },
    cardName: {
      marginBottom: 12,
      textAlign:"center",
    },
  });
  
  const Cards = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.cardTitle} gutterBottom>
              {props.number}
          </Typography>
          <Typography className={classes.cardName}>
              {props.name}
          </Typography>

        </CardContent>
      </Card>
    );
  }
 export default Cards;