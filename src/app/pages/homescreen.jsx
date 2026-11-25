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
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbar from "../components/navbar";

import logo from "../../../assets/images/icon.png";
import heroImage from "../../../assets/images/hero.jpeg";
import ExceptionalIngredients from "../../../assets/images/ExceptionalIngredients.jpeg";
import ChefImage from "../../../assets/images/chef.jpeg";
import hospitality from "../../../assets/images/hospitality.jpeg";
import experience from "../../../assets/images/experience.jpeg";
import catering from "../../../assets/images/catering.jpg";

// Food Images Importing

import homeParty from "../../../assets/images/homeParty.webp";
import snacks from "../../../assets/images/snacks.webp";
import biryaniCombo from "../../../assets/images/biryaniCombo.webp";
import DumBiyani from "../../../assets/images/dumbiryani.jpg";
import FishCurry from "../../../assets/images/FishCurry.jpeg";
import DalMakhni from "../../../assets/images/DalMakhni.jpeg";
import paneer from "../../../assets/images/paneer.jpeg";
import vegBiryani from "../../../assets/images/vegBiryani.jpeg";
import chickenbiryani from "../../../assets/images/chickenbiryani.jpg";
import paneertikka from "../../../assets/images/paneer-tikka.jpg";
import butterChicken from "../../../assets/images/butterChicken.jpg";
import VegMomo from "../../../assets/images/veg-momo.jpg";
import burger from "../../../assets/images/burger.jpg";
import chocolateCake from "../../../assets/images/chocolate-lave-cake.jpg";
import IceCream from "../../../assets/images/iceCream.jpg";
import pizza from "../../../assets/images/pizza.jpg";
import CreameToast from "../../../assets/images/creameToast.jpg";
import kashmiriRogan from "../../../assets/images/kashmiriRogan.jpg";
import lunchCombo from "../../../assets/images/lunchCombo.jpg";
import VegThali from "../../../assets/images/vegThali.jpg";
import samosa from "../../../assets/images/samosa.jpg";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const images = {
  hero: heroImage,
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
    image: paneer,
  },
  {
    id: "2",
    name: "Veg Biryani",
    mode: "veg",
    image: vegBiryani,
  },
  {
    id: "3",
    name: "Chicken",
    mode: "non-veg",
    image: chickenbiryani,
  },
  {
    id: "4",
    name: "Butter Chicken",
    mode: "non-veg",
    image: butterChicken,
  },
  {
    id: "5",
    name: "Dal Makhani",
    mode: "veg",
    image: DalMakhni,
  },
  {
    id: "6",
    name: "Fish Curry",
    mode: "non-veg",
    image: FishCurry,
  },
  {
    id: "7",
    name: "Burger",
    mode: "veg",
    image: burger,
  },
  {
    id: "8",
    name: "Pizza",
    mode: "veg",
    image: pizza,
  },
];

const chefSpecials = [
  {
    id: "1",
    name: "Paneer Tikka",
    description: "Smoky grilled paneer with Indian spices",
    price: "₹369",
    image: paneertikka,
    mode: "non-veg",
  },
  {
    id: "2",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with tender chicken",
    price: "₹499",
    image: chickenbiryani,
    mode: "non-veg",
  },
  {
    id: "3",
    name: "Veg Momo",
    description: "Delicious vegetarian dumplings",
    price: "₹244",
    image: VegMomo,
    mode: "veg",
    bestseller: true,
    offer: true,
    discount: 20,
  },
  {
    id: "4",
    name: "Butter Chicken",
    description: "Creamy tomato gravy with juicy chicken",
    price: "₹429",
    image: butterChicken,
    mode: "non-veg",
  },
  {
    id: "5",
    name: "Burger",
    description: "Creamy tomato gravy with juicy Meyonese",
    price: "₹129",
    image: burger,
    mode: "veg",
  },
  {
    id: "6",
    name: "Chocolate Cake",
    description: "Delicious chocolate cake with creamy frosting",
    price: "₹89",
    image: chocolateCake,
    mode: "non-veg",
  },
  {
    id: "7",
    name: "Ice Cream",
    description: "Creamy vanilla ice cream with chocolate sauce",
    price: "₹179",
    image: IceCream,
    mode: "veg",
  },
  {
    id: "8",
    name: "Cheese Pizza",
    description: "Delicious pizza with creamy cheese & toppings",
    price: "₹239",
    image: pizza,
    mode: "veg",
    offer: true,
    discount: 15,
  },
  {
    id: "9",
    name: "Kashmiri Rogan",
    description: "Delicious Rogan with creamy cheese & mutton",
    price: "₹589",
    image: kashmiriRogan,
    mode: "non-veg",
  },
  {
    id: "10",
    name: "Creame Toast",
    description: "Delicious cream toast with butter and jam",
    price: "₹129",
    image: CreameToast,
    mode: "veg",
  },
  {
    id: "11",
    name: "Lunch Combo",
    description: "Delicious Rice, Dal, Roti, Salad, & Dessert",
    price: "₹739",
    image: lunchCombo,
    mode: "veg",
  },
  {
    id: "12",
    name: "Veg Thali",
    description: "Delicious vegetarian thali with roti, dal, and dessert",
    price: "₹829",
    image: VegThali,
    mode: "veg",
  },
  {
    id: "13",
    name: "Samosa",
    description: "Crispy fried pastry with spiced potatoes",
    price: "₹186",
    image: samosa,
    mode: "veg",
    offer: true,
    discount: 10,
  },
];

