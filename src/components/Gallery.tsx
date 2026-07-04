import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { fetchDriveImages } from '../lib/drive';
import { getAccessToken, googleSignIn } from '../lib/auth';
import { Image as ImageIcon, LockKeyhole } from 'lucide-react';

export function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const FOLDER_ID = '1onHJIg9f63ACn6lxB8qj0kDmCAUVBhcA';

  const loadImages = async (token: string) => {
    setLoading(true);
    const files = await fetchDriveImages(token, FOLDER_ID);
    setImages(files);
    setLoading(false);
  };

  useEffect(() => {
    getAccessToken().then(token => {
      if (token) {
        setIsAuthenticated(true);
        loadImages(token);
      }
    });
  }, []);

  const handleConnectDrive = async () => {
    try {
      const result = await googleSignIn();
      if (result) {
        setIsAuthenticated(true);
        loadImages(result.accessToken);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <span className="text-[#C88A8A] font-poppins tracking-widest text-sm font-medium uppercase mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Our Work Gallery</h2>
            <p className="text-gray-400 font-poppins max-w-2xl mx-auto font-light">
              Glimpses of our luxurious transformations, exquisite bridal makeups, and premium salon environment.
            </p>
          </motion.div>
        </div>

        {!isAuthenticated ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md max-w-2xl mx-auto">
            <LockKeyhole className="w-12 h-12 text-[#C88A8A] mb-4" />
            <h3 className="text-2xl font-playfair text-white mb-2">Connect Google Drive</h3>
            <p className="text-gray-400 text-center mb-8 font-poppins">
              Sign in with your Google account to access and load the exclusive salon image gallery directly from Google Drive.
            </p>
            <button
              onClick={handleConnectDrive}
              className="px-8 py-3 bg-white text-[#1B1B1B] font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center"
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              Load Gallery
            </button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="aspect-[4/5] bg-white/5 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : images.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl bg-white/5"
              >
                <img
                  src={img.thumbnailLink?.replace('=s220', '=s800')} // Get higher res thumbnail
                  alt={img.name}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            No images found in the specified folder.
          </div>
        )}
      </div>
    </section>
  );
}
