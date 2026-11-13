
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#292929";

const initialBookings = [
  {
    id: "RK202600125",
    date: "25 November 2026",
    time: "07:30 PM",
    guests: 4,
    occasion: "Family Dinner",
    table: "Table 08",
    status: "Upcoming",
  },
  {
    id: "RK202600098",
    date: "12 October 2026",
    time: "08:00 PM",
    guests: 2,
    occasion: "Anniversary",
    table: "Table 04",
    status: "Completed",
  },
  {
    id: "RK202600071",
    date: "18 September 2026",
    time: "06:30 PM",
    guests: 5,
    occasion: "Birthday Celebration",
    table: "Table 12",
    status: "Completed",
  },
  {
    id: "RK202600045",
    date: "02 August 2026",
    time: "07:00 PM",
    guests: 3,
    occasion: "Family Dinner",
    table: "Table 06",
    status: "Cancelled",
  },
];

export default function BookingHistory() {
  const [filter, setFilter] = useState("All");

  const filteredBookings =
    filter === "All"
      ? initialBookings
      : initialBookings.filter((booking) => booking.status === filter);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.smallHeading}>YOUR ROYAL EXPERIENCE</Text>

            <Text style={styles.pageTitle}>
              Booking <Text style={styles.gold}>History</Text>
            </Text>

            <Text style={styles.subtitle}>
              View all your past and upcoming dining reservations.
            </Text>
          </View>

          {/* BOOKING SUMMARY */}
          <View style={styles.summaryContainer}>
            <SummaryCard
              icon="calendar-outline"
              number="04"
              label="Total Bookings"
            />

            <SummaryCard
              icon="checkmark-circle-outline"
              number="02"
              label="Completed"
            />

            <SummaryCard
              icon="time-outline"
              number="01"
              label="Upcoming"
            />
          </View>

          {/* FILTERS */}
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Your Reservations</Text>

            <View style={styles.filterRow}>
              {["All", "Upcoming", "Completed", "Cancelled"].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.filterButton,
                    filter === item && styles.activeFilter,
                  ]}
                  onPress={() => setFilter(item)}
                >
                  <Text
                    style={[
                      styles.filterText,
                      filter === item && styles.activeFilterText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* BOOKING LIST */}
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <View style={styles.bookingCard} key={booking.id}>
                <View style={styles.bookingTop}>
                  <View>
                    <Text style={styles.bookingIdLabel}>BOOKING ID</Text>
                    <Text style={styles.bookingId}>{booking.id}</Text>
                  </View>

                  <View
                    style={[
                      styles.statusBadge,
                      booking.status === "Completed" && styles.completedBadge,
                      booking.status === "Cancelled" && styles.cancelledBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        booking.status === "Completed" && styles.completedText,
                        booking.status === "Cancelled" && styles.cancelledText,
                      ]}
                    >
                      {booking.status}
                    </Text>
                  </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.bookingDetails}>
                  <BookingInfo
                    icon="calendar-outline"
                    label="Date"
                    value={booking.date}
                  />

                  <BookingInfo
                    icon="time-outline"
                    label="Time"
                    value={booking.time}
                  />

                  <BookingInfo
                    icon="people-outline"
                    label="Guests"
                    value={`${booking.guests} Guests`}
                  />

                  <BookingInfo
                    icon="restaurant-outline"
                    label="Table"
                    value={booking.table}
                  />
                </View>

                <View style={styles.occasionRow}>
                  <Ionicons name="gift-outline" size={17} color={GOLD} />
                  <Text style={styles.occasionText}>{booking.occasion}</Text>
                </View>

                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() =>
                    router.push("/pages/managereservation")
                  }
                >
                  <Text style={styles.detailsButtonText}>
                    View Reservation
                  </Text>
                  <Ionicons
                    name="arrow-forward"
                    size={15}
                    color={GOLD}
                  />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Ionicons
                name="calendar-clear-outline"
                size={40}
                color={GOLD}
              />
              <Text style={styles.emptyTitle}>No Bookings Found</Text>
              <Text style={styles.emptyText}>
                There are no reservations in this category.
              </Text>
            </View>
          )}

          {/* NEW BOOKING */}
          <View style={styles.newBookingCard}>
            <Text style={styles.newBookingTitle}>
              Ready for Another Royal Experience?
            </Text>

            <Text style={styles.newBookingDescription}>
              Reserve your table and enjoy another memorable dining experience.
            </Text>

            <TouchableOpacity
              style={styles.newBookingButton}
              onPress={() => router.push("/pages/booking")}
            >
              <Text style={styles.newBookingButtonText}>
                Book a Table
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* SHARED BOTTOM NAVIGATION */}
        <Navbar active="booking" />
      </View>
    </SafeAreaView>
  );
}

