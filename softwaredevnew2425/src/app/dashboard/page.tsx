'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#34564f] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-[#34564f] sticky top-0 bg-opacity-50 border-b-2 border-[#2b4a44] z-50 backdrop-blur-[8px] backdrop-filter: blur(8px);">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Sproutify Logo" width={200} height={40} className="hover:opacity-80 transition-opacity" />
        </div>
        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-[#2b4a44] transition-colors">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-white text-[#34564f] rounded-lg hover:bg-gray-100 transition-colors">Sign Up</button>
          </Link>
        </div>
      </nav>


      {/* Dashboard Content */}
      <main className="container mx-auto py-10 px-14">
        <h2 className="text-6xl font-bold text-gray-100 mb-4">Welcome to Sproutify</h2>
        <p className="text-gray-300 mb-8">
          Your AI-powered farming assistant. Get tailored insights for crop management, weather forecasts, and soil health to maximize your farm’s potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-9">
          {/* Crop Recommendations Card */}
          <div className="bg-[#2b4a44] rounded-xl p-6 hover:shadow-2xl transition-shadow card">
            <div className="hover-bg"></div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Crop Recommendations</h3>
            <p className="text-gray-300">
              Our AI-powered system uses data from various sources, including climate patterns, soil health, and market trends, to provide personalized crop recommendations. By analyzing regional factors, it helps farmers choose the best crops that are most likely to thrive, ensuring higher yield and profitability. Whether you&apos;re growing grains, vegetables, or fruits, our tool can optimize your planting strategy to match both environmental conditions and market demand. With this guidance, you can make informed decisions that improve your farm&apos;s sustainability and economic success. Tailored recommendations empower you to maximize your farm&apos;s potential year after year.
            </p>
          </div>

          {/* Weather Insights Card */}
          <div className="bg-[#2b4a44] rounded-xl p-6 hover:shadow-2xl transition-shadow card">
            <div className="hover-bg"></div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Weather Insights</h3>
            <p className="text-gray-300">
              Stay ahead of changing weather conditions with hyper-local forecasts designed specifically for your region. Our platform delivers precise weather predictions, including temperature, rainfall, humidity, and wind patterns, to help you make better decisions on when to plant, irrigate, and harvest. Historical weather data is also accessible, giving you the ability to compare current conditions with past seasons and identify trends. By using weather insights, you can minimize risks like crop damage from unexpected weather events and better plan for optimal farming outcomes. Trust in accurate, timely weather information to guide your farm&apos;s operations and protect your investment.
            </p>
          </div>

          {/* Fertilizer Suggestions Card */}
          <div className="bg-[#2b4a44] rounded-xl p-6 hover:shadow-2xl transition-shadow card">
            <div className="hover-bg"></div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Fertilizer Suggestions</h3>
            <p className="text-gray-300">
              Improving soil fertility is key to achieving healthier crops and maximizing yield. Our system provides precise fertilizer recommendations based on soil tests and crop-specific nutrient requirements. By analyzing soil conditions, it identifies deficiencies and suggests the right types and amounts of fertilizers needed for optimal growth. This personalized approach helps ensure that you’re not over-applying or under-fertilizing, which can lead to wasted resources or poor crop performance. Sustainable farming practices are at the core of this feature, ensuring that both your soil and the environment remain healthy over the long term.
            </p>
          </div>

          {/* Soil Health Analysis Card */}
          <div className="bg-[#2b4a44] rounded-xl p-6 hover:shadow-2xl transition-shadow card">
            <div className="hover-bg"></div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Soil Health Analysis</h3>
            <p className="text-gray-300">
              Soil health is the foundation of any successful farm, and our platform provides in-depth analysis to help you monitor and improve it. Detailed reports on soil pH, nutrient levels, organic matter content, and microbial activity offer valuable insights into your soil’s overall health. By understanding these factors, you can implement strategies to enhance soil fertility and structure, ultimately leading to more productive farming practices. Regular soil health checks also help identify potential issues before they affect your crops, allowing for timely interventions. Prioritizing soil health now will contribute to the long-term sustainability of your farm and its ecosystem.
            </p>
          </div>

          {/* Pest Control Tips Card */}
          <div className="bg-[#2b4a44] rounded-xl p-6 hover:shadow-2xl transition-shadow card">
            <div className="hover-bg"></div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Pest Control Tips</h3>
            <p className="text-gray-300">
              Early detection of pests is crucial for protecting your crops from potential damage and loss. Our AI-powered detection system helps you identify pests before they become a major issue. In addition to pest identification, the platform provides eco-friendly and cost-effective control methods, minimizing the need for harmful chemicals. By using natural pest management strategies, you can reduce the environmental impact of your farm while ensuring that your crops remain healthy. With pest control tips tailored to your specific needs, you&apos;ll be able to act quickly and effectively, reducing crop losses and maintaining a healthy farming environment.
            </p>
          </div>

          {/* Irrigation Guidance Card */}
          <div className="bg-[#2b4a44] rounded-xl p-6 hover:shadow-2xl transition-shadow card">
            <div className="hover-bg"></div>
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Irrigation Guidance</h3>
            <p className="text-gray-300 text-4xl ">
              Efficient water management is essential for both cost savings and sustainable farming practices. Our irrigation guidance system helps you optimize water usage, ensuring your crops receive the right amount of water at the right time. By analyzing weather forecasts, soil moisture levels, and crop water requirements, the system generates smart irrigation schedules that reduce waste and promote healthy plant growth. This helps prevent over-watering, which can lead to waterlogged soil, and under-watering, which can stunt crop development. With better irrigation practices, you’ll conserve water resources while boosting crop performance and profitability.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
