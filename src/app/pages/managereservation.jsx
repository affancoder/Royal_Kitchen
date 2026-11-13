
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#292929";

export default function ManageReservation() {
  const [reservation, setReservation] = useState({
    id: "RK202600125",
    name: "Alex Dadrio",
    guests: 4,
    date: "25 November 2026",
    time: "07:30 PM",
    table: "Table 08",
    status: "Confirmed",
    occasion: "Family Dinner",
  });

  const handleModify = () => {
    Alert.alert(
      "Modify Reservation",
      "Would you like to request a change to your reservation?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: () =>
            Alert.alert(
              "Request Received",
              "Your modification request has been noted."
            ),
        },
      ]
    );
  };

  const handleCancel = () => {
    Alert.alert(
      "Cancel Reservation",
      "Are you sure you want to cancel this reservation?",
      [
        { text: "Keep Reservation", style: "cancel" },
        {
          text: "Cancel Reservation",
          style: "destructive",
          onPress: () =>
            setReservation((prev) => ({
              ...prev,
              status: "Cancelled",
            })),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* PAGE HEADER */}
          <View style={styles.header}>
            <Text style={styles.smallHeading}>YOUR DINING EXPERIENCE</Text>
            <Text style={styles.pageTitle}>
              Manage <Text style={styles.gold}>Reservation</Text>
            </Text>
            <Text style={styles.subtitle}>
              View and manage your upcoming table reservation.
            </Text>
          </View>

          {/* RESERVATION STATUS */}
          <View style={styles.statusCard}>
            <View style={styles.statusTop}>
              <View>
                <Text style={styles.cardLabel}>RESERVATION STATUS</Text>
                <Text
                  style={[
                    styles.statusText,
                    reservation.status === "Cancelled" && styles.cancelledText,
                  ]}
                >
                  {reservation.status}
                </Text>
              </View>

              <View
                style={[
                  styles.statusIcon,
                  reservation.status === "Cancelled" && styles.cancelledIcon,
                ]}
              >
                <Ionicons
                  name={
                    reservation.status === "Confirmed"
                      ? "checkmark-circle"
                      : "close-circle"
                  }
                  size={27}
                  color={GOLD}
                />
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.bookingIdLabel}>BOOKING ID</Text>
            <Text style={styles.bookingId}>{reservation.id}</Text>
          </View>

          {/* RESERVATION DETAILS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Reservation Details</Text>

            <View style={styles.detailsCard}>
              <DetailRow
                icon="person-outline"
                label="Guest Name"
                value={reservation.name}
              />

              <DetailRow
                icon="people-outline"
                label="Number of Guests"
                value={`${reservation.guests} Guests`}
              />

              <DetailRow
                icon="calendar-outline"
                label="Reservation Date"
                value={reservation.date}
              />

              <DetailRow
                icon="time-outline"
                label="Reservation Time"
                value={reservation.time}
              />

              <DetailRow
                icon="restaurant-outline"
                label="Table"
                value={reservation.table}
              />

              <DetailRow
                icon="gift-outline"
                label="Occasion"
                value={reservation.occasion}
                last
              />
            </View>
          </View>

          {/* ACTION BUTTONS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Manage Your Booking</Text>

            <TouchableOpacity
              style={[
                styles.actionButton,
                reservation.status === "Cancelled" && styles.disabledButton,
              ]}
              onPress={handleModify}
              disabled={reservation.status === "Cancelled"}
            >
              <Ionicons name="create-outline" size={20} color={BLACK} />
              <Text style={styles.actionButtonText}>Modify Reservation</Text>
              <Ionicons name="chevron-forward" size={18} color={BLACK} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.cancelButton,
                reservation.status === "Cancelled" && styles.disabledCancel,
              ]}
              onPress={handleCancel}
              disabled={reservation.status === "Cancelled"}
            >
              <Ionicons name="close-circle-outline" size={20} color="#E57373" />
              <Text style={styles.cancelButtonText}>Cancel Reservation</Text>
            </TouchableOpacity>
          </View>

          {/* IMPORTANT INFORMATION */}
          <View style={styles.infoCard}>
            <Ionicons name="information-circle-outline" size={22} color={GOLD} />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Reservation Information</Text>
              <Text style={styles.infoText}>
                Please arrive a few minutes before your scheduled
                reservation time. For assistance with your booking,
                contact our restaurant team.
              </Text>
            </View>
          </View>

          {/* CONTACT */}
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="call-outline" size={18} color={GOLD} />
            <Text style={styles.contactButtonText}>Contact Restaurant</Text>
          </TouchableOpacity>

          <View style={styles.bottomSpace} />
        </ScrollView>

        <Navbar active="booking" />
      </View>
    </SafeAreaView>
  );
}

function DetailRow({ icon, label, value, last }) {
  return (
    <View style={[styles.detailRow, !last && styles.detailBorder]}>
      <View style={styles.detailLeft}>
        <Ionicons name={icon} size={19} color={GOLD} />
        <Text style={styles.detailLabel}>{label}</Text>
      </View>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
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
  scrollContent: {
    paddingHorizontal: 17,
    paddingBottom: 15,
  },
  gold: {
    color: GOLD,
  },

  header: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 22,
  },
  smallHeading: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  pageTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#AAAAAA",
    fontSize: 10,
    marginTop: 9,
    textAlign: "center",
  },

  statusCard: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#665500",
    borderRadius: 9,
    padding: 16,
  },
  statusTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLabel: {
    color: "#AAAAAA",
    fontSize: 8,
    letterSpacing: 1,
  },
  statusText: {
    color: "#70C98A",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 6,
  },
  cancelledText: {
    color: "#E57373",
  },
  statusIcon: {
    width: 43,
    height: 43,
    borderRadius: 25,
    backgroundColor: "#443900",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelledIcon: {
    backgroundColor: "#482222",
  },
  divider: {
    height: 1,
    backgroundColor: "#554700",
    marginVertical: 13,
  },
  bookingIdLabel: {
    color: "#AAAAAA",
    fontSize: 8,
    letterSpacing: 1,
  },
  bookingId: {
    color: GOLD,
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },

  section: {
    marginTop: 25,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 13,
  },
  detailsCard: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 9,
    paddingHorizontal: 12,
  },
  detailRow: {
    minHeight: 53,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  detailBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#444444",
  },
  detailLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    flex: 1,
  },
  detailLabel: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  detailValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "right",
    flex: 1,
  },

  actionButton: {
    backgroundColor: GOLD,
    borderRadius: 7,
    minHeight: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  actionButtonText: {
    color: BLACK,
    fontSize: 11,
    fontWeight: "bold",
    flex: 1,
  },
  disabledButton: {
    opacity: 0.4,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#A94B4B",
    borderRadius: 7,
    minHeight: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#E57373",
    fontSize: 11,
    fontWeight: "600",
  },
  disabledCancel: {
    opacity: 0.4,
  },

  infoCard: {
    flexDirection: "row",
    backgroundColor: "#191600",
    borderWidth: 1,
    borderColor: "#665500",
    borderRadius: 8,
    padding: 13,
    gap: 10,
    marginTop: 23,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    color: GOLD,
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
  },
  infoText: {
    color: "#BBBBBB",
    fontSize: 9,
    lineHeight: 15,
  },

  contactButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 9,
    marginTop: 19,
  },
  contactButtonText: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "600",
  },
  bottomSpace: {
    height: 15,
  },
});
