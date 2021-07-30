import React from 'react';

//class Navbar extends React.Component{
    //as there is no state we can use function instead of class
const Navbar=(props)=>{
        return (           
            <div style={styles.nav}>
               <div style={styles.cartIconContainer}>
                   <img style={styles.cartIcon} src="https://img-premium.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1627624400~hmac=4f5c95e54c9b640637412c91daa9bd61" alt="cart-icon" />
                   <span style={styles.cartCount}>{props.count}</span>
               </div>
            </div>
        );
}
/* Styling using object */
const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }
};

export default Navbar;