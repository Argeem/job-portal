import { motion } from "framer-motion";
import { stateAnalytics } from "../../../utils/data";

export default function Analytics() {
  const states = stateAnalytics;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Platform
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform has seen significant growth, with over 2.4 million
            active users and a high success rate in job placements.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {states.map((state, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-${state.color}-100 rounded-xl flex items-center justify-center`}
                >
                  <state.icon className={`w-6 h-6 text-${state.color}-600`} />
                </div>
                <span className="text-green-500 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
                  {state.growth}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {state.value}
              </h3>
              <p className="text-gray-600">{state.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
