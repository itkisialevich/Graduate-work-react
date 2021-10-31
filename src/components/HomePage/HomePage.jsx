import { useDispatch, useSelector } from "react-redux";
import styles from "./HomePage.module.css";
import { HomeHeader } from "../HomeHeader";
import { BoxFilter } from "../BoxFilter";
import { ModalFilter } from "../ModalFilter";
import { Card } from "../Card";
import { Footer } from "../Footer";

export function HomePage() {
  const allproducts = useSelector((state) => state.generalState.allproducts);
  const filteredProducts = useSelector(
    (state) => state.generalState.filteredProducts
  );
  const type = useSelector((state) => state.generalState.type);
  const dispatch = useDispatch();

  /*constructor(props) {
    super(props);

    this.state = {
      allproducts: productJSON,
      show: false,
    };
    this.showFilters = this.showFilters.bind(this);
  }

  onClickSearch = (text) => {
    const filteredProducts = productJSON.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase()) ||
        item.type.toLowerCase().includes(text.toLowerCase()) ||
        item.color.toLowerCase().includes(text.toLowerCase()) ||
        item.material.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ allproducts: filteredProducts });
  };

  showFilters() {
    this.setState({ show: !this.state.show });
  }
*/

  const sortReset = () => {
    dispatch({ type: "sortReset" });
  };

  const sortLowToHigh = (a, b) => {
    dispatch({ type: "sortLowToHigh", a, b });
  };

  const sortHighToLow = (a, b) => {
    dispatch({ type: "sortHighToLow", a, b });
  };

  const handleCheckboxChange = (id) => {
    dispatch({ type: "handleCheckboxChange", id });
  };

  /*addBasket = () => {};*/

  return (
    <div className={styles.wrap}>
      <HomeHeader /*onClick={onClickSearch}*/ />
      <BoxFilter
        /*showFilters={showFilters}*/
        sortLowToHigh={sortLowToHigh}
        sortHighToLow={sortHighToLow}
        sortReset={sortReset}
      />
      {/*{state.show ? <ModalFilter /> : null}*/}
      <div className={styles.main}>
        {allproducts.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              checked={item.checked}
              isFavourite={item.isFavourite}
              /*addBasket={addBasket}*/
              handleCheckboxChange={handleCheckboxChange}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