function SummaryCard({ icon, number, label }) {
  return (
    <View style={styles.summaryCard}>
      <Ionicons name={icon} size={20} color={GOLD} />
      <Text style={styles.summaryNumber}>{number}</Text>
      <Text style={styles.summaryLabel}>{label}</Text>
    </View>
  );
}

function BookingInfo({ icon, label, value }) {
  return (
    <View style={styles.infoItem}>
      <View style={styles.infoHeading}>
        <Ionicons name={icon} size={15} color={GOLD} />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
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
    paddingHorizontal: 16,
    paddingBottom: 15,
  },

  gold: {
    color: GOLD,
  },

  header: {
    alignItems: "center",
    paddingTop: 28,
    paddingBottom: 22,
  },

  smallHeading: {
    color: GOLD,
    fontSize: 12,
    letterSpacing: 1,
  },

  pageTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Georgia",
  },

  subtitle: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
  },

  summaryContainer: {
    flexDirection: "row",
    gap: 8,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
  },

  summaryNumber: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 6,
  },

  summaryLabel: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },

  filterSection: {
    marginTop: 27,
    marginBottom: 15,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginBottom: 13,
  },

  filterRow: {
    flexDirection: "row",
    gap: 6,
  },

  filterButton: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 3,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#665500",
    alignItems: "center",
  },

  activeFilter: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },

  filterText: {
    color: GOLD,
    fontSize: 12,
  },

  activeFilterText: {
    color: BLACK,
    fontWeight: "bold",
  },

  bookingCard: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 9,
    padding: 13,
    marginBottom: 13,
  },

  bookingTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bookingIdLabel: {
    color: "#AAAAAA",
    fontSize: 10,
    letterSpacing: 1,
  },

  bookingId: {
    color: GOLD,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },

  statusBadge: {
    backgroundColor: "#443900",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
  },

  completedBadge: {
    backgroundColor: "#173C27",
  },

  cancelledBadge: {
    backgroundColor: "#482222",
  },

  statusText: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "bold",
  },

  completedText: {
    color: "#70C98A",
  },

  cancelledText: {
    color: "#E57373",
  },

  divider: {
    height: 1,
    backgroundColor: "#554700",
    marginVertical: 13,
  },

  bookingDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 15,
  },

  infoItem: {
    width: "50%",
  },

  infoHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  infoLabel: {
    color: "#AAAAAA",
    fontSize: 14,
  },

  infoValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
    marginLeft: 21,
  },

  occasionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 17,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#444444",
  },

  occasionText: {
    color: "#CCCCCC",
    fontSize: 14,
  },

  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 20,
    paddingVertical: 9,
    marginTop: 13,
  },

  detailsButtonText: {
    color: GOLD,
    fontSize: 14,
    fontWeight: "bold",
  },

  emptyContainer: {
    alignItems: "center",
    paddingVertical: 35,
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 12,
  },

  emptyText: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 7,
  },

  newBookingCard: {
    backgroundColor: "#191600",
    borderWidth: 1,
    borderColor: "#665500",
    borderRadius: 9,
    padding: 18,
    alignItems: "center",
    marginTop: 13,
  },

  newBookingTitle: {
    color: GOLD,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
  },

  newBookingDescription: {
    color: "#AAAAAA",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    marginTop: 9,
  },

  newBookingButton: {
    backgroundColor: GOLD,
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 9,
    marginTop: 15,
  },

  newBookingButtonText: {
    color: BLACK,
    fontSize: 14,
    fontWeight: "bold",
  },

  bottomSpace: {
    height: 12,
  },
});
