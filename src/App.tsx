import { Header } from './components/Header';
import { TractorGrid } from './components/TractorGrid';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[100%] bg-gray-50 -rotate-6 transform-gpu"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              We are currently seeking the following tractor models:
            </h2>

            <TractorGrid />

            <p className="text-xl text-gray-700 mt-8">
              If you have any of these models available, please get in touch with us.
            </p>

            <ContactInfo />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}