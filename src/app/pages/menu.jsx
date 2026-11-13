
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const categories = ["All", "Starters", "Main Course", "Desserts", "Beverages"];

const menuItems = [
  {
    name: "Royal Paneer Tikka",
    category: "Starters",
    price: "₹349",
    description: "Marinated cottage cheese grilled to perfection",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
  },
  {
    name: "Tandoori Chicken",
    category: "Starters",
    price: "₹449",
    description: "Traditional spices with smoky tandoor flavour",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
  },
  {
    name: "Royal Dum Biryani",
    category: "Main Course",
    price: "₹399",
    description: "Aromatic basmati rice with royal spices",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800",
  },
  {
    name: "Butter Chicken",
    category: "Main Course",
    price: "₹449",
    description: "Creamy tomato gravy with tender chicken",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
  },
  {
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "₹249",
    description: "Warm chocolate cake with a rich molten centre",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
  },
  {
    name: "Royal Mocktail",
    category: "Beverages",
    price: "₹199",
    description: "Refreshing signature fruit blend",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=800",
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={BLACK} barStyle="light-content" />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Page Heading */}
          <View style={styles.heading}>
            <Text style={styles.smallTitle}>THE ROYAL KITCHEN & CATERER</Text>
            <Text style={styles.title}>Our Menu</Text>
            <View style={styles.goldLine} />
            <Text style={styles.subtitle}>
              Discover our exquisite collection of royal flavours
            </Text>
          </View>

          {/* Featured Banner */}
          <View style={styles.featuredCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200",
              }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredOverlay}>
              <Text style={styles.featuredLabel}>CHEF'S SPECIAL</Text>
              <Text style={styles.featuredTitle}>
                A Taste of Royalty
              </Text>
              <Text style={styles.featuredDescription}>
                Experience unforgettable flavours crafted with passion.
              </Text>
            </View>
          </View>

          {/* Categories */}
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Explore Our Menu</Text>
            <Text style={styles.sectionSubtitle}>
              Choose your favourite category
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category &&
                    styles.selectedCategory,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category &&
                      styles.selectedCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Menu Items */}
          <View style={styles.menuGrid}>
            {filteredItems.map((item, index) => (
              <View style={styles.menuCard} key={index}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.foodImage}
                />

                <View style={styles.foodInfo}>
                  <Text style={styles.foodCategory}>
                    {item.category.toUpperCase()}
                  </Text>

                  <Text style={styles.foodName}>{item.name}</Text>

                  <Text style={styles.foodDescription}>
                    {item.description}
                  </Text>

                  <View style={styles.foodBottom}>
                    <Text style={styles.foodPrice}>{item.price}</Text>

                    <TouchableOpacity
                      style={styles.orderButton}
                      onPress={() => router.push("/pages/booking")}
                    >
                      <Text style={styles.orderButtonText}>Order</Text>
                      <Ionicons
                        name="arrow-forward"
                        size={14}
                        color={BLACK}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Bottom Banner */}
          <View style={styles.bottomBanner}>
            <Ionicons name="restaurant-outline" size={30} color={GOLD} />

            <Text style={styles.bannerTitle}>
              Crafted With Passion
            </Text>

            <Text style={styles.bannerDescription}>
              Every dish tells a story of tradition, flavour and royal
              hospitality.
            </Text>

            <TouchableOpacity
              style={styles.reserveButton}
              onPress={() => router.push("/pages/booking")}
            >
              <Text style={styles.reserveButtonText}>
                Reserve Your Table
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Navbar active="menu" />
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
  scrollContent: {
    paddingBottom: 25,
  },
  heading: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
    alignItems: "center",
  },
  smallTitle: {
    color: GOLD,
    fontSize: 14,
    letterSpacing: 3,
    fontWeight: "700",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 2,
  },
  goldLine: {
    width: 48,
    height: 2,
    backgroundColor: GOLD,
    marginTop: 6,
  },
  subtitle: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  featuredCard: {
    height: 190,
    marginHorizontal: 18,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: CARD,
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  featuredOverlay: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.58)",
  },
  featuredLabel: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  featuredTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },
  featuredDescription: {
    color: "#DDDDDD",
    fontSize: 12,
    marginTop: 8,
    maxWidth: 260,
    lineHeight: 18,
  },
  sectionHeading: {
    paddingHorizontal: 20,
    marginTop: 28,
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    color: "#888888",
    fontSize: 11,
    marginTop: 5,
  },
  categoryContainer: {
    paddingHorizontal: 18,
    paddingBottom: 18,
    gap: 9,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  selectedCategory: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },
  categoryText: {
    color: "#CCCCCC",
    fontSize: 11,
    fontWeight: "600",
  },
  selectedCategoryText: {
    color: BLACK,
  },
  menuGrid: {
    paddingHorizontal: 18,
    gap: 16,
  },
  menuCard: {
    backgroundColor: CARD,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#252525",
  },
  foodImage: {
    width: "100%",
    height: 175,
    backgroundColor: "#222222",
  },
  foodInfo: {
    padding: 14,
  },
  foodCategory: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 1.5,
    fontWeight: "bold",
  },
  foodName: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 6,
  },
  foodDescription: {
    color: "#999999",
    fontSize: 11,
    marginTop: 6,
    lineHeight: 17,
  },
  foodBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  foodPrice: {
    color: GOLD,
    fontSize: 17,
    fontWeight: "bold",
  },
  orderButton: {
    backgroundColor: GOLD,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  orderButtonText: {
    color: BLACK,
    fontSize: 11,
    fontWeight: "bold",
  },
  bottomBanner: {
    marginHorizontal: 18,
    marginTop: 28,
    padding: 22,
    backgroundColor: CARD,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#292929",
    alignItems: "center",
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 12,
  },
  bannerDescription: {
    color: "#999999",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 19,
    marginTop: 9,
  },
  reserveButton: {
    backgroundColor: GOLD,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 6,
    marginTop: 18,
  },
  reserveButtonText: {
    color: BLACK,
    fontWeight: "bold",
    fontSize: 12,
  },
  bottomNav: {
    height: 57,
    backgroundColor: BLACK,
    borderTopWidth: 1,
    borderTopColor: GOLD,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  navLabel: {
    color: GOLD,
    fontSize: 8,
  },
  activeNavLabel: {
    fontWeight: "bold",
  },
});
