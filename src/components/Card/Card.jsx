import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${props.character.thumbnail.path}.${props.character.thumbnail.extension}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {props.character.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small"  variant="contained" color="primary">
                    Saiba <AddIcon />
                </Button>
                <Button size="small" variant="contained" color="primary">
                    <ShoppingCart /> Carrinho
                </Button>
            </CardActions>
        </Card>
    );
}
