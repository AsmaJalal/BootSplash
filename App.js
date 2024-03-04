import React, { useEffect } from 'react';
import { Bootsplash } from 'react-native-bootsplash';
import { View, StyleSheet, Image } from 'react-native';

import Home from './Home';

// Define the SplashScreen component
const App = ({ navigation }) => {
  // useEffect hook to show the splash screen on component mount
  useEffect(() => {
    const init = async () => {
      try {
        // Perform any async tasks you need while the splash screen is shown
        await performAsyncTask();
        // Hide the splash screen when async tasks are done
        await Bootsplash.hide();
        // Navigate to HomeScreen after 5 seconds
        setTimeout(() => {
          // Check if navigation and navigation.navigate are defined before using them
          if (navigation && navigation.navigate) {
            navigation.navigate('Home');
          } else {
            console.error('Navigation object or navigate function is undefined.');
          }
        }, 5000);
      } catch (error) {
        console.error('Error initializing app:', error);
      }
    };

    // Call the init function
    init();
  }, [navigation]);

  // Function to simulate async tasks (replace this with your actual async tasks)
  const performAsyncTask = async () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000); // Simulating a 3-second async task
    });
  };

  // Return the JSX for the splash screen UI
  return (
    <View style={styles.container}>
      {/* Use the require method to load the image from the assets folder */}
      <Image source={require('./assets/logo.png')} style={styles.image} />
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust as needed
  },
  image: {
    width: '100%', // Adjust width as needed
    height: '100%', // Adjust height as needed
    resizeMode: 'contain', // Adjust image resizeMode as needed
  },
});

export default App;
