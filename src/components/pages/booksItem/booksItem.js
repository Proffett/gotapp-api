import React, { Component } from "react";
// import { Col, Row } from "reactstrap";
import ItemDetails, { Field } from "../../itemDetails";
import gotService from "../../../services/service";
// import Spinner from '../../spinner'
export default class BooksItem extends Component {
                 gotService = new gotService();
                 state = {
                   selectedBook: 3,
                   error: false,
                   loading: true
                 };

                 render() 
                 {
                   return (
                     <ItemDetails
                       itemId={this.props.bookId}
                       getData={this.gotService.getBook}
                     >
                       <Field field="numberOfPages" label="NumberOfPages" />
                       <Field field="publisher" label="Publisher" />
                       <Field field="released" label="Released" />
                     </ItemDetails>
                   )
                 }
               }
