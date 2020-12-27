import React, { useContext } from "react";
import { ListCard } from "../../components";
import { AuthContext } from "../../components";

const View = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      {!!currentUser ? (
        <ListCard />
      ) : (
        <h1 align="center">
          Войдите в свой аккаунт или зарегистрируйте новый!
        </h1>
      )}
    </div>
  );
};

export { View };
