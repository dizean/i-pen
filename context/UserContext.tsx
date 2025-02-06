import React, { createContext, useState, useContext } from "react";

type UserContextType = {
  username: string | null;
  grade: string | null;
  preTestScore: number | null;
  postTestScore: number | null;
  selectedImage: any;
  setUser: (username: string | null, grade: string | null) => void;
  setPreTestScore: (score: number) => void;
  setPostTestScore: (score: number) => void;
  setSelectedImage: (selectedImage: any) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [grade, setGrade] = useState<string | null>(null);
  const [preTestScore, setPreTestScoreState] = useState<number | null>(null);
  const [postTestScore, setPostTestScoreState] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const setUser = (username: string | null, grade: string | null) => {
    setUsername(username);
    setGrade(grade);
  };

  const setPreTestScore = (score: number) => {
    setPreTestScoreState(score);
  };

  const setPostTestScore = (score: number) => {
    setPostTestScoreState(score);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        grade,
        preTestScore,
        postTestScore,
        selectedImage,
        setUser,
        setPreTestScore,
        setPostTestScore,
        setSelectedImage(selectedImage) {
          
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
