'use client'
import React, { useState } from 'react'
import NumberBadge from '../../common/NumberBadge'
import { Lesson } from '@/app/types'

const lessonsKindergartenData = [
  {
    id: 1,
    title: 'Alphabet Learning',
    description: 'Learn the basics of the alphabet with fun and interactive activities.',
  },
  {
    id: 2,
    title: 'Numbers Learning',
    description: 'Explore numbers and counting through engaging activities.',
  },
  {
    id: 3,
    title: 'Color Recognition',
    description: 'Learn to identify and name different colors with playful exercises.',
  },
]

const lessonsHighSchoolData = [
  {
    id: 1,
    title: 'Standard One',
    description: 'Standard 1 is a foundation standard that reflects 7 important concepts...',
  },
  {
    id: 2,
    title: 'Standard Two',
    description: 'Standard 2 builds on the foundations of Standard 1 and includes requirements...',
  },
  {
    id: 3,
    title: 'Standard Three',
    description: 'Standard 3 applies to all services delivering personal or clinical care...',
  },
  {
    id: 4,
    title: 'Standard Four',
    description: 'Standard 4 focuses on services and supports to ensure quality education...',
  },
  {
    id: 5,
    title: 'Standard Five',
    description: 'Standard 5 ensures the school has the learning resources it needs...',
  },
  {
    id: 6,
    title: 'Standard Six',
    description: 'Standard 6 requires a system to resolve complaints effectively...',
  },
  {
    id: 7,
    title: 'Standard Seven',
    description: 'Standard 7 focuses on management and leadership accountability...',
  },
  {
    id: 8,
    title: 'Standard Eight',
    description: 'Standard 8 from NCERT Solutions helps students to understand complex concepts...',
  },
]

const lessonsCollegeData = [
  {
    id: 1,
    title: 'Engineering Basics',
    description: 'Understand the fundamentals of engineering, design, and innovation.',
  },
  {
    id: 2,
    title: 'Business Studies',
    description: 'Explore marketing, finance, and business strategy for real-world success.',
  },
]

interface Tab {
  label: string
  value: 'kindergarten' | 'highschool' | 'college'
}
const Lessons = () => {
  const [activeTab, setActiveTab] = useState<'kindergarten' | 'highschool' | 'college'>('highschool')

  const renderLessons = (lessons: Lesson[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="p-6 hover:shadow transition-all duration-300 border rounded-sm flex flex-col justify-between cursor-pointer"
        >
          <div className='flex justify-center'>
          <NumberBadge
            number={lesson.id}
            color={
              [
                '#FFA726', // orange
                '#66BB6A', // green
                '#42A5F5', // blue
                '#AB47BC', // purple
                '#26C6DA', // teal
                '#EF5350', // red
                '#8D6E63', // brown
                '#FFB300', // yellow
              ][(lesson.id - 1) % 8]
            }
            />
            </div>

          <h3 className="font-semibold mt-4 mb-2">{lesson.title}</h3>
          <p className=" opacity-85 text-xs mb-4 line-clamp-2">{lesson.description}</p>
          <button className="border border-primary text-primary rounded-sm px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-white duration-300">
            Class Details
          </button>
        </div>

      ))}
    </div>
  )

  return (
    <section className="py-20 text-center">
      <div className="">
        <h2 className="text-3xl font-bold  mb-3">Qualified Lessons for Students</h2>
        <p className=" max-w-2xl mx-auto">
          A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mt-8">
          {([
            { label: 'Kindergarten', value: 'kindergarten' },
            { label: 'High School', value: 'highschool' },
            { label: 'College', value: 'college' },
          ] as Tab[]).map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 rounded-sm text-sm font-medium transition-all ${activeTab === tab.value
                  ? 'bg-gradient-to-r from-orange-400 to-secondary text-white'
                  : 'hover:underline underline-offset-8 hover:text-secondary'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Lesson Cards */}
        {activeTab === 'kindergarten' && renderLessons(lessonsKindergartenData)}
        {activeTab === 'highschool' && renderLessons(lessonsHighSchoolData)}
        {activeTab === 'college' && renderLessons(lessonsCollegeData)}

        <button className="mt-10 text-sm bg-primary text-white px-4 py-2 rounded-sm font-medium transition">
          Visit More Classes
        </button>
      </div>
    </section>
  )
}

export default Lessons
