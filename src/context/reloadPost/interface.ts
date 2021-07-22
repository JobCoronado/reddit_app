export type RefreshContextState = {
  refresh: number;
  isRefreshing: boolean;
  onRefresh: () => void;
  onChangeRefreshStatus: (status: boolean) => void;
};
