import { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from './data';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'view_module'
    };
  }

  handleSwitch = () => {
    this.setState(prevState => ({
      viewType: prevState.viewType === 'view_module' ? 'view_list' : 'view_module'
    }));
  }

  render() {
    const { viewType } = this.state;
    
    return (
      <div>
        <IconSwitch icon={viewType} onSwitch={this.handleSwitch} />
        {viewType === 'view_module' ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    );
  }
}

export default Store;