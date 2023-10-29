import Paper from '@mui/material/Paper';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
enableRipple(true);

const useStyles = styled((theme) => ({
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
}));

function Category() {
    // Menu items definition
    let menuItems = [
        {
            items: [
                { text: 'For Sale: Houses & Apartments', url: `/category/properties/for-sale-houses-apartments/addproduct` },
                { text: 'For Rent: Houses & Apartments', url: '/category/properties/for-rent-houses-apartments/addproduct' },
                {text: 'Lands & Plots', url:'/category/properties/lands-plots/addproduct'},
                {text: 'For Rent: Shops & Offices', url:'/category/properties/for-rent-shops-offices/addproduct'},
                {text: 'For Sale: Shops & Offices', url:'/category/properties/for-sale-shops-offices/addproduct'},
                {text: 'PG & Guest Houses', url:'/category/properties/pg-guest-houses/addproduct'}
            ],
            text: 'Properties'
        },
        {
            items: [
                { text: 'Mobile Phones', url: '/category/mobiles/mobile-phone/addproduct' },
                { text: 'Accessories', url: '/category/mobiles/accessories/addproduct' },
                { text: 'Tablets', url: '/category/mobiles/tablets/addproduct' }
            ],
            text: 'Mobiles'
        },
        {
            items: [
                { text: 'Motorcycles', url:'/category/bikes/motorcycles/addproduct' },
                { text: 'Scooters', url: '/category/bikes/scooters/addproduct' },
                { text: 'Spare Parts', url: '/category/bikes/spare-parts/addproduct' }
            ],
            text: 'Bikes'
        },
        {
            items: [
                { text: 'Televisions', url: '/category/electronics-appliances/television/addproduct' },
                { text: 'Home Theatres', url: '/category/electronics-appliances/home-theatre/addproduct' },
                { text: 'Gaming Laptops', url: '/category/electronics-appliances/gaming-laptop/addproduct' }
            ],
            text: 'Electronics & Appliances'
        },
        {
            items: [
                { text: 'Sofa & Dining', url: '/category/furniture/sofa-dining/addproduct' },
                { text: 'Beds & Wardrobes', url: '/category/furniture/beds-wardrobes/addproduct' },
                { text: 'Home Decor & Garden', url: '/category/furniture/home-decor-garden/addproduct' }
            ],
            text: 'Furniture'
        },
        {
            items: [
                { text: 'Men', url: '/category/fashion/men/addproduct' },
                { text: 'Women', url: '/category/fashion/women/addproduct' },
                { text: 'Kids', url: '/category/fashion/kids/addproduct' }
            ],
            text: 'Fashion'
        },
        {
            items: [
                { text: 'Books', url: '/category/books-sports-hobbies/books/addproduct' },
                { text: 'Gym Fitness', url: '/category/books-sports-hobbies/gym-fitness/addproduct' },
                { text: 'Musical Instruments', url: '/category/books-sports-hobbies/musical-instruments/addproduct' }
            ],
            text: 'Books,Sports,Hobbies'
        },
    ];
    function beforeItemRender(args) {
        if (args.item.url) {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    }
    
    const classes = useStyles();

    return (
    <Paper>
        <Navbar/>
        
        <Grid container marginTop={3} marginBottom={3} className={classes.centerContent}>
            <Grid item xs>
            <h5>Select Categories</h5>
                <MenuComponent 
                items={menuItems} 
                beforeItemRender={beforeItemRender} 
                orientation="Vertical" 
                cssClass="centered-menu"
                style={{width:'1280px' }} // Align menu items to the end
                />
            </Grid>
        </Grid>
        <Footer/>
    </Paper>
    );
}
export default Category;