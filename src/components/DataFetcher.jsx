import { useDispatch } from "react-redux";
import {
  setAllUsers,
  setAllUsersLoading,
  setMe,
  setUserLoading,
} from "../store/dataSlice";
import { useAxios } from "../hooks/useAxios";
import { useEffect } from "react";
import { serverURL } from "../constants/constants";

export const DataFetcher = ({
  children,
  adminToken,
  adminId,
  userToken,
  isFaq,
}) => {
  const dispatch = useDispatch();

  if (adminToken) {
    if (isFaq) {
      const { data: user, loading } = useAxios(
        `${serverURL}/api/admins/getAdmin`,
        {
          headers: { authorization: `Bearer ${adminToken}` },
        }
      );

      useEffect(() => {
        if (user) dispatch(setMe(user));

        dispatch(setUserLoading(loading));
      }, [user, loading]);

      if (user) {
        return children;
      } else {
        return <h1>Login</h1>;
      }
    } else {
      const { data: user, loading: userLoading } = useAxios(
        `${serverURL}/api/admins/getAdmin`,
        {
          headers: { authorization: `Bearer ${adminToken}` },
        }
      );

      const { data: allUsers, loading: allUsersLoading } = useAxios(
        `${serverURL}/api/admins/usersList/${adminId}`,
        {
          headers: { authorization: `Bearer ${adminToken}` },
        }
      );

      useEffect(() => {
        if (allUsers) dispatch(setAllUsers(allUsers));

        if (user) dispatch(setMe(user));

        dispatch(setUserLoading(userLoading));

        dispatch(setAllUsersLoading(allUsersLoading));
      }, [allUsers, user, userLoading, allUsersLoading]);

      if (allUsers && user) {
        return children;
      } else {
        return <h1>Login</h1>;
      }
    }
  } else if (userToken) {
    const { data: user, loading } = useAxios(`${serverURL}/api/users/getUser`, {
      headers: { authorization: `Bearer ${userToken}` },
    });

    useEffect(() => {
      if (user) dispatch(setMe(user));

      dispatch(setUserLoading(loading));
    }, [user, loading]);

    if (user) {
      return children;
    } else {
      return <h1>Login</h1>;
    }
  }
};
