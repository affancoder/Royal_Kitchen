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
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../components/navbar";

// HERO BANNER IMAGE
import MenuBanner from "../../../assets/images/menu.jpg";

// FOOD IMAGES
import DumBiyani from "../../../assets/images/dumbiryani.jpg";
import tandooriChicken from "../../../assets/images/tandooriChicken.webp";
import paneertikka from "../../../assets/images/paneer-tikka.jpg";
import butterChicken from "../../../assets/images/butterChicken.jpg";
import chocolateCake from "../../../assets/images/chocolate-lave-cake.jpg";
import mocktail from "../../../assets/images/mocktail.jpg";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const categories = [
  "All",
  "Starters",
  "Main Course",
  "Desserts",
  "Beverages",
];

const foodPreferences = [
  { label: "All", icon: "restaurant-outline" },
  { label: "Veg", icon: "leaf-outline" },
  { label: "Non-Veg", icon: "fast-food-outline" },
];

const menuItems = [
  {
    name: "Royal Paneer Tikka",
    category: "Starters",
    foodType: "Veg",
    price: "₹349",
    description: "Marinated cottage cheese grilled to perfection",
    image: paneertikka,
  },
  {
    name: "Tandoori Chicken",
    category: "Starters",
    foodType: "Non-Veg",
    price: "₹449",
    description: "Traditional spices with smoky tandoor flavour",
    image: tandooriChicken,
  },
  {
    name: "Royal Dum Biryani",
    category: "Main Course",
    foodType: "Non-Veg",
    price: "₹399",
    description: "Aromatic basmati rice with royal spices",
    image: DumBiyani,
  },
  {
    name: "Butter Chicken",
    category: "Main Course",
    foodType: "Non-Veg",
    price: "₹449",
    description: "Creamy tomato gravy with tender chicken",
    image: butterChicken,
  },
  {
    name: "Chocolate Lava Cake",
    category: "Desserts",
    foodType: "Veg",
    price: "₹249",
    description: "Warm chocolate cake with a rich molten centre",
    image: chocolateCake,
  },
  {
    name: "Royal Mocktail",
    category: "Beverages",
    foodType: "Veg",
    price: "₹199",
    description: "Refreshing signature fruit blend",
    image: mocktail,
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foodPreference, setFoodPreference] = useState("All");

  // COMBINE CATEGORY AND FOOD PREFERENCE FILTERS
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesFoodPreference =
      foodPreference === "All" ||
      item.foodType === foodPreference;

    return matchesCategory && matchesFoodPreference;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={BLACK}
        barStyle="light-content"
      />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* PAGE HEADING */}
          <View style={styles.heading}>
            <Text style={styles.smallTitle}>
              THE ROYAL KITCHEN & CATERER
            </Text>

            <Text style={styles.title}>Our Menu</Text>

            <View style={styles.goldLine} />

            <Text style={styles.subtitle}>
              Discover our exquisite collection of royal flavours
            </Text>
          </View>

          {/* MODERN HERO BANNER */}
          <View style={styles.heroBanner}>
            {/* BACKGROUND IMAGE */}
            <Image
              source={MenuBanner}
              style={styles.heroImage}
              resizeMode="cover"
            />

            {/* DARK GRADIENT OVERLAY */}
            <LinearGradient
              pointerEvents="none"
              colors={[
                "rgba(0,0,0,0.95)",
                "rgba(0,0,0,0.78)",
                "rgba(0,0,0,0.30)",
                "rgba(0,0,0,0.08)",
              ]}
              locations={[0, 0.4, 0.75, 1]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.heroOverlay}
            />

            {/* HERO CONTENT */}
            <View style={styles.heroContent}>
              <View style={styles.heroBadge}>
                <Ionicons
                  name="sparkles"
                  size={11}
                  color={GOLD}
                />

                <Text style={styles.heroBadgeText}>
                  CHEF'S SPECIAL
                </Text>
              </View>

              <Text style={styles.heroTitle}>
                A Taste of{"\n"}Royalty.
              </Text>

              <Text style={styles.heroDescription}>
                Discover our flavours crafted with passion.
              </Text>

              <TouchableOpacity
                style={styles.heroButton}
                onPress={() => router.push("/pages/booking")}
                activeOpacity={0.7}
              >
                <Text style={styles.heroButtonText}>
                  Reserve Table
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={14}
                  color={BLACK}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* VEG / NON-VEG PREFERENCE FILTER */}
          <View style={styles.preferenceSection}>
            <Text style={styles.preferenceTitle}>
              Choose Your Preference
            </Text>

            <Text style={styles.preferenceSubtitle}>
              Explore dishes according to your taste
            </Text>

            <View style={styles.preferenceToggle}>
              {foodPreferences.map((option) => {
                const isSelected =
                  foodPreference === option.label;

                return (
                  <TouchableOpacity
                    key={option.label}
                    activeOpacity={0.8}
                    style={[
                      styles.preferenceButton,
                      isSelected && styles.activePreferenceButton,
                    ]}
                    onPress={() =>
                      setFoodPreference(option.label)
                    }
                  >
                    <Ionicons
                      name={option.icon}
                      size={16}
                      color={isSelected ? BLACK : "#AAAAAA"}
                    />

                    <Text
                      style={[
                        styles.preferenceText,
                        isSelected && styles.activePreferenceText,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* CATEGORIES */}
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>
              Explore Our Menu
            </Text>

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
                activeOpacity={0.8}
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

          {/* FILTER RESULT COUNT */}
          <View style={styles.resultRow}>
            <Text style={styles.resultText}>
              {filteredItems.length} dishes found
            </Text>

            {(foodPreference !== "All" ||
              selectedCategory !== "All") && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setFoodPreference("All");
                  setSelectedCategory("All");
                }}
              >
                <Text style={styles.resetText}>
                  Reset Filters
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* MENU ITEMS */}
          <View style={styles.menuGrid}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <View
                  style={styles.menuCard}
                  key={item.name}
                >
                  <View style={styles.foodImageContainer}>
                    <Image
                      source={item.image}
                      style={styles.foodImage}
                      resizeMode="cover"
                    />

                    {/* VEG / NON-VEG ITEM INDICATOR */}
                    <View style={styles.foodTypeBadge}>
                      <View
                        style={[
                          styles.foodTypeDot,
                          {
                            backgroundColor:
                              item.foodType === "Veg"
                                ? "#32CD32"
                                : "#E53935",
                          },
                        ]}
                      />

                      <Text style={styles.foodTypeText}>
                        {item.foodType}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.foodInfo}>
                    <Text style={styles.foodCategory}>
                      {item.category.toUpperCase()}
                    </Text>

                    <Text style={styles.foodName}>
                      {item.name}
                    </Text>

                    <Text style={styles.foodDescription}>
                      {item.description}
                    </Text>

                    <View style={styles.foodBottom}>
                      <Text style={styles.foodPrice}>
                        {item.price}
                      </Text>

                      <TouchableOpacity
                        style={styles.orderButton}
                        onPress={() => router.push("/auth/login")}
                        activeOpacity={0.7}
                      >
                        <Text style={styles.orderButtonText}>
                          Order
                        </Text>

                        <Ionicons
                          name="arrow-forward"
                          size={14}
                          color={BLACK}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.emptyContainer}>
                <Ionicons
                  name="restaurant-outline"
                  size={38}
                  color={GOLD}
                />

                <Text style={styles.emptyTitle}>
                  No Dishes Found
                </Text>

                <Text style={styles.emptyDescription}>
                  Try selecting another category or food preference.
                </Text>

                <TouchableOpacity
                  style={styles.clearFilterButton}
                  onPress={() => {
                    setFoodPreference("All");
                    setSelectedCategory("All");
                  }}
                >
                  <Text style={styles.clearFilterText}>
                    Clear Filters
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* BOTTOM BANNER */}
          <View style={styles.bottomBanner}>
            <Ionicons
              name="restaurant-outline"
              size={30}
              color={GOLD}
            />

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
              activeOpacity={0.7}
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

  // PAGE HEADING
  heading: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
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
  },

  goldLine: {
    width: 48,
    height: 2,
    backgroundColor: GOLD,
    marginTop: 4,
  },

  subtitle: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },

  // HERO BANNER
  heroBanner: {
    height: 180,
    marginHorizontal: 18,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#171717",
    position: "relative",
    borderColor: "#CCA402",
    borderWidth: 1.5,
  },

  heroImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },

  heroContent: {
    flex: 1,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 22,
    paddingVertical: 10,
  },

  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 5,
    borderWidth: 1,
    borderColor: "rgba(212,175,0,0.65)",
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },

  heroBadgeText: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginTop: 2,
    lineHeight: 39,
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },

  heroDescription: {
    color: "#FFFFFF",
    fontSize: 12,
    maxWidth: 230,
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

  heroButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 5,
    backgroundColor: GOLD,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    marginTop: 8,
  },

  heroButtonText: {
    color: BLACK,
    fontSize: 12,
    fontWeight: "bold",
  },

  // VEG / NON-VEG PREFERENCE FILTER
  preferenceSection: {
    marginHorizontal: 18,
    marginTop: 22,
    marginBottom: 5,
  },

  preferenceTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  preferenceSubtitle: {
    color: "#888888",
    fontSize: 11,
    marginTop: 5,
  },

  preferenceToggle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#292929",
    borderRadius: 12,
    padding: 5,
    marginTop: 13,
  },

  preferenceButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 11,
    borderRadius: 9,
  },

  activePreferenceButton: {
    backgroundColor: GOLD,
  },

  preferenceText: {
    color: "#AAAAAA",
    fontSize: 11,
    fontWeight: "600",
  },

  activePreferenceText: {
    color: BLACK,
    fontWeight: "bold",
  },

  // SECTION HEADING
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

  // CATEGORY FILTER
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

  // FILTER RESULT
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  resultText: {
    color: "#888888",
    fontSize: 11,
  },

  resetText: {
    color: GOLD,
    fontSize: 11,
    fontWeight: "bold",
  },

  // MENU CARDS
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

  foodImageContainer: {
    width: "100%",
    height: 175,
    position: "relative",
    backgroundColor: "#222222",
  },

  foodImage: {
    width: "100%",
    height: "100%",
  },

  foodTypeBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 5,
  },

  foodTypeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  foodTypeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
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

  // EMPTY FILTER RESULT
  emptyContainer: {
    backgroundColor: CARD,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#292929",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 35,
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
  },

  emptyDescription: {
    color: "#999999",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 18,
    marginTop: 7,
  },

  clearFilterButton: {
    backgroundColor: GOLD,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 15,
  },

  clearFilterText: {
    color: BLACK,
    fontSize: 11,
    fontWeight: "bold",
  },

  // BOTTOM BANNER
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
});