const excellenceFeatures2 = [
  {
    icon: "restaurant-outline",
    title: "Exceptional Ingredients",
    description: "Precious Ingredients for remarkable flavours.",
    image: ExceptionalIngredients,
  },
  {
    icon: "people-outline",
    title: "Expert Culinary Team",
    description: "Creative chefs bringing passion to every plate.",
    image: ChefImage,
  },
  {
    icon: "star-outline",
    title: "Premium Hospitality",
    description: "Personalized service for every guest.",
    image: hospitality,
  },
  {
    icon: "heart-outline",
    title: "Unforgettable Experiences",
    description: "Beautifully moments for every occasion.",
    image: experience,
  },
];

const royalFeatures = [
  {
    id: "quality",
    title: "Premium Quality",
    subtitle: "Fresh ingredients",
    description:
      "We carefully select fresh ingredients and prepare every dish with attention to taste and quality.",
    icon: "leaf-outline",
  },
  {
    id: "chefs",
    title: "Expert Chefs",
    subtitle: "Masterful cooking",
    description:
      "Our skilled chefs bring authentic flavours and creativity to every meal.",
    icon: "restaurant-outline",
  },
  {
    id: "service",
    title: "Royal Service",
    subtitle: "Hospitality first",
    description:
      "Enjoy warm hospitality and a memorable experience every time you dine with us.",
    icon: "people-outline",
  },
  {
    id: "events",
    title: "Catering Events",
    subtitle: "Every occasion",
    description:
      "From weddings to birthdays and corporate events, we make every celebration special.",
    icon: "calendar-outline",
  },
];

