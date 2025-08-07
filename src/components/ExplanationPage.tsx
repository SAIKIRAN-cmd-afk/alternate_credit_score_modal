import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Info, DollarSign, Briefcase, Home, Zap, PiggyBank, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const ExplanationPage: React.FC = () => {
  // Mock SHAP-like feature importance data
  const featureImportance = [
    { name: 'Payment History', value: 35, icon: Home, description: 'Rent and utility payment consistency' },
    { name: 'Income Stability', value: 25, icon: DollarSign, description: 'Monthly income and employment duration' },
    { name: 'Expense Management', value: 20, icon: TrendingUp, description: 'Expense-to-income ratio control' },
    { name: 'Employment Status', value: 15, icon: Briefcase, description: 'Current employment situation' },
    { name: 'Savings Buffer', value: 5, icon: PiggyBank, description: 'Available emergency funds' }
  ];

  const riskFactors = [
    { name: 'Low Risk', value: 45, color: '#10b981' },
    { name: 'Medium Risk', value: 35, color: '#f59e0b' },
    { name: 'High Risk', value: 20, color: '#ef4444' }
  ];

  const improvementTips = [
    {
      icon: Home,
      title: 'Payment Consistency',
      description: 'Make all rent and utility payments on time',
      impact: 'High Impact',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: DollarSign,
      title: 'Income Documentation',
      description: 'Maintain stable employment and document income sources',
      impact: 'High Impact',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: TrendingUp,
      title: 'Expense Control',
      description: 'Keep monthly expenses below 70% of income',
      impact: 'Medium Impact',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: PiggyBank,
      title: 'Emergency Fund',
      description: 'Build savings equal to 3-6 months of expenses',
      impact: 'Medium Impact',
      color: 'text-yellow-600 dark:text-yellow-400'
    }
  ];

  return (
    <div className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            How Alternative Credit Scoring Works
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our scoring system goes beyond traditional credit reports to evaluate your true financial responsibility. 
            Here's how we calculate your score and what factors matter most.
          </p>
        </motion.div>

        {/* Feature Importance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20 mb-12"
        >
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Feature Importance in Your Score
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {featureImportance.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-700/50 rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 dark:text-white">{feature.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-800 dark:text-white">{feature.value}%</div>
                      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${feature.value}%` }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={featureImportance} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                    stroke="#64748b"
                  />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Risk Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20 mb-12"
        >
          <div className="flex items-center space-x-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Risk Category Distribution
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskFactors}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={60}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {riskFactors.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {riskFactors.map((factor, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-700/50 rounded-lg">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: factor.color }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 dark:text-white">{factor.name}</h3>
                  </div>
                  <div className="text-lg font-bold text-slate-800 dark:text-white">
                    {factor.value}%
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Note:</strong> These percentages represent the distribution of our user base across 
                  risk categories, helping lenders understand the overall risk profile of alternative credit scoring.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Improvement Tips */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              How to Improve Your Score
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {improvementTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/50 dark:bg-slate-700/50 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                          {tip.title}
                        </h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${tip.color} bg-opacity-10`}>
                          {tip.impact}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
              Remember: Alternative Credit Scoring is About Consistency
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Unlike traditional credit scores that focus heavily on debt management, our system rewards consistent 
              financial behavior across all aspects of your life. Small, consistent improvements in payment habits 
              and expense management can lead to significant score improvements over time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExplanationPage;