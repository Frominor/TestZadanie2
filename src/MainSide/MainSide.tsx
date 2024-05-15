import React from "react";
import "./MainSide.css";
import { User } from "../interfaces/IUsers";
import { TableUser } from "./TableUser/TableUser";
interface MainSideProps {
  Users: User[];
  SetUser: (item: User) => void;
}
export const MainSide: React.FC<MainSideProps> = ({ Users, SetUser }) => {
  return (
    <div className={Users.length >= 14 ? "MainSide Scroll" : "MainSide"}>
      <table>
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Имя</th>
            <th scope="col">Пол</th>
            <th scope="col">Страна</th>
            <th scope="col">Возраст</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((item: User, index) => {
            return (
              <TableUser
                SetUser={SetUser}
                age={item.dob.age}
                country={item.location.country}
                index={index}
                item={item}
                name={
                  item.name.title + " " + item.name.first + " " + item.name.last
                }
                key={index}
              ></TableUser>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
