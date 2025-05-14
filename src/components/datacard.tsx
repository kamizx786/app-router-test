// app/components/DataCard.tsx
"use client";

import { useRouter } from "next/navigation";

const DataCard = ({ title, body }: { title: string; body: string }) => {
  const router = useRouter();
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default DataCard;
