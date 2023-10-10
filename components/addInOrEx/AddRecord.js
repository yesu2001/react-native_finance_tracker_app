import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addRecordStyles } from "./styles";
import Button from "../Button";
import ExpenseCategoryList from "../ExpenseCategoryList";

export default function AddRecord() {
  const [type, setType] = useState("expense");
  const [mode, setMode] = useState("upi");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const renderPaymentBgColor = (item) => {
    if (item === "UPI") {
      return "#20bf55";
    } else if (item === "CASH") {
      return "#b08968";
    } else if (item === "CARD") {
      return "#f77f00";
    }
  };

  const renderTypeBgColor = (item) => {
    if (item === "Expense") {
      return "#ef233c";
    } else if (item === "Income") {
      return "#3f8efc";
    }
  };

  const onCategorySelect = (item) => {
    setCategory(item.name);
  };

  const handleAddRecord = () => {};

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={addRecordStyles.formBox}>
        <Text>Record Type</Text>
        <View style={addRecordStyles.options}>
          {["Expense", "Income"].map((item, index) => (
            <Text
              style={[
                addRecordStyles.option,
                { backgroundColor: renderTypeBgColor(item) },
              ]}
              key={index}
              onPress={() => setType(item)}
            >
              {item}
            </Text>
          ))}
        </View>
        <Text>Payment Mode</Text>
        <View style={addRecordStyles.options}>
          {["UPI", "CASH", "CARD"].map((item, index) => (
            <Text
              style={[
                addRecordStyles.option,
                { backgroundColor: renderPaymentBgColor(item) },
              ]}
              key={index}
              onPress={() => setMode(item)}
            >
              {item}
            </Text>
          ))}
        </View>
        <TextInput
          onChangeText={(newText) => setDescription(newText)}
          value={description}
          style={addRecordStyles.multiInput}
          placeholder="Description ..."
        />
        <Text>Category</Text>
        <ExpenseCategoryList
          onCategorySelect={onCategorySelect}
          selected={category}
        />

        <TouchableOpacity
          style={addRecordStyles.saveBtn}
          onPress={handleAddRecord}
        >
          <Text style={addRecordStyles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
