
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const DARK = "#171717";

export default function SignupScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Frontend-only registration navigation
  const handleSignup = () => {
    router.replace("/pages/homescreen");
  };

  const handleGoogleSignup = () => {
    router.replace("/pages/homescreen");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>

            {/* Actual Royal Kitchen Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/images/icon.png")}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            {/* App Heading */}
            <Text style={styles.heading}>
              The Royal Kitchen & Caterer
            </Text>

            {/* Signup Form */}
            <View style={styles.formContainer}>

              {/* Full Name */}
              <Text style={styles.label}>Full Name</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Alex Smith"
                  placeholderTextColor="#777777"
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                  returnKeyType="next"
                />
              </View>

              {/* Email */}
              <Text style={styles.label}>Email</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="alexsmith@gmail.com"
                  placeholderTextColor="#777777"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                />
              </View>

              {/* Mobile Number */}
              <Text style={styles.label}>Mobile no.</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="+91 0101010101"
                  placeholderTextColor="#777777"
                  value={mobile}
                  onChangeText={setMobile}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                />
              </View>

              {/* Password */}
              <Text style={styles.label}>Password</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="xxxxxxxxx"
                  placeholderTextColor="#777777"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  returnKeyType="done"
                  onSubmitEditing={handleSignup}
                />

                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={17}
                    color="#888888"
                  />
                </TouchableOpacity>
              </View>

              {/* Register Button */}
              <TouchableOpacity
                style={styles.registerButton}
                activeOpacity={0.8}
                onPress={handleSignup}
              >
                <Text style={styles.registerButtonText}>
                  Register Now
                </Text>
              </TouchableOpacity>

              {/* OR Divider */}
              <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.orLine} />
              </View>

              {/* Google Signup */}
              <TouchableOpacity
                style={styles.googleButton}
                activeOpacity={0.8}
                onPress={handleGoogleSignup}
              >
                <FontAwesome5
                  name="google"
                  size={16}
                  color="#FFFFFF"
                />

                <Text style={styles.googleButtonText}>
                  Continue with Google
                </Text>
              </TouchableOpacity>

            </View>

            {/* Login Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Registered Guest ?
              </Text>

              <TouchableOpacity
                onPress={() => router.replace("/auth/login")}
              >
                <Text style={styles.loginText}>
                  Login Here
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: BLACK,
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },

  // Logo
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  logoImage: {
    width: 120,
    height: 120,
  },

  // Heading
  heading: {
    color: GOLD,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    textAlign: "center",
    lineHeight: 27,
    marginBottom: 23,
  },

  // Form
  formContainer: {
    width: "100%",
  },

  label: {
    color: GOLD,
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    marginBottom: 5,
    marginLeft: 2,
  },

  inputContainer: {
    width: "100%",
    height: 41,
    borderWidth: 1.3,
    borderColor: GOLD,
    borderRadius: 9,
    backgroundColor: DARK,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  input: {
    flex: 1,
    height: "100%",
    color: "#FFFFFF",
    fontSize: 14,
    paddingHorizontal: 12,
  },

  eyeButton: {
    paddingHorizontal: 12,
    height: "100%",
    justifyContent: "center",
  },

  // Register Button
  registerButton: {
    width: "100%",
    height: 43,
    backgroundColor: GOLD,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },

  registerButtonText: {
    color: BLACK,
    fontSize: 18,
    fontWeight: "bold",
  },

  // OR Divider
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 13,
  },

  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#685900",
  },

  orText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginHorizontal: 10,
  },

  // Google Button
  googleButton: {
    height: 43,
    width: "100%",
    borderWidth: 1.3,
    borderColor: GOLD,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  googleButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },

  // Footer
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
    gap: 4,
  },

  footerText: {
    color: "#CCCCCC",
    fontSize: 16,
  },

  loginText: {
    color: GOLD,
    fontSize: 16,
    fontWeight: "bold",
  },
});
