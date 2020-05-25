import React from 'react';
import { Link } from 'react-router-dom';
import CardCategories from './CardCategories';

class CategoriesHome extends React.Component {
  constructor(props){
   super(props);
 }
  render(){
    
    return (
      <div className="categories" >
         {this.props.categories.map(item => <CardCategories key={item.id} id={item.id} up={this.props.update} categorie={item.name}/>)}
      </div>
         
    );
  }

}

export default CategoriesHome;
