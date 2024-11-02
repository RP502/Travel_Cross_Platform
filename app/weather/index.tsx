import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "expo-router";
import { backNavigationOption } from "@/utils/BackNavigation";

const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Dong Ha,VN&units=metric&appid=6db3d3da7eaf765a170633fcf14b354b&lang=vi";

export default function App() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Thời tiết"));
  }, []);

  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!weatherData || weatherData.cod !== 200) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Không thể lấy dữ liệu thời tiết.</Text>
      </View>
    );
  }

  const { main, weather, name, sys } = weatherData;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;

  // Chuyển tên thành phố thành tiếng Việt nếu mã quốc gia là Việt Nam
  const cityName = sys.country === "VN" ? "Đông Hà" : name;

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.description}>{weatherDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  cityName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 48,
    color: "#ff6347",
  },
  description: {
    fontSize: 24,
    fontStyle: "italic",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
