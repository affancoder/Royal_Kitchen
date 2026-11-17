import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const DARK = "#171717";

const initialNotifications = [
  {
    id: "1",
    title: "Booking Confirmed",
    message: "Your table booking has been confirmed successfully.",
    time: "10 minutes ago",
    date: "Today",
    type: "booking",
    read: false,
  },
  {
    id: "2",
    title: "Special Offer!",
    message: "Enjoy exclusive discounts on selected catering packages.",
    time: "2 hours ago",
    date: "Today",
    type: "offer",
    read: false,
  },
  {
    id: "3",
    title: "Booking Reminder",
    message: "Your upcoming reservation is scheduled for tomorrow.",
    time: "Yesterday",
    date: "Yesterday",
    type: "booking",
    read: true,
  },
  {
    id: "4",
    title: "Welcome to Royal Kitchen",
    message: "Thank you for choosing us. We look forward to serving you!",
    time: "2 days ago",
    date: "Earlier",
    type: "general",
    read: true,
  },
  {
    id: "5",
    title: "New Menu Available",
    message: "Explore our latest dishes and discover something delicious.",
    time: "3 days ago",
    date: "Earlier",
    type: "menu",
    read: true,
  },
];

const filters = ["All", "Unread", "Bookings", "Offers"];

export default function Notifications() {
  const router = useRouter();

  const [notifications, setNotifications] = useState(
    initialNotifications
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  const filteredNotifications = notifications.filter((item) => {
    if (activeFilter === "Unread") return !item.read;
    if (activeFilter === "Bookings") return item.type === "booking";
    if (activeFilter === "Offers") return item.type === "offer";
    return true;
  });

  const markAsRead = (id) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((item) => ({ ...item, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "booking":
        return "calendar-outline";
      case "offer":
        return "gift-outline";
      case "menu":
        return "restaurant-outline";
      default:
        return "notifications-outline";
    }
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.notificationCard,
        !item.read && styles.unreadCard,
      ]}
      onPress={() => markAsRead(item.id)}
    >
      <View style={styles.notificationIcon}>
        <Ionicons name={getIcon(item.type)} size={22} color={GOLD} />
      </View>

      <View style={styles.notificationContent}>
        <View style={styles.titleRow}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          {!item.read && <View style={styles.unreadDot} />}
        </View>

        <Text style={styles.notificationMessage}>
          {item.message}
        </Text>

        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteNotification(item.id)}
      >
        <Ionicons name="close-outline" size={19} color="#777" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Notifications</Text>
          <Text style={styles.headerSubtitle}>
            Stay updated with Royal Kitchen
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={GOLD}
          />
          {unreadCount > 0 && <View style={styles.headerDot} />}
        </View>
      </View>

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>UNREAD NOTIFICATIONS</Text>
          <Text style={styles.summaryNumber}>{unreadCount}</Text>
          <Text style={styles.summaryDescription}>
            You have {unreadCount} unread updates
          </Text>
        </View>

        <View style={styles.summaryIcon}>
          <Ionicons name="mail-unread-outline" size={30} color={GOLD} />
        </View>
      </View>

      <View style={styles.filterHeader}>
        <Text style={styles.sectionTitle}>Recent Updates</Text>

        <TouchableOpacity onPress={markAllAsRead}>
          <Text style={styles.markAllText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.activeFilterButton,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="notifications-off-outline"
              size={48}
              color="#555"
            />
            <Text style={styles.emptyTitle}>No Notifications</Text>
            <Text style={styles.emptyText}>
              You're all caught up. Check back later for updates.
            </Text>
          </View>
        }
      />

      <Navbar active="notifications" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: GOLD,
    fontSize: 25,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#999",
    fontSize: 12,
    marginTop: 6,
  },
  headerIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#514314",
    backgroundColor: DARK,
    justifyContent: "center",
    alignItems: "center",
  },
  headerDot: {
    position: "absolute",
    top: 8,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E54848",
  },
  summaryCard: {
    marginHorizontal: 22,
    marginBottom: 25,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#514314",
    backgroundColor: DARK,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: {
    color: "#999",
    fontSize: 10,
    letterSpacing: 1.3,
    fontWeight: "bold",
  },
  summaryNumber: {
    color: GOLD,
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 5,
  },
  summaryDescription: {
    color: "#AAA",
    fontSize: 11,
    marginTop: 3,
  },
  summaryIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#29230D",
    justifyContent: "center",
    alignItems: "center",
  },
  filterHeader: {
    paddingHorizontal: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  markAllText: {
    color: GOLD,
    fontSize: 11,
    fontWeight: "600",
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterScroll: {
    paddingHorizontal: 22,
    gap: 9,
  },
  filterButton: {
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#393939",
    backgroundColor: DARK,
  },
  activeFilterButton: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },
  filterText: {
    color: "#AAA",
    fontSize: 12,
    fontWeight: "600",
  },
  activeFilterText: {
    color: BLACK,
  },
  listContent: {
    paddingHorizontal: 22,
    paddingBottom: 20,
    flexGrow: 1,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: DARK,
    borderWidth: 1,
    borderColor: "#303030",
    borderRadius: 13,
    padding: 14,
    marginBottom: 12,
  },
  unreadCard: {
    borderColor: "#65551B",
    backgroundColor: "#1D1B13",
  },
  notificationIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#29230D",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: GOLD,
    marginLeft: 8,
  },
  notificationMessage: {
    color: "#AAA",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 6,
  },
  notificationTime: {
    color: GOLD,
    fontSize: 10,
    marginTop: 9,
  },
  deleteButton: {
    padding: 3,
    marginLeft: 5,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 65,
  },
  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 15,
  },
  emptyText: {
    color: "#888",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 19,
    paddingHorizontal: 25,
  },
});
