/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import Diagnosis from "./components/Diagnosis";
import Scenarios from "./components/Scenarios";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Services />
        <Methodology />
        <Diagnosis />
        <Scenarios />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
