import { useDispatch, useSelector } from "react-redux";
import styles from "./HomePage.module.css";
import { HomeHeader } from "../HomeHeader";
import { BoxFilter } from "../BoxFilter";
import { ModalFilter } from "../ModalFilter";
import { Card } from "../Card";
import { Footer } from "../Footer";

export function HomePage() {
  //const allproducts = useSelector((state) => state.generalState.allproducts);
  const filteredProducts = useSelector(
    (state) => state.generalState.filteredProducts
  );
  const show = useSelector((state) => state.generalState.show);
  //const type = useSelector((state) => state.generalState.type);
  const dispatch = useDispatch();

  const onClickSearch = (text) => {
    dispatch({ type: "onClickSearch", text });
  };

  const showFilters = () => {
    dispatch({ type: "showFilters" });
  };

  const sortReset = () => {
    dispatch({ type: "sortReset" });
  };

  const sortLowToHigh = () => {
    dispatch({ type: "sortLowToHigh" });
  };

  const sortHighToLow = () => {
    dispatch({ type: "sortHighToLow" });
  };

  const handleCheckboxChange = (id) => {
    dispatch({ type: "handleCheckboxChange", id });
  };

  const addBasket = (id) => {
    dispatch({ type: "addBasket", id });
  };

  return (
    <div className={styles.wrap}>
      <HomeHeader onClick={onClickSearch} />
      <BoxFilter
        showFilters={showFilters}
        sortLowToHigh={sortLowToHigh}
        sortHighToLow={sortHighToLow}
        sortReset={sortReset}
      />
      {show ? <ModalFilter /> : null}
      <div className={styles.main}>
        {filteredProducts.map((item) => {
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
              addBasket={addBasket}
              handleCheckboxChange={handleCheckboxChange}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
