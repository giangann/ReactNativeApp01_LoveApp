import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input, Header } from "react-native-elements";

const Page = styled(View)`
  padding: 40px 40px 40px 40px;
`;

const Container = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Btn = styled(TouchableOpacity) <{color?: string}>`
  background-color: ${p => p.color || 'red'}
  flex: 45% 0 0;
  border-radius: 5px;
  height: 150px;
  margin: 10px 0px 10px 0px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const GirlScreen: React.FC = () => {
  return (
    <View>
      <Header
        centerComponent={{ text: "Cho bạn Nữ", style: { color: "#fff" } }}
      />
      <Page>
        <Text>Cho bạn Nữ</Text>
        <Input
          placeholder="Nhập mã số:"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
        />
        <Button title="Xác nhận" />

        <Container>
          <Btn color = "white">
            <Text>Hungry </Text>
          </Btn>

          <Btn color = "white">
            <Text>Milk Tea </Text>
          </Btn>
        </Container>

        <Container>
          <Btn color = "white">
            <Text>Pick me up </Text>
          </Btn>

          <Btn color = "white">
            <Text>Call me </Text>
          </Btn>
        </Container>
      </Page>
    </View>
  );
};

export default GirlScreen;
