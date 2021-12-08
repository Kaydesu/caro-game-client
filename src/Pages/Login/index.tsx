import React, { useState, useEffect } from "react";
import { PrimaryButton as Button } from "../../components/Button";
import { Input } from "../../components";
import { LoginPageWrapper, LoginFormStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/";
import { StoreState, User } from "../../redux/types";
import { useHistory } from "react-router";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector<StoreState, User>(state => state.user);

  useEffect(() => {
    if (user.login) {
      history.push("/");
    }
  }, [user]);

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const userRegister = () => {
    dispatch(register(name))
  };

  return (
    <LoginPageWrapper>
      <LoginFormStyle>
        <div className="name-input">
          <Input type="text" value={name} onChange={handleChangeCode} />
          <Button onClick={userRegister}>
            JOIN
          </Button>
        </div>
      </LoginFormStyle>
    </LoginPageWrapper >
  );
};

export default Login;
