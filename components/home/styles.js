import { StatusBar, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  home: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#302D43",
  },
  logo: {
    width: 35,
    height: 35,
  },
  analytics: {
    marginTop: 20,
    marginBottom: 10,
    padding: 25,
    height: 250,
    borderRadius: 20,
    backgroundColor: "#302D43",
  },
  analyticsContent: {
    color: "white",
    fontSize: 15,
  },
  records: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  recordsTitle: {
    fontSize: 19,
    fontWeight: "bold",
  },
  record: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    display: "flex",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  category: {
    width: 25,
    height: 25,
  },
  description: {
    flex: 1,
    color: "black",
    fontSize: 18,
  },
  amount: {
    flex: 0.2,
    fontWeight: "bold",
  },
});
