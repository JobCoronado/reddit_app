//Dependencies
import React, { useContext } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

//Components
import TopTabBar from "../../components/TopTabBar";
import PostsPage from "../PostsPage";

//Routes Tab
import { homeNew } from "../../routes";
import { homeTop } from "../../routes";
import { homePopular } from "../../routes";
import { homeHot } from "../../routes";
import { RefreshContext } from "../../context/reloadPost";

//Styles
import { styles } from "./style";

const HomePage = () => {
  const { isRefreshing, onChangeRefreshStatus, onRefresh, refresh } =
    useContext(RefreshContext);

  const onHandledRefresh = () => {
    onChangeRefreshStatus(true);
    onRefresh();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onHandledRefresh}
          />
        }
      >
        <TopTabBar
          screens={[
            { component: PostsPage, label: "New", route: homeNew },
            { component: PostsPage, label: "Top", route: homeTop },
            { component: PostsPage, label: "Popular", route: homePopular },
            { component: PostsPage, label: "Hot", route: homeHot },
          ]}
          initialRouteName={"Home"}
        />
      </ScrollView>
    </View>
  );
};

export default HomePage;
