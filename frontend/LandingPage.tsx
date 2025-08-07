import React from 'react';
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  setCurrentPage: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fair & Inclusive",
      description: "Uses alternative data points for more accurate credit assessment"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Scoring",
      description: "Get instant credit scores based on your actual financial behavior"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Underbanked Friendly",
      description: "Helps those with limited credit history access fair lending"
    }
  ];

  const benefits = [
    "No credit card required to check your score",
    "Uses rent payments and utility bills as positive factors",
    "Considers employment stability and income consistency",
    "Transparent scoring methodology with explanations"
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
                  Unlock Fairer Loans with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Smarter Scoring
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300">
                  Powered by Alternative Data
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  Get credit scores that reflect your true financial responsibility. 
                  We consider rent payments, utility bills, and employment stability - 
                  not just traditional credit history.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('dashboard')}
                className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Check Your Score Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Instant results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit impact</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20">
                <div className="space-y-6">
                  {/* Mock Credit Score Display */}
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <div className="text-white">
                        <div className="text-3xl font-bold">742</div>
                        <div className="text-sm opacity-90">GOOD</div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">Your Alternative Credit Score</p>
                  </div>

                  {/* Mock Data Points */}
                  <div className="space-y-3">
                    {[
                      { label: 'Rent Payments', value: '100% On-time', color: 'green' },
                      { label: 'Employment', value: 'Stable (2+ years)', color: 'green' },
                      { label: 'Income Trend', value: 'Increasing', color: 'green' },
                      { label: 'Expense Ratio', value: '68%', color: 'yellow' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex justify-between items-center p-3 bg-white/20 dark:bg-slate-700/20 rounded-lg"
                      >
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{item.label}</span>
                        <span className={`text-sm font-medium ${
                          item.color === 'green' ? 'text-green-600 dark:text-green-400' :
                          item.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                          'text-red-600 dark:text-red-400'
                        }`}>
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
              Why Choose Alternative Credit Scoring?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Traditional credit scoring often leaves out millions of creditworthy individuals. 
              Our approach considers the full picture of your financial responsibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">
              What Makes Us Different
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
              Ready to Discover Your True Credit Potential?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Join thousands who have already unlocked better lending opportunities through fair, 
              alternative credit scoring.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('dashboard')}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;