import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Get all registered users except me
const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);

      try {
        const response = await fetch("/api/v1/users");
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setUsers(data.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { loading, users };
};

export default useGetUsers;
