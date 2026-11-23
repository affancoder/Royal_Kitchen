import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

export default function OrderProceed() {
  const { id, name, description, price, mode, quantity } =
    useLocalSearchParams();

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const itemPrice = Number(price || 0);
  const itemQuantity = Number(quantity || 1);
  const total = itemPrice * itemQuantity;

  const placeOrder = () => {
    if (!address.trim()) {
      Alert.alert("Address Required", "Please enter your delivery address.");
      return;
    }

    if (phone.trim().length < 10) {
      Alert.alert("Invalid Phone Number", "Please enter a valid phone number.");
      return;
    }

    router.push({
      pathname: "/pages/orderconfirmed",
      params: {
        id: String(id || ""),
        name: String(name || ""),
        price: String(itemPrice),
        quantity: String(itemQuantity),
        total: String(total),
        address: address.trim(),
        phone: phone.trim(),
        paymentMethod,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={23} color={GOLD} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>CHECKOUT</Text>
          <View style={{ width: 42 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Text style={styles.pageTitle}>Complete Your Order</Text>
          <Text style={styles.subtitle}>
            Review your order and provide delivery details.
          </Text>

          {/* ORDER SUMMARY */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Order Summary</Text>

            <View style={styles.orderRow}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemQuantity}>
                  Quantity: {itemQuantity}
                </Text>
              </View>

              <Text style={styles.itemPrice}>₹{total}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.mutedText}>Price per item</Text>
              <Text style={styles.valueText}>₹{itemPrice}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.mutedText}>Quantity</Text>
              <Text style={styles.valueText}>{itemQuantity}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalPrice}>₹{total}</Text>
            </View>
          </View>

          {/* DELIVERY DETAILS */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Delivery Details</Text>

            <Text style={styles.inputLabel}>Delivery Address</Text>
            <TextInput
              style={[styles.input, styles.addressInput]}
              placeholder="Enter your complete delivery address"
              placeholderTextColor="#777"
              value={address}
              onChangeText={setAddress}
              multiline
              textAlignVertical="top"
            />

            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#777"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>

          {/* PAYMENT METHOD */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Payment Method</Text>

            {["Cash on Delivery", "Pay Online"].map((method) => (
              <TouchableOpacity
                key={method}
                style={styles.paymentOption}
                activeOpacity={0.8}
                onPress={() => setPaymentMethod(method)}
              >
                <Ionicons
                  name={
                    method === "Cash on Delivery"
                      ? "cash-outline"
                      : "card-outline"
                  }
                  size={22}
                  color={GOLD}
                />

                <Text style={styles.paymentText}>{method}</Text>

                <View style={styles.radioOuter}>
                  {paymentMethod === method && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* PLACE ORDER */}
          <TouchableOpacity
            style={styles.placeOrderButton}
            activeOpacity={0.85}
            onPress={placeOrder}
          >
            <Text style={styles.placeOrderText}>PLACE ORDER</Text>
            <Ionicons name="arrow-forward" size={19} color={BLACK} />
          </TouchableOpacity>

          <Text style={styles.bottomNote}>
            Please check your details before placing your order.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },
  container: {
    flex: 1,
    backgroundColor: BLACK,
    marginTop: StatusBar.currentHeight || 0,
  },

  header: {
    height: 58,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#252525",
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: CARD,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: GOLD,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 2,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  pageTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },
  subtitle: {
    color: "#999999",
    fontSize: 13,
    marginTop: 2,
    marginBottom: 22,
    lineHeight: 20,
  },
  card: {
    backgroundColor: CARD,
    borderRadius: 13,
    padding: 17,
    marginBottom: 17,
    borderColor : "#cca402",
    borderWidth: 0.4,
  },
  sectionTitle: {
    color: "#cca402",
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 19,
    // textAlign : "center",
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: {
    flex: 1,
    paddingRight: 10,
  },
  itemName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  itemQuantity: {
    color: "#999999",
    fontSize: 15,
    marginTop: 4,
  },
  itemPrice: {
    color: GOLD,
    fontSize: 22,
    fontWeight: "800",
  },
  divider: {
    height: 1,
    backgroundColor: "#333333",
    marginVertical: 17,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  mutedText: {
    color: "#999999",
    fontSize: 14,
  },
  valueText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  totalLabel: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
  totalPrice: {
    color: GOLD,
    fontSize: 21,
    fontWeight: "800",
  },
  inputLabel: {
    color: "#CCCCCC",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 9,
    marginTop: 5,
  },
  input: {
    backgroundColor: "#202020",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingVertical: 13,
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 17,
  },
  addressInput: {
    height: 95,
  },
  paymentOption: {
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#292929",
    gap: 10,
  },
  paymentText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
  },
  radioOuter: {
    width: 19,
    height: 19,
    borderWidth: 1.5,
    borderColor: GOLD,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 10,
    height: 10,
    backgroundColor: GOLD,
    borderRadius: 5,
  },
  placeOrderButton: {
    height: 54,
    backgroundColor: GOLD,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 5,
  },
  placeOrderText: {
    color: BLACK,
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1,
  },
  bottomNote: {
    color: "#777777",
    fontSize: 11,
    textAlign: "center",
    marginTop: 15,
  },
});
