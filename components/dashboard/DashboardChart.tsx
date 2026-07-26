"use client";

import { useMemo } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { opportunities as demoData } from "@/data/opportunities";
import { getStoredOpportunities } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";


export default function DashboardChart() {


  const { language } = useLanguage();



  const text = {

    en: {

      title:"Opportunities by Category",

      empty:"No data available.",

      jobs:"Jobs",

      internships:"Internships",

      scholarships:"Scholarships",

      training:"Training",

      volunteer:"Volunteer",

      courses:"Online Courses",

      remote:"Remote Work",

    },


    fa:{

      title:"فرصت‌ها بر اساس دسته‌بندی",

      empty:"داده‌ای برای نمایش وجود ندارد.",

      jobs:"وظایف",

      internships:"کارآموزی",

      scholarships:"بورسیه",

      training:"آموزش",

      volunteer:"داوطلبی",

      courses:"دوره آنلاین",

      remote:"دورکاری",

    }

  };



  const t=text[language];




  const data = useMemo(()=>{


    const stored =
      getStoredOpportunities();


    const all=[
      ...demoData,
      ...stored
    ];



    return [

      {
        name:t.jobs,
        total:
        all.filter(
          item=>item.category==="Job"
        ).length
      },


      {
        name:t.internships,
        total:
        all.filter(
          item=>item.category==="Internship"
        ).length
      },


      {
        name:t.scholarships,
        total:
        all.filter(
          item=>item.category==="Scholarship"
        ).length
      },


      {
        name:t.remote,
        total:
        all.filter(
          item=>item.category==="Remote Work"
        ).length
      },


      {
        name:t.training,
        total:
        all.filter(
          item=>item.category==="Training"
        ).length
      },


      {
        name:t.volunteer,
        total:
        all.filter(
          item=>item.category==="Volunteer"
        ).length
      },


      {
        name:t.courses,
        total:
        all.filter(
          item=>item.category==="Online Course"
        ).length
      },


    ];


  },[language]);





  const hasData =
  data.some(
    item=>item.total>0
  );






  return (

    <section

      aria-labelledby="chart-title"

      dir={
        language==="fa"
        ?
        "rtl"
        :
        "ltr"
      }

    >


      <h2

        id="chart-title"

        className="
        mb-6
        text-2xl
        font-bold
        text-slate-900
        dark:text-white
        "

      >

        {t.title}

      </h2>





      <div

        className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm

        dark:border-slate-700
        dark:bg-slate-800
        "

      >


      {
        hasData

        ?

        (

        <div className="
        h-[400px]
        w-full
        ">


        <ResponsiveContainer
          width="100%"
          height="100%"
        >


          <BarChart
            data={data}
            margin={{
              top:20,
              right:20,
              left:0,
              bottom:20,
            }}
          >


            <CartesianGrid
              strokeDasharray="3 3"
            />


            <XAxis

              dataKey="name"

              tick={{
                fontSize:12
              }}

            />


            <YAxis />



            <Tooltip />



          <Bar

  dataKey="total"

  fill="#2563eb"

  radius={[
    8,
    8,
    0,
    0
  ]}

/>


          </BarChart>


        </ResponsiveContainer>


        </div>

        )


        :

        (

        <div className="
        flex
        h-60
        items-center
        justify-center
        text-slate-500
        dark:text-slate-400
        ">

          {t.empty}

        </div>

        )

      }


      </div>


    </section>

  );

}