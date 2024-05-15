import React from "react";
import "./RightSide.css";
import { User } from "../interfaces/IUsers";
import { SkeletonLoader } from "../Components/Skeleton/SkeletonLoader";
interface UserInfoProps {
  User: User | undefined;
}
export const RightSide: React.FC<UserInfoProps> = ({ User }) => {
  return (
    <div className="RightSide">
      {User ? (
        <div className="UserInfo">
          {" "}
          <img
            className="UserAvatar"
            src={User.picture.large}
            loading="lazy"
          ></img>
          <h3 className="UserName">
            {User.name.title + " " + User.name.first + " " + User.name.last}
          </h3>
          <p>
            Адрес: <span>{" " + User.location.city}</span>
          </p>
          <p>
            Email:<span>{User.email}</span>
          </p>
          <p>
            Телефон:<span>{"  " + User.phone}</span>
          </p>
          <p>
            Дата рождения:
            <span>
              {"  " + String(new Date(User.dob.date).toLocaleDateString())}
            </span>
          </p>
        </div>
      ) : (
        <SkeletonLoader
          Rows={4}
          RowsWidth={[90, 70, 80, 60]}
          Avatar={true}
        ></SkeletonLoader>
      )}
    </div>
  );
};
