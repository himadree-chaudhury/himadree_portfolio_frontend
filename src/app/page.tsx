
import { Navbar } from "@/modules/shared/Navbar";
import Home from "./(public)/(home)/Home";
import Footer from "@/modules/shared/Footer";

const Root = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <main className="min-h-screen ">
        <Home />
      </main>
      <Footer />
    </div>
  );
};
export default Root;
