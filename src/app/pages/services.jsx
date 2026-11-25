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
import { router, useLocalSearchParams } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
  wedding: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
  privateDining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  corporate:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
  catering: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900",
  restaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  buffet: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  event: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
  hospitality:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
};

const customerReviews = [
  {
    name: "Priya Sharma",
    role: "Wedding Event",
    rating: 5,
    title: "Excellent Food Quality!",
    review:
      "The food was absolutely delicious. Every dish was fresh, perfectly prepared, and beautifully presented.",
    category: "Food Quality",
  },
  {
    name: "Rahul Mehta",
    role: "Corporate Event",
    rating: 5,
    title: "Outstanding Service",
    review:
      "The staff were extremely professional, friendly, and attentive. Everything was managed perfectly.",
    category: "Staff Service",
  },
  {
    name: "Ananya Das",
    role: "Family Celebration",
    rating: 5,
    title: "Very Clean & Hygienic",
    review:
      "We were impressed by the cleanliness and hygiene standards. The food preparation and serving were excellent.",
    category: "Hygiene",
  },
  {
    name: "Arjun Kapoor",
    role: "Private Party",
    rating: 4,
    title: "Beautiful Presentation",
    review:
      "Amazing presentation, delicious flavours, and a wonderful overall catering experience.",
    category: "Presentation",
  },
  {
    name: "Sneha Roy",
    role: "Wedding Reception",
    rating: 5,
    title: "Highly Recommended!",
    review:
      "From the first interaction to the final service, everything was smooth. Our guests loved the food!",
    category: "Overall Experience",
  },
];

const services = [
  {
    icon: "restaurant-outline",
    title: "Restaurant Dining",
    description:
      "Enjoy delicious cuisine, elegant surroundings and exceptional dining experiences with family and friends.",
    image: images.restaurant,
  },
  {
    icon: "heart-outline",
    title: "Grand Wedding & Events",
    description:
      "Make your special celebrations unforgettable with royal dining and premium catering services.",
    image: images.wedding,
  },
  {
    icon: "restaurant-outline",
    title: "Private Chef & Fine Dining",
    description:
      "Enjoy personalized dining experiences prepared by our expert culinary team.",
    image: images.privateDining,
  },
  {
    icon: "business-outline",
    title: "Corporate Banquets",
    description:
      "Elegant dining arrangements for corporate meetings, conferences and business occasions.",
    image: images.corporate,
  },
  {
    icon: "calendar-outline",
    title: "Luxury Catering",
    description:
      "Exceptional food, presentation and hospitality for every special occasion.",
    image: images.catering,
  },
  {
    icon: "fast-food-outline",
    title: "Buffet Services",
    description:
      "Delight your guests with beautifully presented buffet arrangements and diverse menu options.",
    image: images.buffet,
  },
  {
    icon: "people-outline",
    title: "Event Catering",
    description:
      "Professional food and hospitality arrangements for private parties and large gatherings.",
    image: images.event,
  },
  {
    icon: "star-outline",
    title: "Premium Hospitality",
    description:
      "Experience personalized attention, elegant service and memorable moments for every guest.",
    image: images.hospitality,
  },
];

const guestOptions = ["100", "250", "500", "1000"];

