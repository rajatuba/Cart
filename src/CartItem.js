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
    /* 2nd way of bind */
    //this.increaseQuantity=this.increaseQuantity.bind(this);
        //this.testing();
    }

    // Promises - setState
    /*testing(){
        const promise=new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve('done');
            },5000);
        });
        promise.then(()=>{
            //setState acts like asynchronous call
            //this.setState({qty:100});

            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});

            console.log('state',this.state);
        });
    }*/
    
    //eventListener - onclick function
    //when use 1st and 2nd way to bindS
    /*
    increaseQuantity() {
        console.log('this.state',this.state);
    }
    */
    /* 3rd way to bind - use arrow function */
    increaseQuantity = () =>{
        //this.state.qty +=1;
        //console.log('this.state',this.state);

        //setState form 1 -> giving it object
        /*this.setState({
            qty:this.state.qty+1
        });*/

        //setState form2 -> function form (if prev state required)
        this.setState((prevState) => {
            return {
                qty:prevState.qty+1
            }
        }, () => {
            //callback
            console.log('this.state',this.state);
        });
    }

    decreaseQuantity = () =>{
        const {qty}=this.state;
        if(qty==0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty:prevState.qty-1
            }
        });
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
                            //1st way of binding
                            /*onClick={this.increaseQuantity.bind(this)}*/
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease"
                            className='action-icons' 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            onClick={this.decreaseQuantity}
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