import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

const BLACK = "#000000";
const GOLD = "#D6AD60";
const WHITE = "#FFFFFF";
const GRAY = "#A0A0A0";

export default function OrderConfirmed() {
  const { id, name, price, quantity, total, address, phone, paymentMethod } =
    useLocalSearchParams();

  const itemPrice = Number(price) || 0;
  const itemQuantity = Number(quantity) || 1;
  const orderTotal = Number(total) || itemPrice * itemQuantity;

  const orderReference = `RK${Date.now().toString().slice(-8)}`;

  const handleGoHome = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Success Icon */}
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={55} color={BLACK} />
          </View>

          <Text style={styles.successTitle}>Order Confirmed!</Text>

          <Text style={styles.successDescription}>
            Thank you for choosing Royal Kitchen & Caterer. Your order details
            are shown below.
          </Text>

          {/* Order Reference */}
          <View style={styles.referenceCard}>
            <Text style={styles.referenceLabel}>ORDER REFERENCE</Text>
            <Text style={styles.referenceNumber}>#{orderReference}</Text>
            <Text style={styles.referenceNote}>
              Keep this reference for your records
            </Text>
          </View>

          {/* Order Details */}
          <View style={styles.detailsCard}>
            <Text style={styles.sectionTitle}>Order Details</Text>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Food Item</Text>
              <Text style={styles.value}>{String(name || "Food Item")}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Item ID</Text>
              <Text style={styles.value}>{String(id || "N/A")}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Price</Text>
              <Text style={styles.value}>₹{itemPrice}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Quantity</Text>
              <Text style={styles.value}>{itemQuantity}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Payment Method</Text>
              <Text style={styles.value}>
                {String(paymentMethod || "Cash on Delivery")}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalAmount}>₹{orderTotal.toFixed(2)}</Text>
            </View>
          </View>

          {/* Delivery Details */}
          <View style={styles.detailsCard}>
            <Text style={styles.sectionTitle}>Delivery Details</Text>

            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={21} color={GOLD} />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Delivery Address</Text>
                <Text style={styles.infoValue}>
                  {String(address || "Not provided")}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="call-outline" size={20} color={GOLD} />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Contact Number</Text>
                <Text style={styles.infoValue}>
                  {String(phone || "Not provided")}
                </Text>
              </View>
            </View>
          </View>

          {/* Confirmation Message */}
          <View style={styles.messageBox}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color={GOLD}
            />
            <Text style={styles.messageText}>
              Your order confirmation is displayed. Our team will contact you
              regarding delivery.
            </Text>
          </View>

          {/* Back to Home */}
          <TouchableOpacity
            style={styles.homeButton}
            onPress={handleGoHome}
            activeOpacity={0.8}
          >
            <Text style={styles.homeButtonText}>BACK TO HOME</Text>
            <Ionicons name="arrow-forward" size={18} color={BLACK} />
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Thank you for ordering with Royal Kitchen & Caterer
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: BLACK,
    paddingHorizontal: 22,
    paddingTop: 45,
    paddingBottom: 35,
    alignItems: "center",
  },

  successCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: GOLD,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },

  successTitle: {
    color: WHITE,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  successDescription: {
    color: GRAY,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 28,
    paddingHorizontal: 8,
  },

  referenceCard: {
    width: "100%",
    backgroundColor: "#171717",
    borderWidth: 1,
    borderColor: "#383838",
    borderRadius: 14,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  referenceLabel: {
    color: GRAY,
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 9,
  },

  referenceNumber: {
    color: GOLD,
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  referenceNote: {
    color: GRAY,
    fontSize: 14,
    marginTop: 8,
  },

  detailsCard: {
    width: "100%",
    backgroundColor: "#171717",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#303030",
    padding: 18,
    marginBottom: 17,
  },

  sectionTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
    gap: 12,
  },

  label: {
    color: GRAY,
    fontSize: 15,
    flex: 1,
  },

  value: {
    color: WHITE,
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },

  divider: {
    height: 1,
    backgroundColor: "#383838",
    marginVertical: 5,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  totalLabel: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "bold",
  },

  totalAmount: {
    color: GOLD,
    fontSize: 22,
    fontWeight: "bold",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
    gap: 12,
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    color: GRAY,
    fontSize: 16,
    marginBottom: 5,
  },

  infoValue: {
    color: WHITE,
    fontSize: 18,
    lineHeight: 21,
  },

  messageBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#211D14",
    borderRadius: 10,
    padding: 14,
    gap: 10,
    marginBottom: 25,
  },

  messageText: {
    color: "#D6C7A9",
    fontSize: 13,
    lineHeight: 19,
    flex: 1,
  },

  homeButton: {
    width: "100%",
    height: 54,
    backgroundColor: GOLD,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  homeButtonText: {
    color: BLACK,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },

  footerText: {
    color: GRAY,
    fontSize: 12,
    textAlign: "center",
    marginTop: 24,
  },
});
