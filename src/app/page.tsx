import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d55c8650-5024-4be6-b384-b87273e0c43b-jlo1ag.jpg",
  "https://utfs.io/f/2a46374a-88e5-4a78-98cd-959ff25f2beb-jvpmom.jpg",
  "https://utfs.io/f/c31ac817-c3c1-4416-9ce2-6dfad11b3145-nlisfc.jpg",
  "https://utfs.io/f/2708f844-2bf1-4a26-93e4-527d6b46d020-nliseh.jpg",
  "https://utfs.io/f/4dac1e8c-90a1-4b75-ac7e-6b30a78b39f2-jlo1ag.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
