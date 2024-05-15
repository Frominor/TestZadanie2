import React from "react";
import "./TableUser.css";
import { User } from "../../interfaces/IUsers";
interface TableHTMLAttributes {
  name: string;
  age: string;
  country: string;
  index: number;
  SetUser: (item: User) => void;
  item: User;
}
export const TableUser: React.FC<TableHTMLAttributes> = ({
  name,
  country,
  age,
  SetUser,
  index,
  item,
}) => {
  const [IsClicked, SetIsClicked] = React.useState<boolean>(false);
  console.log(IsClicked);
  return (
    <tr
      key={index}
      tabIndex={1}
      style={{ opacity: IsClicked ? 0.5 : 1 }}
      onClick={() => {
        SetUser(item);
        SetIsClicked(true);
      }}
    >
      <td style={{ width: 5 + "%" }}>{index}</td>
      <td style={{ width: 30 + "%" }}>{name}</td>
      <td style={{ width: 15 + "%" }}>{item.gender}</td>
      <td style={{ width: 15 + "%" }}>{country}</td>
      <td style={{ width: 15 + "%" }}>{age}</td>
    </tr>
  );
};