export default function Services() {
  const { guests } = useLocalSearchParams();

  const selectedGuests = Array.isArray(guests) ? guests[0] : guests;

  const [bookingGuests, setBookingGuests] = useState(
    guestOptions.includes(String(selectedGuests))
      ? String(selectedGuests)
      : "100",
  );

  const openContact = (service = "Catering Service") => {
    router.push({
      pathname: "/pages/contact",
      params: {
        service,
        guests: bookingGuests,
      },
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
          {/* PAGE HEADING */}
          <View style={styles.heading}>
            <Text style={styles.smallTitle}>THE ROYAL KITCHEN & CATERER</Text>

            <Text style={styles.title}>Our Services</Text>

            <View style={styles.goldLine} />

            <Text style={styles.subtitle}>
              Explore our premium catering services and royal hospitality.
            </Text>
          </View>

          {/* SECTION 1 - HERO BANNER */}
          <View style={styles.heroWrapper}>
            <ImageBackground
              source={{ uri: images.hero }}
              style={styles.hero}
              imageStyle={styles.heroImage}
            >
              <View style={styles.heroOverlay}>

                <Text style={styles.heroTitle}>
                  Our Regal <Text style={styles.gold}>Culinary</Text>
                  {"\n"}Services
                </Text>

                <Text style={styles.heroDescription}>Experience royal hospitality & exceptional dining for every occasion.
                </Text>

                <TouchableOpacity
                  style={styles.goldButton}
                  activeOpacity={0.85}
                  onPress={() => openContact("Catering Service")}
                >
                  <Text style={styles.goldButtonText}>Enquire Now</Text>
                  <Ionicons name="arrow-forward" size={13} color={BLACK} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* SECTION 2 - INTRODUCTION */}
          <View style={styles.introSection}>

            <Text style={styles.smallGoldHeading}>OUR EXCLUSIVE SERVICES</Text>

            <Text style={styles.sectionTitle}>
              Explore Our Luxury & Royal{"\n"}
              <Text style={styles.gold}>Culinary Services</Text>
            </Text>

            <Text style={styles.paragraphCenter}>
              Exceptional food, elegant presentation and royal hospitality for every occasion.
            </Text>
          </View>

          {/* SECTION 3 - INTERACTIVE CATERING BOOKING */}
          <View style={styles.bookingSection}>
            <Text style={styles.smallGoldHeading}>PLAN YOUR CATERING</Text>

            <Text style={styles.bookingTitle}>
              Select Your <Text style={styles.gold}>Guest Capacity</Text>
            </Text>

            <Text style={styles.bookingDescription}>
              Choose the expected number of guests for your catering
              arrangement.
            </Text>

            <View style={styles.guestOptions}>
              {guestOptions.map((count) => {
                const isSelected = bookingGuests === count;

                return (
                  <TouchableOpacity
                    key={count}
                    activeOpacity={0.8}
                    style={[
                      styles.guestOption,
                      isSelected && styles.guestOptionActive,
                    ]}
                    onPress={() => setBookingGuests(count)}
                  >
                    <Ionicons
                      name="people-outline"
                      size={20}
                      color={isSelected ? BLACK : GOLD}
                    />

                    <Text
                      style={[
                        styles.guestOptionText,
                        isSelected && styles.guestOptionTextActive,
                      ]}
                    >
                      {Number(count).toLocaleString("en-IN")}
                    </Text>

                    <Text
                      style={[
                        styles.guestLabel,
                        isSelected && styles.guestLabelActive,
                      ]}
                    >
                      Guests
                    </Text>

                    {isSelected && (
                      <Ionicons
                        name="checkmark-circle"
                        size={15}
                        color={BLACK}
                        style={styles.selectedCheck}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* LIVE BOOKING SUMMARY */}
            <View style={styles.bookingSummary}>
              <View>
                <Text style={styles.summaryLabel}>YOUR BOOKING CAPACITY</Text>

                <Text style={styles.summaryCount}>
                  {Number(bookingGuests).toLocaleString("en-IN")} Guests
                </Text>
              </View>

              <TouchableOpacity
                style={styles.summaryButton}
                activeOpacity={0.85}
                onPress={() => openContact("Catering Service")}
              >
                <Text style={styles.summaryButtonText}>Book Now</Text>

                <Ionicons name="arrow-forward" size={13} color={BLACK} />
              </TouchableOpacity>
            </View>
          </View>

          {/* SECTION 4 - SERVICE CARDS */}
          <View style={styles.servicesSection}>
            <View style={styles.servicesHeading}>
              <Text style={styles.smallGoldHeading}>WHAT WE OFFER</Text>

              <Text style={styles.servicesTitle}>Our Premium Services</Text>
            </View>

            <View style={styles.servicesGrid}>
              {services.map((item, index) => (
                <View style={styles.serviceCard} key={index}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.serviceImage}
                    resizeMode="cover"
                  />

                  <View style={styles.serviceContent}>
                    <Ionicons name={item.icon} size={21} color={GOLD} />

                    <Text style={styles.serviceTitle}>{item.title}</Text>

                    <Text style={styles.serviceDescription}>
                      {item.description}
                    </Text>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.miniButton}
                      onPress={() => openContact(item.title)}
                    >
                      <Text style={styles.miniButtonText}>Enquire Now</Text>

                      <Ionicons name="arrow-forward" size={11} color={GOLD} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* SECTION 5 - CULINARY EXPERIENCE */}
          <View style={styles.experienceSection}>
            <ImageBackground
              source={{ uri: images.chef }}
              style={styles.experienceBanner}
              imageStyle={styles.experienceImage}
            >
              <View style={styles.experienceOverlay}>
                <Text style={styles.smallGoldHeading}>
                  THE ROYAL EXPERIENCE
                </Text>

                <Text style={styles.experienceTitle}>
                  Excellence in Every{"\n"}
                  <Text style={styles.gold}>Culinary Detail</Text>
                </Text>

                <Text style={styles.experienceDescription}>
                  Our expert chefs and dedicated hospitality team make every
                  occasion truly special.
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.goldButton}
                  onPress={() => openContact("Premium Catering")}
                >
                  <Text style={styles.goldButtonText}>Contact Our Team</Text>

                  <Ionicons name="arrow-forward" size={14} color={BLACK} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* SECTION 6 - WHY CHOOSE US */}
          <View style={styles.whySection}>
            <Text style={styles.smallGoldHeading}>
              WHY CHOOSE ROYAL KITCHEN
            </Text>

            <Text style={styles.whyTitle}>
              Creating Memorable{"\n"}
              <Text style={styles.gold}>Dining Experiences</Text>
            </Text>

            <View style={styles.featureGrid}>
              <View style={styles.featureCard}>
                <Ionicons name="restaurant-outline" size={22} color={GOLD} />

                <Text style={styles.featureTitle}>Quality Cuisine</Text>

                <Text style={styles.featureDescription}>
                  Carefully selected ingredients and exceptional flavours.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons name="people-outline" size={22} color={GOLD} />

                <Text style={styles.featureTitle}>Expert Team</Text>

                <Text style={styles.featureDescription}>
                  Experienced chefs and dedicated hospitality professionals.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons name="star-outline" size={22} color={GOLD} />

                <Text style={styles.featureTitle}>Premium Service</Text>

                <Text style={styles.featureDescription}>
                  Personalized attention for every guest and occasion.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons name="heart-outline" size={22} color={GOLD} />

                <Text style={styles.featureTitle}>Royal Experience</Text>

                <Text style={styles.featureDescription}>
                  Memorable celebrations with elegant dining experiences.
                </Text>
              </View>
            </View>
          </View>

          {/* CUSTOMER REVIEWS */}
          <View style={styles.reviewsSection}>
            <Text style={styles.reviewsSubtitle}>CUSTOMER EXPERIENCES</Text>

            <Text style={styles.reviewsTitle}>
              What Our Customers <Text style={{ color: GOLD }}>Say</Text>
            </Text>

            <Text style={styles.reviewsDescription}>
              Real experiences that reflect our passion for great food and
              exceptional hospitality.
            </Text>

            <View style={styles.reviewsGrid}>
              {customerReviews.map((review, index) => (
                <View key={index} style={styles.reviewCard}>
                  <View style={styles.reviewTop}>
                    <View style={styles.reviewStars}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Ionicons
                          key={i}
                          name={i < review.rating ? "star" : "star-outline"}
                          size={15}
                          color={GOLD}
                        />
                      ))}
                    </View>

                    <Text style={styles.reviewRating}>{review.rating}.0/5</Text>
                  </View>

                  <Text style={styles.reviewHeading}>{review.title}</Text>

                  <Text style={styles.reviewText}>{review.review}</Text>

                  <View style={styles.reviewCategory}>
                    <Text style={styles.reviewCategoryText}>
                      {review.category}
                    </Text>
                  </View>

                  <View style={styles.reviewDivider} />

                  <View style={styles.reviewCustomer}>
                    <View style={styles.reviewAvatar}>
                      <Text style={styles.reviewAvatarText}>
                        {review.name.charAt(0)}
                      </Text>
                    </View>

                    <View>
                      <Text style={styles.reviewName}>{review.name}</Text>
                      <Text style={styles.reviewRole}>{review.role}</Text>
                    </View>

                    <Ionicons
                      name="checkmark-circle"
                      size={18}
                      color={GOLD}
                      style={{ marginLeft: "auto" }}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>

        <Navbar active="services" />
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
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
  },

  // HERO BANNER
  heroWrapper: {
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 5,
    borderWidth: 1.8,
    borderColor: "#cca402",
    borderRadius: 12,
    overflow: "hidden",
  },

  hero: {
    height: 180,
    width: "100%",
    justifyContent: "center",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.68)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 31,
  },

  gold: {
    color: GOLD,
  },

  heroDescription: {
    color: "#E0E0E0",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 14,
    maxWidth: 260,
    marginTop: 8,
  },

  goldButton: {
    backgroundColor: GOLD,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  goldButtonText: {
    color: BLACK,
    fontSize: 12,
    fontWeight: "bold",
  },

  // INTRODUCTION
  introSection: {
    paddingHorizontal: 17,
    paddingTop: 25,
    paddingBottom: 18,
  },

  smallGoldHeading: {
    color: GOLD,
    fontSize: 14,
    letterSpacing: 1.2,
    textAlign: "center",
    marginBottom: 6,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    textAlign: "center",
  },

  paragraphCenter: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 10,
    paddingHorizontal: 8,
  },

  // CATERING BOOKING SECTION
  bookingSection: {
    marginHorizontal: 13,
    marginTop: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 10,
  },

  bookingTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
  },

  bookingDescription: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 8,
  },

  guestOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 14,
  },

  guestOption: {
    width: "48%",
    minHeight: 88,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    position: "relative",
    backgroundColor: BLACK,
  },

  guestOptionActive: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },

  guestOptionText: {
    color: GOLD,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
  },

  guestOptionTextActive: {
    color: BLACK,
  },

  guestLabel: {
    color: "#AAAAAA",
    fontSize: 16,
    marginTop: 2,
  },

  guestLabelActive: {
    color: BLACK,
  },

  selectedCheck: {
    position: "absolute",
    top: 6,
    right: 6,
  },

  bookingSummary: {
    marginTop: 18,
    padding: 12,
    backgroundColor: "#080808",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#554700",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  summaryLabel: {
    color: "#AAAAAA",
    fontSize: 10,
    letterSpacing: 1,
  },

  summaryCount: {
    color: GOLD,
    fontSize: 18,
    fontWeight: "bold",
    // marginTop: 5,
  },

  summaryButton: {
    backgroundColor: GOLD,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  summaryButtonText: {
    color: BLACK,
    fontSize: 16,
    fontWeight: "bold",
  },

  // SERVICE CARDS
  servicesSection: {
    paddingHorizontal: 13,
    paddingTop: 8,
    paddingBottom: 20,
  },

  servicesHeading: {
    marginBottom: 15,
  },

  servicesTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
  },

  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },

  serviceCard: {
    width: "48.5%",
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 8,
    overflow: "hidden",
  },

  serviceImage: {
    width: "100%",
    height: 160,
  },

  serviceContent: {
    padding: 9,
  },

  serviceTitle: {
    color: GOLD,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 20,
    marginTop: 6,
    minHeight: 30,
  },

  serviceDescription: {
    color: "#AAAAAA",
    fontSize: 12,
    lineHeight: 12,
    marginTop: 5,
    minHeight: 48,
  },

  miniButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    marginTop: 9,
  },

  miniButtonText: {
    color: GOLD,
    fontSize: 8,
    textAlign: "center",
  },

  // EXPERIENCE BANNER
  experienceSection: {
    paddingTop: 8,
  },

  experienceBanner: {
    height: 215,
    justifyContent: "center",
  },

  experienceImage: {
    resizeMode: "cover",
  },

  experienceOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  experienceTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 28,
  },

  experienceDescription: {
    color: "#DDDDDD",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 9,
  },

  // WHY CHOOSE US
  whySection: {
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 20,
  },

  whyTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 27,
    marginBottom: 17,
  },

  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },

  featureCard: {
    width: "48%",
    minHeight: 115,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 7,
    padding: 10,
  },

  featureTitle: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 5,
  },

  featureDescription: {
    color: "#AAAAAA",
    fontSize: 8,
    lineHeight: 13,
  },

  bottomSpace: {
    height: 10,
  },

  reviewsSection: {
    paddingHorizontal: 20,
    marginTop: 35,
    marginBottom: 35,
  },

  reviewsSubtitle: {
    color: GOLD,
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  reviewsTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },

  reviewsDescription: {
    color: "#999999",
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 22,
  },

  reviewsGrid: {
    gap: 14,
  },

  reviewCard: {
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#292929",
    borderRadius: 16,
    padding: 17,
  },

  reviewTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  reviewStars: {
    flexDirection: "row",
    gap: 3,
  },

  reviewRating: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "700",
  },

  reviewHeading: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 15,
  },

  reviewText: {
    color: "#AAAAAA",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 8,
  },

  reviewCategory: {
    alignSelf: "flex-start",
    backgroundColor: "#242017",
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 13,
  },

  reviewCategoryText: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "600",
  },

  reviewDivider: {
    height: 1,
    backgroundColor: "#303030",
    marginVertical: 14,
  },

  reviewCustomer: {
    flexDirection: "row",
    alignItems: "center",
  },

  reviewAvatar: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: "#302819",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  reviewAvatarText: {
    color: GOLD,
    fontSize: 16,
    fontWeight: "700",
  },

  reviewName: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  reviewRole: {
    color: "#888888",
    fontSize: 11,
    marginTop: 3,
  },
});
