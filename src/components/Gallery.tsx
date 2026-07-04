import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ExternalLink, Image as ImageIcon, Loader2, X } from 'lucide-react';
import firebaseConfig from '../../firebase-applet-config.json';

type DriveImage = {
  id: string;
  name: string;
  thumbnailLink?: string;
  webViewLink?: string;
};

export function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showGallery, setShowGallery] = useState(false);
  const [images, setImages] = useState<DriveImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<DriveImage | null>(null);
  const [loading, setLoading] = useState(false);
  
  const FOLDER_ID = '1onHJIg9f63ACn6lxB8qj0kDmCAUVBhcA';
  const driveFolderUrl = `https://drive.google.com/drive/folders/${FOLDER_ID}?usp=sharing`;
  const embeddedFolderUrl = `https://drive.google.com/embeddedfolderview?id=${FOLDER_ID}#grid`;
  const googleApiKey = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY || firebaseConfig.apiKey;

  const getImageUrl = (image: DriveImage, size = 1200) => {
    if (image.thumbnailLink) {
      return image.thumbnailLink.replace(/=s\d+/, `=s${size}`);
    }

    return `https://lh3.googleusercontent.com/d/${image.id}=w${size}`;
  };

  const loadGallery = async () => {
    setShowGallery(true);
    setLoading(true);

    try {
      const query = encodeURIComponent(`'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`);
      const fields = encodeURIComponent('files(id,name,thumbnailLink,webViewLink)');
      const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}&pageSize=100&orderBy=createdTime desc&key=${googleApiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Drive API request failed');
      }

      const data = await response.json();
      const files = data.files || [];

      if (files.length === 0) {
        return;
      }

      setImages(files);
    } catch {
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <span className="text-[#C88A8A] font-poppins tracking-widest text-sm font-medium uppercase mb-4 block">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Our Work Gallery</h2>
            <p className="text-gray-400 font-poppins max-w-2xl mx-auto font-light">
              A closer look at our latest makeovers, bridal looks, and salon transformations.
            </p>
          </motion.div>
        </div>

        {!showGallery ? (
          <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#252121] shadow-2xl shadow-black/30 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="mb-3 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#1B1B1B]">
                  Live photo collection
                </span>
                <h3 className="font-playfair text-3xl font-bold text-white md:text-4xl">
                  Fresh work, loaded from Drive
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <ImageIcon className="mb-5 h-10 w-10 text-[#C88A8A]" />
              <p className="mb-8 text-sm leading-7 text-gray-300">
                Browse our most recent work in a calm, full-page photo gallery made for makeovers, bridal styling, and salon moments.
              </p>
              <button
                onClick={loadGallery}
                className="group flex w-fit items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1B1B1B] shadow-lg transition-colors hover:bg-[#F7DEDE]"
              >
                Load Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-[4/5] animate-pulse rounded-2xl bg-white/10" />
            ))}
            <div className="col-span-full mt-2 flex items-center justify-center text-sm text-gray-400">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading gallery
            </div>
          </div>
        ) : images.length > 0 ? (
          <>
            <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
              {images.map((image, index) => (
                <motion.button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-white/5 text-left shadow-xl shadow-black/20"
                >
                  <img
                    src={getImageUrl(image, 1000)}
                    alt={image.name}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="line-clamp-1 text-sm font-medium text-white">{image.name}</p>
                  </div>
                </motion.button>
              ))}
            </div>
            <a
              href={driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-8 flex w-fit items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#C88A8A] hover:text-[#C88A8A]"
            >
              Open full gallery in Google Drive
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </>
        ) : (
          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#F7F0F0] shadow-2xl shadow-black/30">
              <div className="flex flex-col gap-4 border-b border-[#E8DADA] bg-[#FFF9F8] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C88A8A]">Google Drive Gallery</p>
                  <h3 className="font-playfair text-2xl font-bold text-[#1B1B1B]">Mamta's Beauty Parlour Photos</h3>
                </div>
                <a
                  href={driveFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center rounded-full bg-[#1B1B1B] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#C88A8A]"
                >
                  Open in Drive
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="h-[72vh] min-h-[540px] overflow-hidden bg-white">
                <iframe
                  src={embeddedFolderUrl}
                  title="Mamta's Beauty Parlour Google Drive Gallery"
                  className="-mt-12 h-[calc(100%+48px)] w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={getImageUrl(selectedImage, 1800)}
            alt={selectedImage.name}
            className="max-h-[86vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
