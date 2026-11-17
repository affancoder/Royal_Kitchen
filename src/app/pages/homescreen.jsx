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

            <TouchableOpacity
              style={styles.notificationButton}
              activeOpacity={0.7}
            >
              <Ionicons name="notifications-outline" size={23} color={GOLD} />
            </TouchableOpacity>
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
                Indulge in a{"\n"}
                <Text style={styles.gold}>Royal Dining</Text>
                {"\n"}Experience
              </Text>

              <Text style={styles.heroDescription}>
                Discover our flavours, delicious &
                dining experiences.
              </Text>

              <TouchableOpacity
                style={styles.goldButton}
                activeOpacity={0.8}
                onPress={() => router.push("/pages/menu")}
              >
                <Text style={styles.goldButtonText}>Explore Our Menu</Text>
                <Ionicons name="arrow-forward" size={15} color={BLACK} />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* SECTION 2 - FOOD PREFERENCE */}

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

          {/* SECTION 3 - OUR STORY */}

          <View style={styles.craftingSection}>
            <View style={styles.sectionTag}>
              <Text style={styles.tagText}>OUR STORY</Text>
            </View>

            <Text style={styles.sectionTitle}>
              Crafting Culinary{"\n"}
              <Text style={styles.gold}>Royalty Since 2012</Text>
            </Text>

            <Text style={styles.paragraph}>
              At Royal Kitchen, we believe every meal deserves a royal touch.
              Our passion for exceptional food and hospitality brings together
              carefully selected ingredients, experienced chefs and
              unforgettable dining experiences.
            </Text>

            <Text style={styles.paragraph}>
              From intimate dining to grand celebrations, we deliver excellence
              in every detail.
            </Text>

            <TouchableOpacity
              style={styles.outlineButton}
              onPress={() => router.push("/pages/about")}
            >
              <Text style={styles.outlineButtonText}>Discover Our Story</Text>
              <Ionicons name="arrow-forward" size={13} color={GOLD} />
            </TouchableOpacity>

            <Image
              source={{ uri: images.chef }}
              style={styles.craftingImage}
              resizeMode="cover"
            />
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

          {/* SECTION 5 - CULINARY EXPERIENCE */}

          <View style={styles.plateSection}>
            <ImageBackground
              source={{ uri: images.food }}
              style={styles.plateBanner}
              imageStyle={styles.plateBannerImage}
            >
              <View style={styles.plateOverlay}>
                <Text style={styles.smallGoldHeading}>
                  THE ART OF FINE DINING
                </Text>

                <Text style={styles.plateTitle}>
                  Crafting Culinary{"\n"}
                  <Text style={styles.gold}>Royalty On Every Plate</Text>
                </Text>

                <Text style={styles.plateDescription}>
                  Every dish tells a story of passion, creativity and culinary
                  excellence.
                </Text>

                <TouchableOpacity
                  style={styles.goldButton}
                  onPress={() => router.push("/pages/menu")}
                >
                  <Text style={styles.goldButtonText}>
                    Discover Our Creations
                  </Text>
                  <Ionicons name="arrow-forward" size={14} color={BLACK} />
                </TouchableOpacity>
              </View>
            </ImageBackground>

            <View style={styles.plateContent}>
              <Image
                source={{ uri: images.chef }}
                style={styles.plateImage}
                resizeMode="cover"
              />

              <View style={styles.plateTextContent}>
                <Text style={styles.plateHeading}>
                  A Passion for Culinary Art
                </Text>

                <Text style={styles.paragraph}>
                  Our culinary team combines traditional inspiration with modern
                  techniques to create extraordinary flavours and memorable
                  dishes.
                </Text>

                <TouchableOpacity
                  style={styles.outlineButton}
                  onPress={() => router.push("/pages/about")}
                >
                  <Text style={styles.outlineButtonText}>
                    Meet Our Culinary Team
                  </Text>
                  <Ionicons name="arrow-forward" size={13} color={GOLD} />
                </TouchableOpacity>
              </View>
            </View>
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
    fontSize: 10,
    maxWidth: 240,
    // Text shadow
    textShadowColor: "rgba(0, 0, 0, 0.85)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },

  goldButton: {
    backgroundColor: GOLD,
    borderRadius: 22,
    paddingHorizontal: 4,
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  goldButtonText: {
    color: BLACK,
    fontSize: 8,
    fontWeight: "bold",
  },

  // FOOD PREFERENCE

  preferenceSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
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
    marginTop: 7,
    marginBottom: 17,
  },

  preferenceContainer: {
    flexDirection: "row",
    gap: 12,
  },

  preferenceCard: {
    flex: 1,
    minHeight: 72,
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
    width: 19,
    height: 19,
    borderWidth: 1.5,
    borderColor: "#35C759",
    alignItems: "center",
    justifyContent: "center",
  },

  vegDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#35C759",
  },

  nonVegIconContainer: {
    width: 19,
    height: 19,
    borderWidth: 1.5,
    borderColor: "#F04444",
    alignItems: "center",
    justifyContent: "center",
  },

  nonVegDot: {
    width: 9,
    height: 9,
    backgroundColor: "#F04444",
    borderRadius: 5,
  },

  preferenceButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  selectedIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },

  continueButton: {
    backgroundColor: GOLD,
    height: 43,
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
    fontSize: 11,
    fontWeight: "bold",
  },

  // OUR STORY

  craftingSection: {
    paddingHorizontal: 17,
    paddingTop: 22,
    paddingBottom: 22,
  },

  sectionTag: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "center",
    marginBottom: 10,
  },

  tagText: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 32,
    marginBottom: 12,
    textAlign: "center",
  },

  paragraph: {
    color: "#BDBDBD",
    fontSize: 10,
    lineHeight: 18,
    marginBottom: 9,
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  outlineButtonText: {
    color: GOLD,
    fontSize: 9,
    fontWeight: "600",
  },

  craftingImage: {
    width: "100%",
    height: 190,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#665500",
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

  // PLATE SECTION

  plateSection: {
    paddingTop: 8,
  },

  plateBanner: {
    height: 210,
    justifyContent: "center",
  },

  plateBannerImage: {
    resizeMode: "cover",
  },

  plateOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  plateTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 28,
  },

  plateDescription: {
    color: "#DDDDDD",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 9,
  },

  plateContent: {
    padding: 16,
  },

  plateImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#665500",
  },

  plateTextContent: {
    paddingTop: 15,
  },

  plateHeading: {
    color: GOLD,
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginBottom: 9,
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
