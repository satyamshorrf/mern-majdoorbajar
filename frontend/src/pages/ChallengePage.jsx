import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ChallengeCard";
import { Lock } from "lucide-react";

const ChallengePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-16 text-center"
    >
      <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
        More Challenges Coming Soon!
      </h2>
      <div className="grid gap-6 md:grid-cols-3 justify-items-center">

        {[1,2,3].map((_, index) => (
          <Card key={index} className="bg-gray-800/30 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-gray-400">
                <span className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="mr-3 p-2 bg-emerald-500/10 rounded-full"
                  >
                    <Lock className="w-5 h-5 text-emerald-400" />
                  </motion.div>
                  Coming Soon
                </span>
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2">
                New exciting challenge on its way...
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ChallengePage;

