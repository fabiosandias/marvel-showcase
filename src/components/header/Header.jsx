import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch } from "react-redux";
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import useDeleteComicStoryToCart from "../../hooks/useDeleteComicStoryToCart";

import './Header.css';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textDecoration: 'none'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default props => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [totalComics, setTotalComics] = useState(0)

    const comics = useSelector(state => state.cart);

    const { deleteComicToCart } = useDeleteComicStoryToCart();

    useEffect(() => {
        setTotalComics(comics.length);

        if (totalComics === 0)
            handleClose()

    }, [comics, totalComics]);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <React.Fragment>
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar className="logo">
                        <Link to='/'>
                            <Typography className={classes.title} variant="h6" noWrap>
                               <span>Universo Marvel</span>
                            </Typography>
                        </Link>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                onClick={handleClickListItem}
                                aria-label="show 8 new mails"
                                color="inherit"
                                disabled={totalComics === 0}
                            >
                                <Badge badgeContent={totalComics} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                            <div className={classes.root}>
                                <Menu
                                    id="lock-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    { comics.map((ct, index) => (
                                        <div key={ct.id} className="todo-list">
                                            <div className="">
                                                <MenuItem
                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                    className="box-list__link"
                                                >
                                                    <Link to={`/product-detail/${ct.id}`}>
                                                        <div className="box-list">
                                                            <div className="box-list__image">
                                                                <img
                                                                    src={`${ct.thumbnail.path}.${ct.thumbnail.extension}`}
                                                                    alt={ct.title}
                                                                    className="box-list__image--img"
                                                                />
                                                            </div>
                                                            <div className="box-list__text">
                                                                {`${ct.title.substring(0, 20)}...`}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </MenuItem>
                                            </div>
                                            <div className="todo-list__delete">
                                                <IconButton
                                                    onClick={() => deleteComicToCart(index)}
                                                >
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </div>
                                        </div>
                                    ))}
                                    <MenuItem
                                        onClick={(event) => handleMenuItemClick(event)}
                                    >
                                        <div className="ButtonMenuList">
                                            <Link to="/cart">
                                                Ír para o carrinho
                                            </Link>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    );
}
