import React, { Component } from "react";
import CharDetails, {Field} from "../charDetails";
import gotService from "../../services/gotService";

export default class BooksItem extends Component {
    gotService = new gotService();
    
    render() {
        return(      
      <CharDetails 
        charId={this.props.bookId}
        getData={this.gotService.getBooks}>
            <Field field='name' label='Name'/>
            <Field field='numberOfPages' label='NumberOfPages'/>
            <Field field='publiser' label='Publiser'/>
            <Field field='released' label='Released'/>   
        </CharDetails>
        )
    }
}