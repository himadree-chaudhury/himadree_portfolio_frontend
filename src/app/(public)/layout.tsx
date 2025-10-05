import CheckAuth from "@/modules/shared/CheckAuth";
import Footer from "@/modules/shared/Footer";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <CheckAuth />
      <main className="min-h-screen container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};
export default PublicLayout;
