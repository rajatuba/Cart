import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    //state
    constructor(){
        super();
        this.state={
            products:[
                {
                    price:999,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:999,
                    title:'Mobile Phone',
                    qty:10,
                    img:'',
                    id:2                    
                },
                {
                    price:999,
                    title:'Laptop',
                    qty:4,
                    img:'',
                    id:3                   
                }
            ]
        }
    /* 2nd way of bind */
    //this.increaseQuantity=this.increaseQuantity.bind(this);
        //this.testing();
    }

    //for increaseQuantity
    handleIncreaseQuantity=(product)=>{
        console.log('Hey please inc the qty of',product);
        const {products}=this.state;
        const index=products.indexOf(product);

        products[index].qty+=1;
        this.setState({
            //products:products
            //means same as above
            products
        })
    }

    //for decreaseQuantity
    handleDecreaseQuantity=(product)=>{
        console.log('Hey please inc the qty of',product);
        const {products}=this.state;
        const index=products.indexOf(product);

        if(products[index]==0){
            return;
        }

        products[index].qty-=1;
        this.setState({
            //products:products
            //means same as above
            products
        })
    }

    handleDeleteProduct=(id)=>{
        const {products}=this.state;

        //items will be array of products whose id !== id(delete product id) 
        const items=products.filter((item)=>item.id!==id);

        this.setState({
            products:items
        })
    }

    render(){
        const {products}=this.state;
        //const arr=[1,2,3,4,5]
        return(
            <div className="cart">
                {/*arr.map((item)=>{
                    return item+5
                })*/}

                {/* Passing props 
                <CartItem qty={1} price={99} title={"Watch"} img={''}/>
                */}

                {products.map((product)=>{
                    return (<CartItem 
                                product={product} 
                                key={product.id}
                                onIncreaseQuantity={this.handleIncreaseQuantity}
                                onDecreaseQuantity={this.handleDecreaseQuantity}                            
                                onDeleteProduct={this.handleDeleteProduct}
                            />)
                })}
            </div>
        );
    }
}
export default Cart;