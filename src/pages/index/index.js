import Taro, { Component } from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem, Text } from "@tarojs/components";
import "./index.scss";
import packetsPending from "../../images/packets_pending.png";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          previousMargin="100px"
          nextMargin="100px"
        >
          <SwiperItem className="custom-slide">
            <Image className="item-img" src={packetsPending} />
          </SwiperItem>
          <SwiperItem className="custom-slide">
            <Image className="item-img" src={packetsPending} />
          </SwiperItem>
          <SwiperItem className="custom-slide">
            <Image className="item-img" src={packetsPending} />
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}
