import { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, FocusedStatusBar, NFTCard } from "../components/Index";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);




  const handleSearch = (value) => {
    if (value.length === 0) return setNftData(NFTData);

    const searchValue = value.toString().toLowerCase(); 

    const filteredData = NFTData.filter((item) =>{
      item.name.toLowerCase().includes(searchValue)
    });

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zindex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
