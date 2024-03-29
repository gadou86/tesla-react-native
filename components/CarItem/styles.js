import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  icon: {
    color: "white",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12, 
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    alignItems: "center",
  },

  statusText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }


})
export default styles;