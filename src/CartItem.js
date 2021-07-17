import React from 'react';

class CartItem extends React.Component{
    //state
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
    }
    this.increaseQuantity=this.increaseQuantity.bind(this);
    //eventListener - onclick function
    increaseQuantity(){
        console.log('this.state',this.state);
    }
    
    render(){
        //want price,qty,title form this.state
        const {price,title,qty}=this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} alt="Item image"/>
                </div>
                <div className='right-block'>
                    {/* <div style={{fontSize:25}}>{this.state.title}</div> */}
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className='action-icons' 
                            src="https://image.flaticon.com/icons/png/512/1828/1828926.png"
                            /*onClick={this.increaseQuantity.bind(this)}*/
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease"
                            className='action-icons' 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        />
                        <img 
                            alt="delete" 
                            className='action-icons' 
                            src="https://image.flaticon.com/icons/png/512/3096/3096673.png"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
/* Styling using object */
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;