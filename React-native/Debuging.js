/**
 How to publish react native app in google play store
 Step 1. - Generate an Upload key -> File created with extension .keystore
 Step 2. - Setting Up Gradle Variables
          1. Place .keystore file in android/app directory 
          2. Edit gradle.properties files 
             keystore password  , key password and alias
 Step 3. - Adding signing config to your app's Gradle config
 Step 4. -  Generating the release AAB using this command :  npx react-native build-android --mode=release 
            it will create a apk in this root android/app/build/outputs/bundle/release/app-release.aab
 Step 5. -  Enabling Proguard using this-   def enableProguardInReleaseBuilds = true  in android/app/build.gradle   
            Using this it will reduce the apk size of App.     
 */