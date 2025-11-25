"use client";

import { motion } from "framer-motion";

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene8Scripture({ isActive }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/SCENE8-2.jpg')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Scripture verse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Main verse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <p className="text-md font-serif text-white leading-relaxed italic">
                <strong>Bunga Ng Panata</strong> <br />
                <br /> Habang binibigkis tali ng pag-ibig, <br /> Di na
                mapigilan luhang nangingilid; <br /> Sa aking gunita'y muli na
                nagbalik, <br /> Noong naghihintay sa sagot ng langit.   <br />{" "}
                <br /> Humiling sa Ama ng pusong mat'yaga, <br />
                Isang kaloobang mapagpakumbaba. <br /> Aking inilagak sa Diyos
                ang tiwala, <br /> Ikaw ang kaloob, sagot sa panata. <br />{" "}
                <br /> Nang ikaw'y dumating sa buhay ko, sinta, <br /> Pinawi
                mong lahat ng mga pangamba, <br /> Ang tanging nasambit:
                "Salamat sa Ama", <br /> Higit sa dalangin ang binigay Niya.{" "}
                <br /> <br />
                Ngayong natagpuan, pag-ibig na hanap, <br /> Na s'yang katuparan
                ng aking pangarap. <br /> Ang pagmamahal ko sa 'yo'y di kukupas,
                <br /> Ang kahapo't ngayon ay daig ng bukas. <br /> <br /> Sa
                harap ng Ama ngayo'y nagsumpaan:, <br /> Sa ginhawa't hirap,
                saya't kalungkutan, <br /> Anumang dumating di maghihiwalay;{" "}
                <br />
                Ating pagsasama'y habang nabubuhay.
              </p>
            </motion.div>

            {/* Scripture reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-4"
            >
              <div className="w-24 h-px bg-white/50 mx-auto mb-4" />
              <p className="text-sm font-serif font-medium text-white">
                Kapatid na Kirk Homer Ramos <br />
                Lokal ng Pitpitan <br />
                Distrito ng Bulacan West
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
