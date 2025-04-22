import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { fetchData } from "@/database/dbservice";
import { Text } from "@/context/FontContent";
import { useUser } from "@/context/UserContext";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Library() {
  const { setUser } = useUser();
  const [users, setUsers] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchData()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const gotoContent = (name: string, grade: string, test: string) => {
    setUser(name, grade);
    if(test=== 'false'){
      router.push("/test/test");
    }
    else{
      router.push("/content/content");
    }
  };

  return (
    <View style={{  backgroundColor: "#38bfe7" }}>
      <Text style={{ fontSize: RFPercentage(8), color: "white", marginBottom: 10 , padding: 10, backgroundColor: "#FDDA0D"}}>
        Student List
      </Text>
      {/* Table Header */}
      <View style={{ flexDirection: "row", alignItems:'center', borderBottomWidth: 2, padding: 10, borderColor: "#FDDA0D" }}>
        <Text style={{ flex: 1, fontSize: RFPercentage(3), color: "white" }}>Grade</Text>
        <Text style={{ flex: 3, fontSize: RFPercentage(3), color: "white" }}>Name</Text>
        <Text style={{ flex: 1, fontSize: RFPercentage(3), color: "white" }}>Pre Test Score</Text>
        <Text style={{ flex: 1, fontSize: RFPercentage(3), color: "white" }}>Post Test Score</Text>
      </View>
      {/* Table Content */}
      <ScrollView style={{ height: 500 ,padding: 10 }}>
        {users.length > 0 ? (
          users.map((user, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                padding: 10,
                borderBottomWidth: 0.5,
                borderColor: "#FDDA0D",
                alignItems: "center",
              }}
              onPress={() => gotoContent(user.username, user.grade, user.pretestDone)}
            >
              <Text style={{ flex: 1, fontSize: RFPercentage(3), color: "white" }}>
                {user.grade}
              </Text>
              <Text style={{ flex: 3, fontSize: RFPercentage(3), color: "white" }}>
                {user.username}
              </Text>
              <Text style={{ flex: 1, fontSize: RFPercentage(3), color: "white" }}>
                {user.pretestscore}
              </Text>
              <Text style={{ flex: 1, fontSize: RFPercentage(3), color: "white" }}>
                {user.posttestscore}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: RFPercentage(5), color: "gray" }}>
              No students registered yet
            </Text>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={{  backgroundColor: "#FDDA0D", height: 200 }}
        onPress={() => router.push("/selection/selection")}
      >
        <Text
          style={{ fontSize: RFPercentage(3), color: "#fff", textAlign: "center", padding: 5 }}
        >
          Is your name not on the list? {"\n"}Create an account.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
