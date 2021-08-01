import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/app';

class App extends React.Component {
  constructor(){
      super();
      this.state={
          products:[],
          loading:true
      }

      this.db=firebase.firestore();
  }

componentDidMount(){
    this.db
      .collection('products')
      .onSnapshot((snapshot)=>{
        console.log(snapshot);

        //fetching data
        snapshot.docs.map((doc)=>{
          console.log(doc.data())
        });
  
        const products=snapshot.docs.map((doc)=>{
          const data =doc.data();
          data['id']=doc.id;
          return data;
        })
  
        this.setState({
          products,
          loading:false
        })
      })
}

  //for increaseQuantity
  handleIncreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          qty:products[index].qty+1
        })
        .then(()=>{
          console.log('updated successfully');
        })
        .catch((error)=>{
          console.log('Error:',error);
        })
  }

  //for decreaseQuantity
  handleDecreaseQuantity=(product)=>{
      console.log('Hey please inc the qty of',product);
      const {products}=this.state;
      const index=products.indexOf(product);

      if(products[index].qty==0){
          return;
      }

      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          qty:products[index].qty-1
        })
        .then(()=>{
          console.log('updated successfully');
        })
        .catch((error)=>{
          console.log('Error:',error);
        })
  }

  handleDeleteProduct=(id)=>{
      const {products}=this.state;
      
      const docRef = this.db.collection('products').doc(id);
      docRef  
        .delete()
        .then(()=>{
          console.log('updated successfully');
        })
        .catch((error)=>{
          console.log('Error:',error);
        })
  }

  //for count
  getCartCount=()=>{
    const {products}=this.state;
    let count=0;

    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }

  //for total price
  getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    
    products.map((product)=>{
        cartTotal=cartTotal+(product.qty*product.price);
    });
    return cartTotal;
  }

  addProduct=()=>{
    this.db
      .collection('products')
      .add({
        img:'',
        price:900,
        qty:3,
        title:'washing machine'
      })
      .then((docRef)=>{
        console.log('Product has been added',docRef)
      })
      .catch((error)=>{
        console.log('Error :',error);
      })
  }

  render(){
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}                            
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ... </h1> }
        <div style={{padding:10,fontSize:20}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
