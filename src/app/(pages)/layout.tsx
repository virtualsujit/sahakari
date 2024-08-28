import { Footer, Navbar } from "@/components/layout/nav-footer";
import BottomBar from "@/components/nav-bar/bottom-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar />
      <div className="sticky top-0 z-50">
        <BottomBar />
      </div>
      {/* <CircleLogoNav /> */}
      {children}
     
      <Footer />
    </section>
  );
}
