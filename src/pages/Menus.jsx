import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../redux/features/menu/menuSlice";

const Menus = () => {
  const { list, loading } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  // console.log(list);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>Menus</h1>
      <div className="row gap-3">
        {list.map((menu) => (
          <div className="card w-50 p-4" key={menu.id}>
            <p>id : {menu.id}</p>
            <p>name : {menu.name}</p>
            <p>price : {menu.priceFormatted}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
