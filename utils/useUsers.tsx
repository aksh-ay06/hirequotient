import { useState, useEffect } from "react";
import axios from "axios";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member";
}

const useUsers = (): User[] => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return users;
};

export default useUsers;
