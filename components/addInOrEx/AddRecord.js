import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { addTransaction } from "../../reducers/transactions";

const ExpenseIncomeForm = () => {
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("");
  const [category, setcategory] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSave = async () => {
    setIsLoading(true);
    const transaction = {
      isExpense,
      amount,
      mode,
      category,
      description,
    };
    try {
      if (!amount || !mode || !category || !description) {
        Alert.alert("Incomplete Data", "Fill all the input fields.", [
          {
            text: "OK",
            onPress: () => {},
          },
        ]);
      }
      dispatch(addTransaction(transaction));
      setIsLoading(false);
      Alert.alert("Transaction Saved", "Your transaction has been saved.", [
        {
          text: "OK",
          onPress: () => {
            setAmount("");
            setMode("");
            setcategory("");
            setDescription("");
          },
        },
      ]);
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Button
            title="Expense"
            onPress={() => setIsExpense(true)}
            bgColor={isExpense ? "#06BCEE" : "#F0F0F0"}
            color={isExpense ? "white" : "grey"}
          />
          <Button
            title="Income"
            onPress={() => setIsExpense(false)}
            bgColor={!isExpense ? "#06BCEE" : "#F0F0F0"}
            color={!isExpense ? "white" : "grey"}
          />
        </View>
        <View style={{ flex: 1, gap: 20, marginVertical: 50 }}>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          {isExpense && (
            <TextInput
              style={styles.input}
              placeholder="Payment Mode"
              value={mode}
              onChangeText={(text) => setMode(text)}
            />
          )}
          {isExpense && (
            <View
              style={{
                borderRadius: 10,
                overflow: "hidden",
                marginBottom: 12,
              }}
            >
              <Picker
                selectedValue={category}
                onValueChange={(itemValue) => setcategory(itemValue)}
                style={{ backgroundColor: "white" }}
              >
                <Picker.Item label="🍕 Food" value="Food" />
                <Picker.Item label="🥕 Groceries" value="Groceries" />
                <Picker.Item label="🚌 Transport" value="Transport" />
                <Picker.Item label="🏥 Health" value="Health" />
                <Picker.Item label="🎓 Education" value="Education" />
                <Picker.Item label="👕 Clothes" value="Clothes" />
                <Picker.Item label="✏️ Others" value="Stationary" />
                <Picker.Item label="🎛️ Others" value="Others" />
              </Picker>
            </View>
          )}
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <Button
          disabled={!amount || !mode || !description ? true : false}
          title={isLoading ? "Saving..." : "Save"}
          onPress={handleSave}
          bgColor="#1E80FF"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F3F4F6",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inactiveTab: {
    color: "gray",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
});

export default ExpenseIncomeForm;

// import React, { useState } from "react";
// import { Picker } from "@react-native-picker/picker";
// import {
//   SafeAreaView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { addRecordStyles } from "./styles";
// import Button from "../Button";
// import ExpenseCategoryList from "../ExpenseCategoryList";

// export default function AddRecord() {
//   const [type, setType] = useState("expense");
//   const [mode, setMode] = useState("upi");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");

//   const renderPaymentBgColor = (item) => {
//     if (item === "UPI") {
//       return "#20bf55";
//     } else if (item === "CASH") {
//       return "#b08968";
//     } else if (item === "CARD") {
//       return "#f77f00";
//     }
//   };

//   const renderTypeBgColor = (item) => {
//     if (item === "Expense") {
//       return "#ef233c";
//     } else if (item === "Income") {
//       return "#3f8efc";
//     }
//   };

//   const onCategorySelect = (item) => {
//     setCategory(item.name);
//   };

//   const handleAddRecord = () => {};

//   return (
//     <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
//       <View style={addRecordStyles.formBox}>
//         <View style={addRecordStyles.options}>
//           {["Expense", "Income"].map((item, index) => (
//             <Text
//               style={[
//                 addRecordStyles.option,
//                 { backgroundColor: renderTypeBgColor(item) },
//               ]}
//               key={index}
//               onPress={() => setType(item)}
//             >
//               {item}
//             </Text>
//           ))}
//         </View>
//         <Text>Payment Mode</Text>
//         <View style={addRecordStyles.options}>
//           {["UPI", "CASH", "CARD"].map((item, index) => (
//             <Text
//               style={[
//                 addRecordStyles.option,
//                 { backgroundColor: renderPaymentBgColor(item) },
//               ]}
//               key={index}
//               onPress={() => setMode(item)}
//             >
//               {item}
//             </Text>
//           ))}
//         </View>
//         <TextInput
//           onChangeText={(newText) => setDescription(newText)}
//           value={description}
//           style={addRecordStyles.multiInput}
//           placeholder="Description ..."
//         />
//         <Text>Category</Text>
//         <ExpenseCategoryList
//           onCategorySelect={onCategorySelect}
//           selected={category}
//         />

//         <TouchableOpacity
//           style={addRecordStyles.saveBtn}
//           onPress={handleAddRecord}
//         >
//           <Text style={addRecordStyles.saveText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }
