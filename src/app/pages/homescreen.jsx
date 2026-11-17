import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
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

const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900",
  food: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200",
};

const eventServices = [
  {
    icon: "restaurant-outline",
    title: "Private Chef & Table Reservations",
    description:
      "Personalized dining experiences with exceptional culinary service.",
    button: "Reserve Your Table",
  },
  {
    icon: "calendar-outline",
    title: "Grand Wedding & Event Catering",
    description: "Make every celebration memorable with our premium catering.",
    button: "Plan Your Event",
  },
  {
    icon: "business-outline",
    title: "Corporate Banquets & Special Occasions",
    description:
      "Elegant dining arrangements for business and special occasions.",
    button: "Explore Services",
  },
];

const excellenceFeatures = [
  {
    icon: "restaurant-outline",
    title: "Exceptional Ingredients",
    description:
      "We carefully select quality ingredients to create remarkable dishes.",
  },
  {
    icon: "people-outline",
    title: "Expert Culinary Team",
    description:
      "Our experienced chefs bring creativity and passion to every plate.",
  },
  {
    icon: "star-outline",
    title: "Premium Hospitality",
    description: "Personalized service that makes every guest feel special.",
  },
  {
    icon: "heart-outline",
    title: "Unforgettable Experiences",
    description:
      "Every occasion is thoughtfully crafted into a lasting memory.",
  },
];

const foodCategories = [
  {
    id: "1",
    name: "Paneer",
    mode: "veg",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
  },
  {
    id: "2",
    name: "Veg Biryani",
    mode: "veg",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
  },
  {
    id: "3",
    name: "Chicken",
    mode: "non-veg",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400",
  },
  {
    id: "4",
    name: "Butter Chicken",
    mode: "non-veg",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
  },
  {
    id: "5",
    name: "Dal Makhani",
    mode: "veg",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
  },
  {
    id: "6",
    name: "Fish Curry",
    mode: "non-veg",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400",
  },
];

const chefSpecials = [
  {
    id: "1",
    name: "Paneer Tikka",
    description: "Smoky grilled paneer with Indian spices",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
    mode: "veg",
  },
  {
    id: "2",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with tender chicken",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600",
    mode: "non-veg",
  },
  {
    id: "3",
    name: "Butter Chicken",
    description: "Creamy tomato gravy with juicy chicken",
    price: "₹279",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    mode: "non-veg",
  },
];

export default function HomeScreen() {
  const [foodMode, setFoodMode] = useState(null);

  const handleContinue = () => {
    if (!foodMode) return;

    router.push({
      pathname: "/pages/menu",
      params: { mode: foodMode },
    });
  };

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
            <View>
              <Text style={styles.brandName}>The ROYAL KITCHEN & CATERER</Text>
              <Text style={styles.brandTagline}>DINE LIKE ROYALTY</Text>
            </View>

            <View style={styles.nearby}>
              <TouchableOpacity
                style={styles.notificationButton}
                activeOpacity={0.7}
                onPress={() => router.push("/pages/location")}
              >
                <Ionicons name="location-outline" size={23} color={GOLD} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.notificationButton}
                activeOpacity={0.7}
                onPress={() => router.push("/pages/notifications")}
              >
                <Ionicons name="notifications-outline" size={23} color={GOLD} />
              </TouchableOpacity>
            </View>
          </View>

          {/* SECTION 1 - HERO BANNER */}

          <ImageBackground
            source={{ uri: images.hero }}
            style={styles.heroBanner}
            imageStyle={styles.heroImage}
          >
            <View style={styles.heroOverlay}>
              <Text style={styles.heroEyebrow}>EXCEPTIONAL DINING</Text>

              <Text style={styles.heroTitle}>
                Indulge in {"\n"}
                <Text style={styles.gold}>Royal Dining</Text>
              </Text>

              <Text style={styles.heroDescription}>
                Discover our flavours, delicious & dining experiences.
              </Text>

              <TouchableOpacity
                style={styles.goldButton}
                activeOpacity={0.8}
                onPress={() => router.push("/pages/menu")}
              >
                <Text style={styles.goldButtonText}>Explore Menu</Text>
                <Ionicons name="arrow-forward" size={12} color={BLACK} />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* SECTION 2 - EXPLORE FOOD CATEGORIES */}

          <View style={styles.foodCategorySection}>
            <View style={styles.categoryHeader}>
              <View>
                <Text style={styles.categoryTitle}>Explore Our Menu</Text>
                <Text style={styles.categorySubtitle}>
                  Discover something delicious
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => router.push("/pages/menu")}
                style={styles.viewAllButton}
              >
                <Text style={styles.viewAllText}>View All</Text>
                <Ionicons name="arrow-forward" size={13} color={GOLD} />
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryScroll}
            >
              {foodCategories.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.categoryItem}
                  activeOpacity={0.8}
                  onPress={() =>
                    router.push({
                      pathname: "/pages/menu",
                      params: {
                        mode: item.mode,
                        category: item.name,
                      },
                    })
                  }
                >
                  <View style={styles.categoryImageWrapper}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.categoryImage}
                      resizeMode="cover"
                    />

                    <View
                      style={[
                        styles.foodTypeIndicator,
                        {
                          borderColor:
                            item.mode === "veg" ? "#35C759" : "#F04444",
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.foodTypeDot,
                          {
                            backgroundColor:
                              item.mode === "veg" ? "#35C759" : "#F04444",
                          },
                        ]}
                      />
                    </View>
                  </View>

                  <Text style={styles.categoryName} numberOfLines={1}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* SECTION 3 - FOOD PREFERENCE */}

          <View style={styles.preferenceSection}>
            <Text style={styles.preferenceTitle}>
              What Would You Like Today?
            </Text>

            <Text style={styles.preferenceSubtitle}>
              Choose your preferred food category
            </Text>

            <View style={styles.preferenceContainer}>
              {/* VEG BUTTON */}

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.preferenceCard,
                  foodMode === "veg" && styles.selectedVeg,
                ]}
                onPress={() => setFoodMode("veg")}
              >
                <View style={styles.vegIconContainer}>
                  <View style={styles.vegDot} />
                </View>

                <Text style={styles.preferenceButtonText}>Pure Veg</Text>

                {foodMode === "veg" && (
                  <Ionicons
                    name="checkmark-circle"
                    size={19}
                    color="#35C759"
                    style={styles.selectedIcon}
                  />
                )}
              </TouchableOpacity>

              {/* NON-VEG BUTTON */}

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.preferenceCard,
                  foodMode === "non-veg" && styles.selectedNonVeg,
                ]}
                onPress={() => setFoodMode("non-veg")}
              >
                <View style={styles.nonVegIconContainer}>
                  <View style={styles.nonVegDot} />
                </View>

                <Text style={styles.preferenceButtonText}>Non-Veg</Text>

                {foodMode === "non-veg" && (
                  <Ionicons
                    name="checkmark-circle"
                    size={19}
                    color="#F04444"
                    style={styles.selectedIcon}
                  />
                )}
              </TouchableOpacity>
            </View>

            {/* CONTINUE BUTTON */}

            <TouchableOpacity
              activeOpacity={0.8}
              disabled={!foodMode}
              onPress={handleContinue}
              style={[
                styles.continueButton,
                !foodMode && styles.disabledButton,
              ]}
            >
              <Text style={styles.continueButtonText}>
                {foodMode
                  ? `Continue with ${foodMode === "veg" ? "Veg" : "Non-Veg"}`
                  : "Select Your Food Preference"}
              </Text>

              <Ionicons name="arrow-forward" size={16} color={BLACK} />
            </TouchableOpacity>
          </View>

          {/* SECTION 4 - GRAND EVENTS */}

          <View style={styles.eventsSection}>
            <Text style={styles.smallGoldHeading}>UNRIVALLED HOSPITALITY</Text>

            <Text style={styles.eventsTitle}>
              Tailored Culinary Royalty{"\n"}
              For Your Grand Events
            </Text>

            <Text style={styles.paragraphCenter}>
              Exceptional culinary services designed for your special occasions
              and celebrations.
            </Text>

            <View style={styles.eventCards}>
              {eventServices.map((item, index) => (
                <View style={styles.eventCard} key={index}>
                  <Ionicons name={item.icon} size={21} color={GOLD} />

                  <Text style={styles.eventCardTitle}>{item.title}</Text>

                  <Text style={styles.eventCardDescription}>
                    {item.description}
                  </Text>

                  <TouchableOpacity
                    style={styles.miniButton}
                    onPress={() => router.push("/pages/services")}
                  >
                    <Text style={styles.miniButtonText}>{item.button}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* SECTION - CHEF'S SPECIALS */}
<View style={styles.specialSection}>
  <View style={styles.categoryHeader}>
    <View>
      <Text style={styles.categoryTitle}>Chef's Specials</Text>
      <Text style={styles.categorySubtitle}>
        Handpicked favourites from our kitchen
      </Text>
    </View>

    <TouchableOpacity
      style={styles.viewAllButton}
      onPress={() => router.push("/pages/menu")}
    >
      <Text style={styles.viewAllText}>View All</Text>
      <Ionicons name="arrow-forward" size={13} color={GOLD} />
    </TouchableOpacity>
  </View>

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.specialScroll}
  >
    {chefSpecials.map((item) => (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.85}
        style={styles.specialCard}
        onPress={() =>
          router.push({
            pathname: "/pages/menu",
            params: {
              mode: item.mode,
              category: item.name,
            },
          })
        }
      >
        <View style={styles.specialImageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.specialImage}
            resizeMode="cover"
          />

          <View
            style={[
              styles.specialFoodIndicator,
              {
                borderColor:
                  item.mode === "veg" ? "#35C759" : "#F04444",
              },
            ]}
          >
            <View
              style={[
                styles.foodTypeDot,
                {
                  backgroundColor:
                    item.mode === "veg" ? "#35C759" : "#F04444",
                },
              ]}
            />
          </View>

          <View style={styles.specialTag}>
            <Text style={styles.specialTagText}>CHEF'S PICK</Text>
          </View>
        </View>

        <View style={styles.specialInfo}>
          <Text style={styles.specialName} numberOfLines={1}>
            {item.name}
          </Text>

          <Text style={styles.specialDescription} numberOfLines={2}>
            {item.description}
          </Text>

          <View style={styles.specialBottom}>
            <Text style={styles.specialPrice}>{item.price}</Text>

            <View style={styles.addButton}>
              <Ionicons name="add" size={18} color={BLACK} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>

          {/* SECTION 6 - CULINARY EXCELLENCE */}

          <View style={styles.excellenceSection}>
            <Text style={styles.smallGoldHeading}>OUR COMMITMENT</Text>

            <Text style={styles.excellenceTitle}>
              A Legacy of Royal Dining &{"\n"}
              <Text style={styles.gold}>Culinary Excellence</Text>
            </Text>

            <Text style={styles.paragraphCenter}>
              Our values define every experience we create, from the first
              ingredient to the final presentation.
            </Text>

            <View style={styles.excellenceGrid}>
              {excellenceFeatures.map((item, index) => (
                <View style={styles.excellenceCard} key={index}>
                  <Ionicons name={item.icon} size={22} color={GOLD} />

                  <Text style={styles.excellenceCardTitle}>{item.title}</Text>

                  <Text style={styles.excellenceCardDescription}>
                    {item.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* BOTTOM NAVIGATION */}

        <Navbar active="home" />
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
    paddingBottom: 12,
  },

  // HEADER

  header: {
    height: 60,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#332B00",
  },

  nearby: {
    flexDirection: "row",
    gap: 10,
  },

  brandName: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Georgia",
    letterSpacing: 1,
  },

  brandTagline: {
    color: "#AAAAAA",
    fontSize: 8,
    letterSpacing: 2,
    marginTop: 3,
  },

  notificationButton: {
    width: 38,
    height: 38,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#554700",
    alignItems: "center",
    justifyContent: "center",
  },

  // HERO BANNER

  heroBanner: {
    height: 150,
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    borderColor: "#cca402",
    borderWidth: 1.2,
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 18,
    backgroundColor: "rgba(0,0,0,0.48)",
  },

  heroEyebrow: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1.3,
    // Text shadow
    textShadowColor: "rgba(0, 0, 0, 0.85)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",

    // Text shadow
    textShadowColor: "rgba(0, 0, 0, 0.85)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },

  gold: {
    color: GOLD,
  },

  heroDescription: {
    color: "#fff",
    fontSize: 12,
    maxWidth: 240,
    // Text shadow
    textShadowColor: "rgba(0, 0, 0, 0.85)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },

  goldButton: {
    backgroundColor: GOLD,
    borderRadius: 22,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  goldButtonText: {
    color: BLACK,
    fontSize: 10,
    fontWeight: "bold",
  },

  // FOOD PREFERENCE

  preferenceSection: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  preferenceTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
  },

  preferenceSubtitle: {
    color: "#AAAAAA",
    fontSize: 10,
    textAlign: "center",
    marginBottom: 10,
  },

  preferenceContainer: {
    flexDirection: "row",
    gap: 12,
  },

  preferenceCard: {
    flex: 1,
    minHeight: 30,
    backgroundColor: CARD,
    borderWidth: 1.2,
    borderColor: "#554700",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    paddingHorizontal: 7,
    position: "relative",
  },

  selectedVeg: {
    borderColor: "#35C759",
    backgroundColor: "#0D1A10",
  },

  selectedNonVeg: {
    borderColor: "#F04444",
    backgroundColor: "#1A0D0D",
  },

  vegIconContainer: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    borderColor: "#35C759",
    alignItems: "center",
    justifyContent: "center",
  },

  vegDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "#35C759",
  },

  nonVegIconContainer: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    borderColor: "#F04444",
    alignItems: "center",
    justifyContent: "center",
  },

  nonVegDot: {
    width: 6,
    height: 6,
    backgroundColor: "#F04444",
    borderRadius: 5,
  },

  preferenceButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  selectedIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },

  continueButton: {
    backgroundColor: GOLD,
    height: 36,
    borderRadius: 8,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  disabledButton: {
    backgroundColor: "#665A20",
  },

  continueButtonText: {
    color: BLACK,
    fontSize: 16,
    fontWeight: "bold",
  },

  // FOOD CATEGORIES

  foodCategorySection: {
    paddingTop: 15,
    paddingBottom: 20,
  },

  categoryHeader: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Georgia",
  },

  categorySubtitle: {
    color: "#AAAAAA",
    fontSize: 12,
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  viewAllText: {
    color: GOLD,
    fontSize: 14,
    fontWeight: "bold",
  },

  categoryScroll: {
    paddingHorizontal: 16,
    gap: 19,
  },

  categoryItem: {
    width: 82,
    alignItems: "center",
  },

  categoryImageWrapper: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 2,
    borderColor: GOLD,
    padding: 3,
    position: "relative",
  },

  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
    backgroundColor: CARD,
  },

  foodTypeIndicator: {
    position: "absolute",
    width: 17,
    height: 17,
    borderRadius: 4,
    backgroundColor: BLACK,
    borderWidth: 1.5,
    right: -3,
    bottom: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  foodTypeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  categoryName: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 9,
  },

  // CHEF'S SPECIALS
specialSection: {
  paddingTop: 15,
  paddingBottom: 25,
},

specialScroll: {
  paddingHorizontal: 16,
  gap: 14,
},

specialCard: {
  width: 205,
  backgroundColor: CARD,
  borderRadius: 13,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "#292929",
},

specialImageContainer: {
  width: "100%",
  height: 135,
  position: "relative",
},

specialImage: {
  width: "100%",
  height: "100%",
},

specialFoodIndicator: {
  position: "absolute",
  top: 10,
  right: 10,
  width: 18,
  height: 18,
  borderRadius: 4,
  backgroundColor: BLACK,
  borderWidth: 1.5,
  alignItems: "center",
  justifyContent: "center",
},

specialTag: {
  position: "absolute",
  bottom: 9,
  left: 9,
  backgroundColor: GOLD,
  paddingHorizontal: 8,
  paddingVertical: 5,
  borderRadius: 4,
},

specialTagText: {
  color: BLACK,
  fontSize: 8,
  fontWeight: "bold",
  letterSpacing: 0.5,
},

specialInfo: {
  padding: 12,
},

specialName: {
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: "bold",
},

specialDescription: {
  color: "#999999",
  fontSize: 10,
  lineHeight: 15,
  marginTop: 5,
  minHeight: 30,
},

specialBottom: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 12,
},

specialPrice: {
  color: GOLD,
  fontSize: 15,
  fontWeight: "bold",
},

addButton: {
  width: 29,
  height: 29,
  borderRadius: 7,
  backgroundColor: GOLD,
  alignItems: "center",
  justifyContent: "center",
},
 

  // EVENTS

  eventsSection: {
    paddingHorizontal: 13,
    paddingTop: 15,
    paddingBottom: 25,
  },

  smallGoldHeading: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.2,
    textAlign: "center",
    marginBottom: 8,
  },

  eventsTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 25,
  },

  paragraphCenter: {
    color: "#AAAAAA",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 9,
    marginBottom: 15,
    paddingHorizontal: 8,
  },

  eventCards: {
    flexDirection: "row",
    gap: 7,
  },

  eventCard: {
    flex: 1,
    minHeight: 165,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 7,
    padding: 8,
  },

  eventCardTitle: {
    color: GOLD,
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 13,
    marginTop: 8,
    minHeight: 37,
  },

  eventCardDescription: {
    color: "#AAAAAA",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 5,
    flex: 1,
  },

  miniButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 3,
    alignItems: "center",
    marginTop: 9,
  },

  miniButtonText: {
    color: GOLD,
    fontSize: 7,
    textAlign: "center",
  },

  

  // EXCELLENCE

  excellenceSection: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },

  excellenceTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 26,
  },

  excellenceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 9,
  },

  excellenceCard: {
    width: "48%",
    minHeight: 125,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 7,
    padding: 10,
  },

  excellenceCardTitle: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 5,
  },

  excellenceCardDescription: {
    color: "#AAAAAA",
    fontSize: 8,
    lineHeight: 13,
  },

  bottomSpace: {
    height: 10,
  },
});
