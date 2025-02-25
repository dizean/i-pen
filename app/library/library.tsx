import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { fetchData } from "@/database/dbservice";
import { Text } from "@/context/FontContent";
import { useUser } from "@/context/UserContext";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Library() {
    const {
        setUser
      } = useUser();
  const [users, setUsers] = useState<any[]>([]);
const router = useRouter();
  useEffect(() => {
    fetchData()
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const gotoContent = (name: string, grade: string) =>{
    setUser(name, grade);
    console.log(name,grade)
    router.push('/content/content')
  }
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: RFPercentage(8), marginBottom: 10 }}>
       Student List
      </Text>
      {/* Table Header */}
      <View style={{ flexDirection: "row", borderBottomWidth: 1, padding: 5 }}>
        <Text style={{ flex: 1, fontSize: RFPercentage(5) }}>Grade</Text>
        <Text style={{ flex: 3,fontSize: RFPercentage(5) }}>Name</Text>
      </View>

      {/* Table Content */}
      <ScrollView style={
        { height:500}
      }>
        {users.map((user, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              padding: 5,
              borderBottomWidth: 0.5,
              alignItems: "center",
            }}
            onPress={()=>gotoContent(user.username,user.grade)}
          >
            <Text style={{ flex: 1, fontSize: RFPercentage(5) }}>{user.grade}</Text>
            <Text style={{ flex: 3, fontSize: RFPercentage(5) }}>{user.username}</Text>
            
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={{ marginTop: 10 }}
        onPress={()=>router.push('/selection/selection')}
      >
        <Text style={{ fontSize:RFPercentage(3), color: "blue", textAlign: "center" }}>
          Is your name not on the list? {"\n"}Create an account.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
