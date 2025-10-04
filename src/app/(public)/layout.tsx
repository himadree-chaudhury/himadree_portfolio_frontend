import Footer from "@/modules/shared/Footer";
import { Navbar } from "@/modules/shared/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <main className="min-h-screen ">{children}</main>
      <Footer />
    </div>
  );
};
export default PublicLayout;
