"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import ResponsiveButton from "./ResponsiveButton"

const caseStudies = [
  {
    category: "Shop Management",
    title: "Software App",
    description:
      "An online platform offering exclusive discounts on premium business tools. It provides access to essential software at significantly reduced prices, helping businesses save over $1,500 on tools that drive growth.",
    buttonLabel: "View Project",
    imageUrl: "/CaseStudies/Softwareapp.png",
    sitelink: "https://software-store-main.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "E-commerce",
    title: "Gift Wala",
    description:
      "An ecommerce platform where sellers can list their products and buyers can easily purchase whatever they like.",
    buttonLabel: "View Project",
    imageUrl: "/CaseStudies/Gift-wala.png",
    sitelink: "https://giftwala.vercel.app/",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    category: "Web Development Intern",
    title: "GAOTek Inc.",
    description:
      "GAOTek is a leading supplier of test and measurement equipment for fiber optics and telecommunications. I completed a three-month remote internship creating webpages for the company while learning valuable skills.",
    buttonLabel: "View Certificate",
    imageUrl: "/CaseStudies/GaoTek.png",
    sitelink: "https://drive.google.com/file/d/12kwuJnr4MxtuPzhz6s2yrDymQ4mkOx7i/view?usp=sharing",
    tags: ["HTML", "CSS", "JavaScript"],
  },
]

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Solving user & business problems since last 1.5+ years.
            <br />
            Crafting digital experiences that blend creativity with functionality.
          </p>
        </motion.div>

        <div className="space-y-20 px-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const CaseStudyCard = ({ study, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.8 : 0.4 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="relative h-full w-full"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={study.imageUrl || "/placeholder.svg"}
            alt={study.title}
        
            className="object-cover w-full h-full absolute inset-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-green-400 text-black font-medium rounded-full text-sm">{study.category}</span>
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative ${
          isEven ? "border-l-4 border-green-400" : "border-r-4 border-green-400"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{study.title}</h3>

        <p className="text-gray-600 mb-6">{study.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {study.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a href={study.sitelink} target="_blank" rel="noopener noreferrer">
            <ResponsiveButton text={study.buttonLabel} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default CaseStudies
