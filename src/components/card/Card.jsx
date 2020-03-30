import React from 'react';
import { Link } from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import useAddComicStoryToCart from '../../hooks/useAddComicStoryToCart';
import './card.css';

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
    const  { checkOnCart } =  useAddComicStoryToCart();

    return (
        <>
            <Card className={classes.root}>
                <Link to={`/product-detail/${props.comic.id}`} className="card__link">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={`${props.comic.thumbnail.path}.${props.comic.thumbnail.extension}`}
                            title="Contemplative Reptile"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h6" component="h4">
                                {`${props.comic.title.substring(0, 14)}...`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    <Button
                        tosize="small"
                        variant="contained"
                        color="primary"
                        onClick={() => checkOnCart(props.comic)}
                    >
                        <ShoppingCart/> Carrinho
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
