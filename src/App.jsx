// import React from 'react';
// import { Helmet } from 'react-helmet';
// const ShaktiEnterprises = () => {
//   return (
//     <div className="font-sans bg-gray-100 text-gray-800">
//       <Helmet>
//         <title>Shakti Enterprises - Noida's Trusted Building Material Supplier</title>
//         <meta name="description" content="Shakti Enterprises is Noida’s most trusted supplier of Rodi, Badarpur, Dust, Cement, and TMT Bars. We provide high-quality construction materials at competitive prices." />
//         <meta name="keywords" content="Rodi supplier in Noida, Badarpur supplier, construction materials, cement supplier, TMT bars supplier, building material supplier in Noida" />
//         <meta name="author" content="Shakti Enterprises" />
//         <meta name="robots" content="index, follow" />
//       </Helmet>
//       {/* Home Section (Hero Section) */}
//       <section className="relative h-screen flex items-center justify-center bg-blue-900 text-white">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 bg-[url('https://th.bing.com/th/id/OIP.s6nhBap-mZM3xPB2PmDoQQHaEc?rs=1&pid=ImgDetMain')] bg-cover bg-center opacity-70"></div>
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <div className="relative text-center z-10">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Welcome to <span className="text-yellow-400">Shakti Enterprises</span>
//           </h1>
//           <p className="text-lg md:text-xl mb-8">
//             Your Reliable Supplier of Rodi, Badarpur, Dust, Cement & TMT Bars in Noida
//           </p>
//           <p className="text-lg md:text-xl mb-8">
//             We provide high-quality construction materials for all your building needs. Serving Noida and surrounding areas.
//           </p>
//           <a
//             href="#contact"
//             className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
//           >
//             Inquire Now
//           </a>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-16 px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Rodi */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <img
//               src="https://thumbs.dreamstime.com/b/piles-gravel-building-materials-houses-263210963.jpg"
//               alt="Rodi"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Rodi</h3>
//             <p className="text-gray-600">
//               High-quality crushed stone for construction and road building.
//             </p>
//           </div>

//           {/* Badarpur */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <img
//               src="https://static.wixstatic.com/media/24ef99_c45e3bb8219b44af86f9cf9c6dcb5f53~mv2.jpg/v1/fill/w_490,h_276,q_90/24ef99_c45e3bb8219b44af86f9cf9c6dcb5f53~mv2.jpg"
//               alt="Badarpur"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Badarpur</h3>
//             <p className="text-gray-600">
//               Fine-grained sand used for plastering and concrete work.
//             </p>
//           </div>

//           {/* Dust */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <img
//               src="https://buildingmaterials.com.my/storage/photo/3/1429/large.jpg"
//               alt="Dust"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Dust</h3>
//             <p className="text-gray-600">
//               Stone dust for filling and leveling construction sites.
//             </p>
//           </div>

//           {/* Cement */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <img
//               src="https://i.pinimg.com/originals/13/bf/84/13bf84cdee78fa018a8fb007a7851949.jpg"
//               alt="Cement"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Cement</h3>
//             <p className="text-gray-600">
//               Premium quality cement for strong and durable structures.
//             </p>
//           </div>

//           {/* Saria */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <img
//               src="https://5.imimg.com/data5/SELLER/Default/2021/3/UD/PV/BQ/42393731/rathi-ms-tmt-bar.png"
//               alt="Saria"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">TMT Bars</h3>
//             <p className="text-gray-600">
//               Reinforced steel bars for construction and reinforcement.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 px-4 bg-blue-900 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Shakti Enterprises</h2>
//           <p className="text-lg mb-4">
//             For inquiries, call us at: <a href="tel:+919312504995" className="underline">9312504995</a>
//           </p>
//           <p className="text-lg mb-8">
//             WhatsApp : <a href="https://wa.me/9354253240" className="underline">9354253240</a>
//           </p>
//           <a
//             href="https://wa.me/9354253240"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
//           >
//             Chat on WhatsApp
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShaktiEnterprises;









import React from 'react';
import { Helmet } from 'react-helmet';

const ShaktiEnterprises = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Shakti Enterprises - Noida's Trusted Building Material Supplier</title>
        <meta name="description" content="Get top-quality Rodi, Badarpur, Dust, Cement, and TMT Bars at the best prices. Shakti Enterprises - Noida's trusted building material supplier." />
        <meta name="keywords" content="Rodi supplier in Noida, Badarpur supplier, cement supplier, TMT bars supplier, construction material supplier" />
        <meta name="author" content="Shakti Enterprises" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shaktienterprises.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shakti Enterprises - Noida's Trusted Building Material Supplier" />
        <meta property="og:description" content="Order premium construction materials like Rodi, Badarpur, Dust, Cement & TMT Bars from Shakti Enterprises." />
        <meta property="og:image" content="https://shaktienterprises.com/og-image.jpg" />
        <meta property="og:url" content="https://shaktienterprises.com" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shakti Enterprises - Noida's Trusted Building Material Supplier" />
        <meta name="twitter:description" content="We supply premium Rodi, Badarpur, Cement & TMT Bars at competitive prices in Noida." />
        <meta name="twitter:image" content="https://shaktienterprises.com/twitter-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-blue-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.s6nhBap-mZM3xPB2PmDoQQHaEc?rs=1&pid=ImgDetMain')" }}>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-400">Shakti Enterprises</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 font-semibold">
            Noida's Trusted Supplier of Building Materials
          </p>
          <p className="text-lg md:text-xl mb-8">
            Get high-quality Rodi, Badarpur, Dust, Cement & TMT Bars at affordable rates.
          </p>
          <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Inquire Now
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Construction Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Rodi", img: "https://thumbs.dreamstime.com/b/piles-gravel-building-materials-houses-263210963.jpg", desc: "High-quality crushed stone for road and building construction." },
            { name: "Badarpur", img: "https://static.wixstatic.com/media/24ef99_c45e3bb8219b44af86f9cf9c6dcb5f53~mv2.jpg", desc: "Fine-grained sand for plastering and concrete work." },
            { name: "Dust", img: "https://buildingmaterials.com.my/storage/photo/3/1429/large.jpg", desc: "Stone dust used for filling and leveling in construction sites." },
            { name: "Cement", img: "https://i.pinimg.com/originals/13/bf/84/13bf84cdee78fa018a8fb007a7851949.jpg", desc: "Premium-grade cement for durable and strong structures." },
            { name: "TMT Bars", img: "https://5.imimg.com/data5/SELLER/Default/2021/3/UD/PV/BQ/42393731/rathi-ms-tmt-bar.png", desc: "Reinforced steel bars for high-strength construction projects." },
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src={product.img} 
                alt={`${product.name} supplier in Noida`} 
                className="w-full h-48 object-cover rounded-md mb-4"
                loading="lazy" // Lazy Loading
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Shakti Enterprises</h2>
          <p className="text-lg mb-4">For orders & inquiries, call us at: <a href="tel:+919312504995" className="underline">9312504995</a></p>
          <p className="text-lg mb-8">WhatsApp: <a href="https://wa.me/9354253240" className="underline">9354253240</a></p>
          <a href="https://wa.me/9354253240" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default ShaktiEnterprises;
