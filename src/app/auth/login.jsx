
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

export default function LoginScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Frontend-only login navigation
  const handleLogin = () => {
    router.replace("/pages/homescreen");
  };

  const handleGoogleLogin = () => {
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

            {/* Actual App Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/images/icon.png")}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            {/* Heading */}
            <Text style={styles.heading}>
              The Royal Kitchen{"\n"}& Caterer
            </Text>

            {/* Login Form */}
            <View style={styles.formContainer}>

              {/* Username */}
              <Text style={styles.label}>
                Username or Number
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Alex Smith"
                  placeholderTextColor="#777777"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                />
              </View>

              {/* Password */}
              <Text style={styles.label}>
                Password
              </Text>

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
                  onSubmitEditing={handleLogin}
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

              <TouchableOpacity
                onPress={() => router.push("/auth/forgetpassword")}
              >
              <Text style={styles.ForgetPassword}>
                Forget Password?
              </Text>
              </TouchableOpacity>

              {/* Login Button */}
              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.8}
                onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>
                  Login
                </Text>
              </TouchableOpacity>

              {/* OR Divider */}
              <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.orLine} />
              </View>

              {/* Google Login */}
              <TouchableOpacity
                style={styles.googleButton}
                activeOpacity={0.8}
                onPress={handleGoogleLogin}
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

            {/* Register Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Are you New Guest ?
              </Text>

              <TouchableOpacity
                onPress={() => router.push("/auth/signup")}
              >
                <Text style={styles.registerText}>
                  Register Now
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
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  logoImage: {
    width: 120,
    height: 120,
  },

  heading: {
    color: GOLD,
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    textAlign: "center",
    lineHeight: 27,
    marginBottom: 27,
  },

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

  ForgetPassword:{
    color: GOLD,
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    marginBottom: 15,
    marginLeft: 2,
    alignSelf: "flex-end",
  },

  inputContainer: {
    width: "100%",
    height: 43,
    borderWidth: 1.3,
    borderColor: GOLD,
    borderRadius: 9,
    backgroundColor: DARK,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
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

  loginButton: {
    width: "100%",
    height: 43,
    backgroundColor: GOLD,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: "bold",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 19,
  },

  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#685900",
  },

  orText: {
    color: "#FFFFFF",
    fontSize: 13,
    marginHorizontal: 10,
  },

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

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
    gap: 4,
  },

  footerText: {
    color: "#CCCCCC",
    fontSize: 16,
  },

  registerText: {
    color: GOLD,
    fontSize: 16,
    fontWeight: "bold",
  },
});