export default function HomeScreen() {
  const [vegMode, setVegMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFoodTab, setActiveFoodTab] = useState("All");

  // Open the selected food or combo on the details screen.
  const openFoodDetails = (item) => {
    router.push({
      pathname: "/pages/viewdetails",
      params: {
        id: String(item.id || item.name),
        name: item.name,
        description: item.description || "",
        price: String(item.price || ""),
        mode: item.mode || "",
      },
    });
  };

  const searchText = searchQuery.trim().toLowerCase();
  const isSearching = searchText.length > 0;

  // Royal Catering Experience
  const [selectedGuestCount, setSelectedGuestCount] = useState(null);

  const guestOptions = ["100+", "250+", "500+", "1000+"];

  // Search actual food items and respect the active Veg Mode.
  const searchResults = chefSpecials.filter(
    (item) =>
      (!vegMode || item.mode === "veg") &&
      (item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)),
  );

  const visibleCategories = foodCategories.filter(
    (item) =>
      (!vegMode || item.mode === "veg") &&
      item.name.toLowerCase().includes(searchText),
  );

  const visibleSpecials = chefSpecials.filter(
    (item) =>
      (!vegMode || item.mode === "veg") &&
      (item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)),
  );

  const quickTabs = ["All", "Under ₹199", "Bestsellers", "Combos", "Offers"];

  const filteredSpecials = visibleSpecials.filter((item) => {
    switch (activeFoodTab) {
      case "Under ₹199":
        return Number(item.price.replace(/[^0-9.]/g, "")) < 200;
      case "Bestsellers":
        return item.bestseller === true;
      case "Chef's Specials":
        return true;
      case "Veg Only":
        return item.mode === "veg";
      case "Combos":
        return item.name.toLowerCase().includes("combo");
      case "Offers":
        return item.offer === true;
      default:
        return true;
    }
  });

  const [activeFeature, setActiveFeature] = useState("quality");

  const selectedFeature = royalFeatures.find(
    (item) => item.id === activeFeature,
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>

            <View style={styles.nearby}>
              <TouchableOpacity
                style={[styles.vegModeButton, vegMode && styles.vegModeActive]}
                activeOpacity={0.8}
                onPress={() => setVegMode((prev) => !prev)}
              >
                <View style={styles.vegModeIndicator}>
                  <View style={styles.vegModeDot} />
                </View>

                <Text
                  style={[
                    styles.vegModeText,
                    vegMode && styles.vegModeTextActive,
                  ]}
                >
                  VEG
                </Text>

                <View
                  style={[styles.vegSwitch, vegMode && styles.vegSwitchActive]}
                >
                  <View
                    style={[
                      styles.vegSwitchThumb,
                      vegMode && styles.vegSwitchThumbActive,
                    ]}
                  />
                </View>
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

          {/* FOOD SEARCH BAR */}

          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={21} color={GOLD} />

            <TextInput
              style={styles.searchInput}
              placeholder="Search your favourite food..."
              placeholderTextColor="#888888"
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType="search"
              autoCorrect={false}
            />

            {searchQuery.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearchQuery("")}
                activeOpacity={0.7}
              >
                <Ionicons name="close-circle" size={20} color="#999999" />
              </TouchableOpacity>
            )}
          </View>

          {/* SEARCH RESULTS - SHOWN DIRECTLY BELOW THE SEARCH BAR */}

          {isSearching ? (
            <View style={styles.searchResultsSection}>
              <View style={styles.searchResultsHeader}>
                <View>
                  <Text style={styles.categoryTitle}>Search Results</Text>
                  <Text style={styles.categorySubtitle}>
                    Results for "{searchQuery.trim()}"
                  </Text>
                </View>

                <Text style={styles.searchResultCount}>
                  {searchResults.length}{" "}
                  {searchResults.length === 1 ? "dish" : "dishes"}
                </Text>
              </View>

              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.searchResultCard}
                    activeOpacity={0.85}
                    onPress={() => openFoodDetails(item)}
                  >
                    <Image
                      source={item.image}
                      style={styles.searchResultImage}
                      resizeMode="cover"
                    />

                    <View style={styles.searchResultInfo}>
                      <Text style={styles.searchResultName} numberOfLines={1}>
                        {item.name}
                      </Text>

                      <Text
                        style={styles.searchResultDescription}
                        numberOfLines={2}
                      >
                        {item.description}
                      </Text>

                      <View style={styles.searchResultPriceRow}>
                        {item.offer ? (
                          <>
                            <Text style={styles.searchResultPrice}>
                              ₹
                              {Math.round(
                                Number(item.price.replace(/[^0-9.]/g, "")) *
                                  (1 - item.discount / 100),
                              )}
                            </Text>

                            <Text style={styles.searchResultOriginalPrice}>
                              {item.price}
                            </Text>

                            <View style={styles.searchResultOffer}>
                              <Text style={styles.searchResultOfferText}>
                                {item.discount}% OFF
                              </Text>
                            </View>
                          </>
                        ) : (
                          <Text style={styles.searchResultPrice}>
                            {item.price}
                          </Text>
                        )}
                      </View>
                    </View>

                    <Ionicons name="chevron-forward" size={20} color={GOLD} />
                  </TouchableOpacity>
                ))
              ) : (
                <View style={styles.searchNoResults}>
                  <Ionicons name="search-outline" size={34} color="#777777" />

                  <Text style={styles.searchNoResultsTitle}>
                    No food items found
                  </Text>

                  <Text style={styles.searchNoResultsText}>
                    Try another food name
                    {vegMode ? " or turn off Veg Mode" : ""}.
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <>
              {/* HERO BANNER */}

              <ImageBackground
                source={images.hero}
                style={styles.heroBanner}
                imageStyle={styles.heroImage}
              >
                <View style={styles.heroOverlay}>
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
                    onPress={() => router.push("/pages/booking")}
                  >
                    <Text style={styles.goldButtonText}>Reserve Table</Text>
                    <Ionicons name="arrow-forward" size={14} color={BLACK} />
                  </TouchableOpacity>
                </View>
              </ImageBackground>

              {/* QUICK FOOD DISCOVERY TABS */}

              <View style={styles.quickTabsSection}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.quickTabsScroll}
                >
                  {quickTabs.map((tab) => (
                    <TouchableOpacity
                      key={tab}
                      activeOpacity={0.8}
                      style={[
                        styles.quickTab,
                        activeFoodTab === tab && styles.quickTabActive,
                      ]}
                      onPress={() => setActiveFoodTab(tab)}
                    >
                      <Text
                        style={[
                          styles.quickTabText,
                          activeFoodTab === tab && styles.quickTabTextActive,
                        ]}
                      >
                        {tab}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* EXPLORE OUR MENU */}

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
                    <Ionicons name="arrow-forward" size={14} color={GOLD} />
                  </TouchableOpacity>
                </View>

                {visibleCategories.length > 0 ? (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoryScroll}
                  >
                    {visibleCategories.map((item) => (
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
                            source={item.image}
                            style={styles.categoryImage}
                            resizeMode="cover"
                          />
                        </View>

                        <Text style={styles.categoryName} numberOfLines={1}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                ) : (
                  <Text style={styles.emptySearchText}>
                    No matching food categories found.
                  </Text>
                )}
              </View>

              {/* CHEF'S RECOMMENDATIONS */}

              <View style={styles.specialSection}>
                <View style={styles.categoryHeader}>
                  <View>
                    <Text style={styles.categoryTitle}>
                      Chef's Recommendations
                    </Text>
                    <Text style={styles.categorySubtitle}>
                      Handpicked recommendations from our kitchen
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

                {filteredSpecials.length > 0 ? (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.specialScroll}
                  >
                    {filteredSpecials.map((item) => (
                      <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.85}
                        style={styles.specialCard}
                        onPress={() => openFoodDetails(item)}
                      >
                        <View style={styles.specialImageContainer}>
                          <Image
                            source={item.image}
                            style={styles.specialImage}
                            resizeMode="cover"
                          />

                          {item.offer && (
                            <View style={styles.offerBadge}>
                              <Text style={styles.offerBadgeText}>
                                {item.discount}% OFF
                              </Text>
                            </View>
                          )}

                          <View style={styles.specialTag}>
                            <Text style={styles.specialTagText}>
                              {item.offer ? "SPECIAL OFFER" : "CHEF'S PICK"}
                            </Text>
                          </View>
                        </View>

                        <View style={styles.specialInfo}>
                          <Text style={styles.specialName} numberOfLines={1}>
                            {item.name}
                          </Text>

                          <Text
                            style={styles.specialDescription}
                            numberOfLines={2}
                          >
                            {item.description}
                          </Text>

                          <View style={styles.specialBottom}>
                            <View>
                              {item.offer ? (
                                <>
                                  <Text style={styles.originalPrice}>
                                    {item.price}
                                  </Text>

                                  <Text style={styles.specialPrice}>
                                    ₹
                                    {Math.round(
                                      Number(
                                        String(item.price ?? "0").replace(
                                          /[^0-9.]/g,
                                          "",
                                        ),
                                      ) *
                                        (1 -
                                          (Number(item.discount) || 0) / 100),
                                    )}
                                  </Text>
                                </>
                              ) : (
                                <Text style={styles.specialPrice}>
                                  {item.price}
                                </Text>
                              )}
                            </View>

                            <View style={styles.addButton}>
                              <Ionicons name="add" size={18} color={BLACK} />
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                ) : (
                  <Text style={styles.emptySearchText}>
                    No matching food items found.
                  </Text>
                )}
              </View>

              {/* SIGNATURE COMBOS */}
              <View style={styles.signatureSection}>
                <View style={styles.signatureHeader}>
                  <View>
                    <Text style={styles.signatureTitle}>Signature Combos</Text>
                    <Text style={styles.signatureSubtitle}>
                      Complete meals, specially curated by our chefs
                    </Text>
                  </View>

                  <TouchableOpacity>
                    <Text style={styles.signatureViewAll}>View All →</Text>
                  </TouchableOpacity>
                </View>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.signatureScroll}
                >
                  {[
                    {
                      name: "Veg Combo",
                      description: "Paneer, biryani & delicious sides",
                      price: 349,
                      image: VegThali,
                      mode: "veg",
                      offer: "19% OFF",
                    },
                    {
                      name: "Biryani Combo",
                      description: "Chicken biryani with royal sides",
                      price: 449,
                      image: biryaniCombo,
                      mode: "non-veg",
                      offer: "15% OFF",
                    },
                    {
                      name: "Spicy Snacks",
                      description: "Evening delicious snacks with sauce.",
                      price: 139,
                      image: snacks,
                      mode: "veg",
                      offer: "50%",
                    },
                    {
                      name: "Family Feast",
                      description: "A delicious feast for the whole family",
                      price: 899,
                      image: chefSpecials[10].image,
                      mode: "veg",
                      offer: "18% OFF",
                    },
                    {
                      name: "Home Party",
                      description: "Anger Chill feast combo for friends.",
                      price: 648,
                      image: homeParty,
                      mode: "non-veg",
                      offer: "8% OFF",
                    },
                  ]
                    .filter((item) => !vegMode || item.mode === "veg")
                    .map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={0.85}
                        style={styles.signatureCard}
                        onPress={() => openFoodDetails(item)}
                      >
                        <View style={styles.signatureImageContainer}>
                          <Image
                            source={item.image}
                            style={styles.signatureImage}
                          />

                          <View style={styles.signatureOffer}>
                            <Text style={styles.signatureOfferText}>
                              {item.offer}
                            </Text>
                          </View>
                        </View>

                        <View style={styles.signatureInfo}>
                          <Text
                            style={styles.signatureFoodName}
                            numberOfLines={1}
                          >
                            {item.name}
                          </Text>

                          <Text
                            style={styles.signatureDescription}
                            numberOfLines={2}
                          >
                            {item.description}
                          </Text>

                          <View style={styles.signaturePriceRow}>
                            <View>
                              <Text style={styles.signaturePrice}>
                                ₹{item.price}
                              </Text>
                            </View>

                            <View style={styles.signatureAddButton}>
                              <Ionicons
                                name="arrow-forward"
                                size={18}
                                color="#000000"
                              />
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>

              {/* ROYAL CATERING EXPERIENCE */}
              <View style={styles.eventSection}>
                <Text style={styles.eventEyebrow}>
                  ROYAL CATERING EXPERIENCE
                </Text>

                <Text style={styles.eventTitle}>Planning a Special Event?</Text>

                <Text style={styles.eventDescription}>
                  Tell us how many guests you're expecting. We'll help you plan
                  the perfect catering experience.
                </Text>

                <Text style={styles.guestHeading}>
                  How many guests are you expecting?
                </Text>

                <View style={styles.guestOptions}>
                  {guestOptions.map((guest) => {
                    const isSelected = selectedGuestCount === guest;

                    return (
                      <TouchableOpacity
                        key={guest}
                        activeOpacity={0.8}
                        style={[
                          styles.guestOption,
                          isSelected && styles.guestOptionSelected,
                        ]}
                        onPress={() => setSelectedGuestCount(guest)}
                      >
                        <Text
                          style={[
                            styles.guestOptionText,
                            isSelected && styles.guestOptionTextSelected,
                          ]}
                        >
                          {guest}
                        </Text>

                        <Text
                          style={[
                            styles.guestLabel,
                            isSelected && styles.guestLabelSelected,
                          ]}
                        >
                          Guests
                        </Text>

                        {isSelected && (
                          <Ionicons
                            name="checkmark-circle"
                            size={18}
                            color="#D4AF00"
                            style={styles.guestCheck}
                          />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>

                <TouchableOpacity
                  activeOpacity={0.85}
                  disabled={!selectedGuestCount}
                  style={[
                    styles.planEventButton,
                    !selectedGuestCount && styles.planEventButtonDisabled,
                  ]}
                  onPress={() =>
                    router.push({
                      pathname: "/pages/services",
                      params: {
                        guests: selectedGuestCount,
                      },
                    })
                  }
                >
                  <Text style={styles.planEventButtonText}>Plan My Event</Text>

                  <Ionicons name="arrow-forward" size={19} color="#000000" />
                </TouchableOpacity>

                <Text style={styles.guestHint}>
                  Choose your guest count to get started
                </Text>
              </View>

              {/* ROYAL EXPERIENCE SECTION */}
              <View style={styles.royalSection}>
                <Text style={styles.royalLabel}>DISCOVER OUR DIFFERENCE</Text>

                <Text style={styles.royalHeading}>The Royal Experience</Text>

                <Text style={styles.royalSubheading}>
                  More than food, it's an experience.
                </Text>

                {/* CLICKABLE FEATURE OPTIONS */}
                <View style={styles.featureOptions}>
                  {royalFeatures.map((item) => {
                    const isActive = activeFeature === item.id;

                    return (
                      <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.8}
                        onPress={() => setActiveFeature(item.id)}
                        style={[
                          styles.featureOption,
                          isActive && styles.featureOptionActive,
                        ]}
                      >
                        <Ionicons
                          name={item.icon}
                          size={23}
                          color={isActive ? GOLD : "#888888"}
                        />

                        <Text
                          style={[
                            styles.featureOptionText,
                            isActive && styles.featureOptionTextActive,
                          ]}
                        >
                          {item.title}
                        </Text>

                        {isActive && <View style={styles.activeIndicator} />}
                      </TouchableOpacity>
                    );
                  })}
                </View>

                {/* DYNAMIC FEATURE DETAILS */}
                <View style={styles.featureDetails}>
                  <View style={styles.featureIconLarge}>
                    <Ionicons
                      name={selectedFeature.icon}
                      size={34}
                      color={GOLD}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.featureDetailTitle}>
                      {selectedFeature.title}
                    </Text>

                    <Text style={styles.featureDetailSubtitle}>
                      {selectedFeature.subtitle}
                    </Text>

                    <Text style={styles.featureDescription}>
                      {selectedFeature.description}
                    </Text>
                  </View>

                  <Ionicons
                    name="arrow-forward-circle"
                    size={27}
                    color={GOLD}
                  />
                </View>

                <View style={styles.featureCounter}>
                  <Text style={styles.featureCounterText}>
                    {royalFeatures.findIndex(
                      (item) => item.id === activeFeature,
                    ) + 1}{" "}
                    / {royalFeatures.length}
                  </Text>
                  <Text style={styles.featureCounterText}>TAP TO EXPLORE</Text>
                </View>
              </View>

              {/* CULINARY EXCELLENCE */}

              <View style={styles.excellenceSection}>
                <Text style={styles.excellenceEyebrow}>
                  THE ROYAL EXPERIENCE
                </Text>

                <Text style={styles.excellenceTitle}>
                  A Legacy of Royal Dining &{"\n"}
                  <Text style={styles.gold}>Culinary Excellence</Text>
                </Text>

                <Text style={styles.paragraphCenter}>
                  Our values define every experience we create, from the first
                  ingredient to the final presentation.
                </Text>

                <View style={styles.excellenceGrid}>
                  {excellenceFeatures2.map((item) => (
                    <ImageBackground
                      key={item.title}
                      source={item.image}
                      style={styles.excellenceCard}
                      imageStyle={styles.excellenceCardImage}
                      resizeMode="cover"
                    >
                      <View style={styles.excellenceOverlay}>
                        <View style={styles.excellenceIconContainer}>
                          <Ionicons name={item.icon} size={23} color={GOLD} />
                        </View>

                        <View style={styles.excellenceCardContent}>
                          <Text style={styles.excellenceCardTitle}>
                            {item.title}
                          </Text>

                          <Text style={styles.excellenceCardDescription}>
                            {item.description}
                          </Text>
                        </View>

                        <View style={styles.excellenceCardLine} />
                      </View>
                    </ImageBackground>
                  ))}
                </View>
              </View>

              <View style={styles.bottomSpace} />
            </>
          )}
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
    height: 56,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#332B00",
  },

  logoContainer: {
    width: 46,
    height: 46,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  nearby: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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

  // VEG MODE

  vegModeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    height: 36,
    paddingHorizontal: 7,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#554700",
    backgroundColor: CARD,
  },

  vegModeActive: {
    borderColor: "#35C759",
    backgroundColor: "#0D1A10",
  },

  vegModeIndicator: {
    width: 13,
    height: 13,
    borderWidth: 1.3,
    borderColor: "#35C759",
    alignItems: "center",
    justifyContent: "center",
  },

  vegModeDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "#35C759",
  },

  vegModeText: {
    color: "#AAAAAA",
    fontSize: 12,
    fontWeight: "bold",
  },

  vegModeTextActive: {
    color: "#35C759",
  },

  vegSwitch: {
    width: 25,
    height: 14,
    borderRadius: 10,
    backgroundColor: "#555555",
    justifyContent: "center",
    padding: 2,
  },

  vegSwitchActive: {
    backgroundColor: "#35C759",
  },

  vegSwitchThumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },

  vegSwitchThumbActive: {
    alignSelf: "flex-end",
  },

  // SEARCH BAR

  searchContainer: {
    height: 46,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 2,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151515",
    borderWidth: 1.5,
    borderColor: "#554700",
    borderRadius: 10,
    gap: 10,
  },

  searchInput: {
    flex: 1,
    height: "100%",
    color: "#FFFFFF",
    fontSize: 14,
    paddingVertical: 0,
  },

  emptySearchText: {
    color: "#AAAAAA",
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },

  // SEARCH RESULTS

  searchResultsSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
    minHeight: 250,
  },

  searchResultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  searchResultCount: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "600",
  },

  searchResultCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#30280A",
    borderRadius: 12,
    padding: 10,
    marginBottom: 11,
    gap: 12,
  },

  searchResultImage: {
    width: 82,
    height: 82,
    borderRadius: 9,
    backgroundColor: "#222222",
  },

  searchResultInfo: {
    flex: 1,
    justifyContent: "center",
  },

  searchResultName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  searchResultDescription: {
    color: "#999999",
    fontSize: 11,
    lineHeight: 15,
    marginTop: 4,
  },

  searchResultPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 7,
  },

  searchResultPrice: {
    color: GOLD,
    fontSize: 16,
    fontWeight: "bold",
  },

  searchResultOriginalPrice: {
    color: "#888888",
    fontSize: 11,
    textDecorationLine: "line-through",
  },

  searchResultOffer: {
    backgroundColor: "#5A1717",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
  },

  searchResultOfferText: {
    color: "#FF7777",
    fontSize: 9,
    fontWeight: "bold",
  },

  searchNoResults: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 45,
    paddingHorizontal: 20,
  },

  searchNoResultsTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },

  searchNoResultsText: {
    color: "#999999",
    fontSize: 12,
    textAlign: "center",
    marginTop: 6,
  },

  // HERO BANNER

  heroBanner: {
    height: 160,
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

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
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
    textShadowColor: "rgba(0, 0, 0, 0.85)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },

  goldButton: {
    backgroundColor: GOLD,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  goldButtonText: {
    color: BLACK,
    fontSize: 13,
    fontWeight: "bold",
  },

  // QUICK FOOD DISCOVERY TABS

  quickTabsSection: {
    paddingTop: 14,
    paddingBottom: 8,
  },

  quickTabsScroll: {
    paddingHorizontal: 16,
    gap: 9,
    alignItems: "center",
  },

  quickTab: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 22,
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#3A3210",
    alignItems: "center",
    justifyContent: "center",
  },

  quickTabActive: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },

  quickTabText: {
    color: "#DDDDDD",
    fontSize: 14,
    fontWeight: "600",
  },

  quickTabTextActive: {
    color: BLACK,
    fontWeight: "bold",
  },

  // FOOD CATEGORIES

  foodCategorySection: {
    paddingTop: 5,
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
    fontSize: 18,
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
    gap: 5,
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
    fontSize: 14,
    width: 100,
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
    width: 200,
    backgroundColor: CARD,
    borderRadius: 13,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#292929",
  },

  specialImageContainer: {
    width: "100%",
    height: 105,
    position: "relative",
  },

  specialImage: {
    width: "100%",
    height: "100%",
  },

  offerBadge: {
    position: "absolute",
    top: 9,
    right: 9,
    backgroundColor: "#D62828",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },

  offerBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
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
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  specialInfo: {
    padding: 12,
  },

  specialName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  specialDescription: {
    color: "#999999",
    fontSize: 14,
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

  originalPrice: {
    color: "#888888",
    fontSize: 12,
    textDecorationLine: "line-through",
  },

  specialPrice: {
    color: GOLD,
    fontSize: 24,
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

  // Combo Signature

  signatureSection: {
    marginBottom: 12,
  },

  signatureHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 20,
  },

  signatureTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Georgia",
  },

  signatureSubtitle: {
    color: "#999999",
    fontSize: 11,
  },

  signatureViewAll: {
    color: "#D4AF00",
    fontSize: 15,
    fontWeight: "700",
  },

  signatureScroll: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    gap: 14,
  },

  signatureCard: {
    width: 150,
    backgroundColor: "#111111",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#292929",
  },

  signatureImageContainer: {
    height: 100,
    position: "relative",
  },

  signatureImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  signatureOffer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#D4AF00",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 5,
  },

  signatureOfferText: {
    color: "#000000",
    fontSize: 10,
    fontWeight: "bold",
  },

  signatureFoodType: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 19,
    height: 19,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  signatureInfo: {
    padding: 12,
  },

  signatureFoodName: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  signatureDescription: {
    color: "#999999",
    fontSize: 14,
    marginTop: 2,
    lineHeight: 16,
    minHeight: 32,
  },

  signaturePriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  signaturePrice: {
    color: "#D4AF00",
    fontSize: 24,
    fontWeight: "bold",
  },

  signatureAddButton: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#D4AF00",
    alignItems: "center",
    justifyContent: "center",
  },

  eventSection: {
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "#393020",
    borderRadius: 16,
    padding: 18,
    marginTop: 25,
    marginBottom: 20,
  },

  eventEyebrow: {
    color: "#D4AF00",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 1,
  },

  eventTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Georgia",
  },

  eventDescription: {
    color: "#AAAAAA",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 9,
  },

  guestHeading: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 23,
    marginBottom: 13,
  },

  guestOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  guestOption: {
    width: "48%",
    minHeight: 76,
    backgroundColor: "#1C1C1C",
    borderWidth: 1,
    borderColor: "#383838",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },

  guestOptionSelected: {
    borderColor: "#D4AF00",
    backgroundColor: "#29230D",
  },

  guestOptionText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
  },

  guestOptionTextSelected: {
    color: "#D4AF00",
  },

  guestLabel: {
    color: "#999999",
    fontSize: 14,
    marginTop: 3,
  },

  guestLabelSelected: {
    color: "#D4AF00",
  },

  guestCheck: {
    position: "absolute",
    top: 7,
    right: 7,
  },

  planEventButton: {
    backgroundColor: "#D4AF00",
    borderRadius: 9,
    paddingVertical: 15,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  planEventButtonDisabled: {
    opacity: 0.45,
  },

  planEventButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },

  guestHint: {
    color: "#777777",
    fontSize: 11,
    textAlign: "center",
    marginTop: 12,
  },

  royalSection: {
    paddingHorizontal: 18,
    paddingVertical: 28,
    backgroundColor: "#080808",
  },

  royalLabel: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: 9,
  },

  royalHeading: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Georgia",
  },

  royalSubheading: {
    color: "#999999",
    fontSize: 13,
    marginTop: 7,
    marginBottom: 22,
  },

  featureOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },

  featureOption: {
    width: "48%",
    minHeight: 85,
    backgroundColor: "#141414",
    borderWidth: 1,
    borderColor: "#292929",
    borderRadius: 12,
    padding: 12,
    justifyContent: "center",
    gap: 7,
  },

  featureOptionActive: {
    backgroundColor: "#211B08",
    borderColor: GOLD,
  },

  featureOptionText: {
    color: "#999999",
    fontSize: 12,
    fontWeight: "600",
  },

  featureOptionTextActive: {
    color: GOLD,
  },

  activeIndicator: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: GOLD,
  },

  featureDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    backgroundColor: "#151515",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#40350F",
    padding: 16,
    marginTop: 15,
  },

  featureIconLarge: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#29220C",
    justifyContent: "center",
    alignItems: "center",
  },

  featureDetailTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  featureDetailSubtitle: {
    color: GOLD,
    fontSize: 11,
    marginTop: 3,
  },

  featureDescription: {
    color: "#AAAAAA",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 8,
  },

  featureCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  featureCounterText: {
    color: "#777777",
    fontSize: 9,
    letterSpacing: 1,
  },

  // CULINARY EXCELLENCE

  excellenceSection: {
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 25,
  },

  excellenceEyebrow: {
    color: GOLD,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2.5,
    textAlign: "center",
    // marginBottom: 9,
  },

  excellenceTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 29,
  },

  paragraphCenter: {
    color: "#AAAAAA",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 8,
  },

  excellenceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },

  excellenceCard: {
    width: "48.5%",
    height: 190,
    borderRadius: 13,
    overflow: "hidden",
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
  },

  excellenceCardImage: {
    borderRadius: 12,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },

  excellenceOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.62)",
    padding: 12,
    justifyContent: "space-between",
  },

  excellenceIconContainer: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: "rgba(212,175,0,0.18)",
    borderWidth: 1,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  excellenceCardContent: {
    marginTop: "auto",
  },

  excellenceCardTitle: {
    color: GOLD,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 18,
    marginBottom: 6,
  },

  excellenceCardDescription: {
    color: "#FFFFFF",
    fontSize: 12,
    lineHeight: 18,
  },

  excellenceCardLine: {
    width: 65,
    height: 2,
    backgroundColor: GOLD,
    marginTop: 10,
  },

  bottomSpace: {
    height: 10,
  },
});
