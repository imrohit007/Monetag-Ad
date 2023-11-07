import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Notix from 'notix-rn';
import React, { useEffect } from 'react';

export default function App() {
  let interstitialLoader;

  useEffect(() => {
    loadInterstitial();

    initializePushNotifications();
  }, []);

  const loadInterstitial = async () => {
    interstitialLoader = await Notix.Interstitial.createLoader(###########);
    interstitialLoader.startLoading();

    try {
      var interstitialData = await interstitialLoader.next(5000);
    } catch (Exception) {
      return;
    }

    Notix.Interstitial.show(interstitialData);
  };

  const initializePushNotifications = () => {
    const notixAppId = '#########';
    const notixToken = '################';

    Notix.Notification.init(notixAppId, notixToken);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testing Monetag Ad Code</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      fontSize: 20,
      fontWeight: 'bold'
  }
});
