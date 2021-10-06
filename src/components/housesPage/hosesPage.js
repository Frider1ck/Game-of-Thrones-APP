import React, { Component } from "react";
import ItemList from "../itemList";
import CharDetails, {Field} from "../charDetails";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: 130,
    error: false,
  };

  componentDidCatch() {
    this.state({
      error: true,
    });
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
      onCharSelected={this.onCharSelected}
      getData={this.gotService.getAllHouses}
      renderItems={(item) => item.name}
      />
    );

    const charDetails = (
        <CharDetails 
        charId={this.state.selectedChar}
        getData={this.gotService.getHouses}>
            <Field field='name' label='Name'/>
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
            <Field field='titles' label='Titles'/>   
            <Field field='overlord' label='Overlord'/>   
            <Field field='ancestralWeapons' label='AncestralWeapons'/>   

        </CharDetails>
    )

    return(
        <RowBlock left={itemList} right={charDetails}/>
    )
    
  }
}