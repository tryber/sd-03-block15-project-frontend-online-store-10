import React from 'react';
import { Link } from 'react-router-dom';

class CardCategories extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Link onClick={() => this.props.up(this.props.id)} className="movie-card-rating" data-testid="category" to={`/${this.props.id}`}>{this.props.categorie}</Link>
);
  }
}

export default CardCategories;