import { Footer } from "@/modules/shared/Footer";
import { Navbar } from "@/modules/shared/Navbar";
import Home from "./(public)/(home)/Home";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        <Home />
      </main>
      <Footer />
    </div>
  );
};
export default Root;
