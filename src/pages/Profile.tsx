import { auth } from "../firebase/config";

export default function Profile() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Profile Page</h1>
      <p>Email: {auth.currentUser?.email || "Not logged in"}</p>
    </div>
  );
}
