//Dependencies
import React, { createContext, useState, FC } from "react";

//Types
import { RefreshContextState } from "./interface";

const contextDefaultValues: RefreshContextState = {
  refresh: 0,
  onRefresh: () => {},
  isRefreshing: false,
  onChangeRefreshStatus: () => {},
};

export const RefreshContext =
  createContext<RefreshContextState>(contextDefaultValues);

export const RefreshProvider: FC = ({ children }) => {
  const [refresh, setRefresh] = useState<number>(contextDefaultValues.refresh);
  const [isRefreshing, setIsrefreshing] = useState(false);

  const onRefresh = () => setRefresh(refresh + 1);
  const onChangeRefreshStatus = (status: boolean) => setIsrefreshing(status);

  return (
    <RefreshContext.Provider
      value={{
        refresh,
        onRefresh,
        isRefreshing,
        onChangeRefreshStatus,
      }}
    >
      {children}
    </RefreshContext.Provider>
  );
};
