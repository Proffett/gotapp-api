import React, { useState, useEffect } from "react";
import "./itemList.css";
import ErrorMessage from "../errorMessage/errorMessage";
import Spinner from "../spinner/";
import PropTypes from "prop-types";


function ItemList({ getData, onItemSelected, renderItem, headerOfList }) {
  const [itemList, updateList] = useState([]);

  useEffect(() => {
    
    getData().then((data) => {
      updateList(data)
    }).catch(() => {return <ErrorMessage />;})

  }, []);

  function renderItems(arr) {
    return arr.map((item, i) => {
      const { id } = item;
      const label = renderItem(item);
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }
  if (!itemList) {
    return <Spinner />;
  }
  const items = renderItems(itemList);



  return (
    <>
      {headerOfList}
      <ul className="item-list list-group">{items}</ul>
    </>
  );
}
export default ItemList;

  ItemList.defaultProps = {
    onItemSelected: () => {},
  };

  ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    getData: PropTypes.func,
  };
  
// const withData = (View, getData) => {
//   return class extends Component {
//     state = {
//       data: null,
//       error: false,
//     };

//     componentDidMount() {

//     }
//     componentDidCatch() {
//       this.setState({
//         data: null,
//         error: true,
//       });
//     }

//     onError(status) {
//       this.setState({
//         data: null,
//         error: true,
//       });
//     }

//     render() {
//       const { data, error } = this.state;

//       if (error) {
//         return <ErrorMessage />;
//       }

//       if (!data) {
//         return <Spinner />;
//       }

//       return <View {...this.props} data={data} />;
//     }
//   };
// };

// const { getAllCharacters } = new GotService();
// export default withData(ItemList, getAllCharacters);
