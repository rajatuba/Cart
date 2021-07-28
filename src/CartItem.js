import React from 'react';

class CartItem extends React.Component{
    
    
    render(){
        //props
        console.log('this.props',this.props)

        //want price,qty,title form this.state,now from props
        //const {price,title,qty}=this.props;
        //for product prop in Cart.js
        const {price,title,qty}=this.props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        }=this.props;
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
                            //1st way of binding
                            /*onClick={this.increaseQuantity.bind(this)}*/
                            onClick={()=> onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease"
                            className='action-icons' 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            //onClick={this.decreaseQuantity}
                            onClick={()=> onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className='action-icons' 
                            src="https://image.flaticon.com/icons/png/512/3096/3096673.png"
                            onClick={()=>onDeleteProduct(product.id)}
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