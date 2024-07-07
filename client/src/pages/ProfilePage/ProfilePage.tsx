const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Admin", // or "User"
  createdAt: "2023-05-21",
  updatedAt: "2024-06-01",
  profileImage: "https://via.placeholder.com/150",
};

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-center">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border border-gray-300"
          />
          <h1 className="text-2xl font-bold mt-4">{userData.name}</h1>
          <h2 className="text-lg text-gray-500">{userData.email}</h2>
          <h3 className="text-lg text-gray-500">Role: {userData.role}</h3>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Profile Details</h4>
          <div className="mt-2">
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>{userData.name}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-medium">Email:</span>
              <span>{userData.email}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-medium">Role:</span>
              <span>{userData.role}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-medium">Account Created:</span>
              <span>{new Date(userData.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-medium">Last Updated:</span>
              <span>{new Date(userData.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
