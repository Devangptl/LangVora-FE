import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto max-w-[1200px] px-6">
        {children}
      </div>
      <Footer/>
    </div>
  );
}

