// // app/api/wallet/route.js
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function POST(request) {
//   const { wallet } = await request.json();

//   if (!wallet) {
//     return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
//   }

//   const filePath = path.join(process.cwd(), 'data', 'wallets.json');
//   let wallets = [];

//   if (fs.existsSync(filePath)) {
//     const fileData = fs.readFileSync(filePath);
//     wallets = JSON.parse(fileData);
//   }

//   // Validate if the wallet already exists
//   if (wallets.some((entry) => entry.wallet === wallet)) {
//     return NextResponse.json({ error: 'Wallet address already submitted' }, { status: 400 });
//   }

//   wallets.push({ wallet, submittedAt: new Date().toISOString() });
//   fs.writeFileSync(filePath, JSON.stringify(wallets, null, 2));

//   return NextResponse.json({ message: 'Wallet submitted successfully' }, { status: 201 });
// }


import { NextResponse } from 'next/server';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export async function POST(request) {
  const { wallet } = await request.json();

  if (!wallet) {
    return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
  }

  try {
    // Check if the wallet already exists
    const q = query(collection(db, "wallets"), where("wallet", "==", wallet));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json({ error: 'Wallet address already submitted' }, { status: 400 });
    }

    // Add the new wallet to Firestore
    await addDoc(collection(db, "wallets"), {
      wallet,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json({ message: 'Wallet submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error("Error adding document: ", error);
    return NextResponse.json({ error: 'Failed to submit wallet' }, { status: 500 });
  }
}