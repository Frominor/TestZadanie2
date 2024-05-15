import "./App.css";
import React from "react";
import { MainSide } from "./MainSide/MainSide";
import { RightSide } from "./RightSide/UserInfo";
import { User } from "./interfaces/IUsers";
export const App: React.FC = () => {
  const [Users, SetUsers] = React.useState<User[]>([]);
  const [IsLoading, SetIsLoading] = React.useState<boolean>(true);
  const [User, SetUser] = React.useState<User>();
  React.useEffect(() => {
    if (IsLoading) {
      fetch("https://randomuser.me/api/?results=50")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          SetUsers(res.results);
          SetIsLoading(false);
        });
    }
  }, []);
  return (
    <div className="App">
      <div className="Container">
        <MainSide Users={Users} SetUser={SetUser}></MainSide>
        <RightSide User={User}></RightSide>
      </div>
    </div>
  );
};

export default App;
