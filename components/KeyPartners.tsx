"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Stethoscope, Shield, School, Building2 } from "lucide-react";

const partnerData = [
  {
    category: "Hospitals",
    icon: Hospital,
    partners: ["Mary Washington Hospital"],
  },
  {
    category: "Clinics",
    icon: Stethoscope,
    partners: [
      "Optimum Care Medical Clinic",
      "Stafford Medical",
      "Aquia Family Medical Center",
    ],
  },
  {
    category: "Insurance Companies",
    icon: Shield,
    partners: [
      "Anthem (HealthKeepers)",
      "CareFirst",
      "Kaiser Permanente",
      "Cigna",
      "Sentara Health Plan (Optima)",
      "Oscar Health",
    ],
  },
  {
    category: "Educational Institutions",
    icon: School,
    partners: ["Carlos Rosario School"],
  },
  {
    category: "Government",
    icon: Building2,
    partners: ["Stafford County"],
  },
];

const MotionCard = motion(Card);

export function KeyPartners() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-100 to-indigo-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Key Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerData.map((category, index) => (
            <MotionCard
              key={category.category}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-6 w-6" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {category.partners.map((partner, partnerIndex) => (
                    <motion.li
                      key={partner}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + partnerIndex * 0.05,
                      }}
                    >
                      <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                      {partner}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </MotionCard>
          ))}
        </div>
        <motion.div
          className="mt-8 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm">
            Note: Partnerships with hospitals and clinics are for post-hospital
            care referrals and collaborations. Insurance company partnerships
            are for service coverage. Carlos Rosario School partnership is for
            consultations, collaborations, teaching, and learning. Stafford
            County partnership is for lead generation and strategic alliances.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
