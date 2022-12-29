# Read Me First

CarShopping App

This project is developed using the latest react native version 0.70.6

# Getting Started

Checkout the project in your local machine.

Make sure you have Xcode and Android Studio installed in your local machine. I have used Xcode 13.4.1 and Android Studio Chipmunk on m1 Macbook to develop this project.

Node version installed on machine at the time of development : Node v19.3.0

Go to the root directory of project and install dependencies mentioned in package.json using npm install.

Go to ios directory and install pod dependencies using pod install.

Execute below command to link Google Nunito fonts used in App
npx react-native-asset

Make sure Java Microservices project is setup and running on localhost:8080

Run ios project using simulator: npx react-native run-ios.

Connect Android device to your machine and check if its connected and available on Android Studio.

Execute command adb reverse tcp:8080 tcp:8080 to be able to access backend microservices hosted on localhost.

Run android project on connected android device: npx react-native run-android


# Other Information

Make sure your local machine has proper ruby version which is required by React Native. I have used ruby version 2.7.6






