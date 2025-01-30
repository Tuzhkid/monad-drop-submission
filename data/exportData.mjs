import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { backup } from "firestore-export-import";
import fs from "fs";
import serviceAccount from "./monad-sub-firebase-adminsdk-fbsvc-1f06906646.json" assert { type: "json" };

// Initialize Firebase Admin SDK
initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

// Backup Firestore data
backup(db, ["wallets"])
  .then((data) => {
    fs.writeFileSync("firestore_data.json", JSON.stringify(data, null, 2));
    console.log("Data exported successfully!");
  })
  .catch((error) => {
    console.error("Error exporting data:", error);
  });
