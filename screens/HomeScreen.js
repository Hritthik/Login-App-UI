// REACT
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// THEME
import { themeColors } from '../theme';

export default function HomeScreen({ route, navigation }) {
  console.log(route.params.user);
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-green-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/signup.png')}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>

      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-800 ml-2">Full Name</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-800 rounded-2xl mb-3 border-2"
            placeholder="Enter Name"
            value={route.params.user.name}
          />
          <Text className="text-gray-800 ml-2">Email Address</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-800 rounded-2xl mb-3 border-2"
            placeholder="Enter Email"
            value={route.params.user.email}
          />
          <Text className="text-gray-800 ml-2">Reg No</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-800 rounded-2xl mb-7 border-2"
            placeholder="*****"
            value={route.params.user.regNo}
          />
          <Text className="text-gray-800 ml-2">Phone No</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-800 rounded-2xl mb-7 border-2"
            placeholder="*****"
            value={route.params.user.phone}
          />

          <Text className="text-gray-800 ml-2">Seat No</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-800 rounded-2xl mb-7 border-2"
            placeholder="*****"
          />
        </View>

        <TouchableOpacity className="py-3 bg-green-500 rounded-xl">
          <Text className="font-xl font-bold text-center text-gray-700">
            Mark Attendance
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
