"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import {
  Briefcase,
  Heart,
  Building2,
  GraduationCap,
  Globe,
  Clock,
  BookOpen,
} from "lucide-react";

import { getStoredOpportunities } from "@/lib/storage";
import { opportunities as demoData } from "@/data/opportunities";

import DashboardChart from "@/components/dashboard/DashboardChart";
import { useLanguage } from "@/context/LanguageContext";

import { Opportunity } from "@/types/opportunity";


const text = {

  en:{
    title:"Dashboard",

    total:"Total Opportunities",
    jobs:"Jobs",
    scholarships:"Scholarships",
    internships:"Internships",
    remote:"Remote Work",
    training:"Training",
    expiring:"Expiring Soon",

    recent:"Recent Opportunities",

    loading:"Loading dashboard...",
    empty:"No opportunities available",
  },


  fa:{
    title:"داشبورد",

    total:"مجموع فرصت‌ها",
    jobs:"وظایف",
    scholarships:"بورسیه‌ها",
    internships:"کارآموزی‌ها",
    remote:"دورکاری",
    training:"آموزش",
    expiring:"نزدیک به پایان",

    recent:"فرصت‌های اخیر",

    loading:"در حال بارگذاری...",
    empty:"هیچ فرصتی موجود نیست",
  }

};



export default function DashboardPage(){


const {language}=useLanguage();

const t=text[language];


const [loading,setLoading]=useState(true);


const [items,setItems]=
useState<Opportunity[]>([]);



useEffect(()=>{


const stored=getStoredOpportunities();


const all=[
...demoData,
...stored
];


setItems(all);

setLoading(false);


},[]);




const count=(category:string)=>{

return items.filter(
(item)=>
item.category===category
).length;

};




const expiring =
items.filter(item=>{

const deadline =
new Date(item.deadline);


const today =
new Date();


const difference =
deadline.getTime()
-
today.getTime();


const days =
difference /
(1000*60*60*24);


return days <=30 && days>=0;


}).length;




const formatNumber=(num:number)=>

language==="fa"

?

new Intl.NumberFormat(
"fa-IR"
).format(num)

:

num.toString();





if(loading){

return (

<main className="
flex
min-h-[60vh]
items-center
justify-center
">

<p className="
text-xl
font-semibold
dark:text-white
">

{t.loading}

</p>

</main>

);

}




return (
<ProtectedRoute>
<main

dir={
language==="fa"
?
"rtl"
:
"ltr"
}

className="
mx-auto
max-w-7xl
px-6
py-12
"

>



<h1
className="
mb-10
text-4xl
font-bold
text-slate-900
dark:text-white
"
>

{t.title}

</h1>





<div className="
grid
gap-6
md:grid-cols-2
xl:grid-cols-4
">



<Card
icon={<Briefcase/>}
value={items.length}
label={t.total}
/>


<Card
icon={<Building2/>}
value={count("Job")}
label={t.jobs}
/>


<Card
icon={<GraduationCap/>}
value={count("Scholarship")}
label={t.scholarships}
/>


<Card
icon={<Heart/>}
value={count("Internship")}
label={t.internships}
/>


<Card
icon={<Globe/>}
value={count("Remote Work")}
label={t.remote}
/>


<Card
icon={<BookOpen/>}
value={count("Training")}
label={t.training}
/>


<Card
icon={<Clock/>}
value={expiring}
label={t.expiring}
/>


</div>






<div className="
mt-12
rounded-2xl
bg-white
p-8
shadow
dark:bg-slate-800
">

<DashboardChart/>

</div>







<div className="
mt-12
rounded-2xl
bg-white
p-8
shadow
dark:bg-slate-800
">


<h2 className="
mb-6
text-2xl
font-bold
dark:text-white
">

{t.recent}

</h2>



{
items.length===0

?

<p className="dark:text-white">
{t.empty}
</p>


:

<div className="space-y-4">


{
items
.slice(-5)
.reverse()
.map(item=>(


<div

key={item.id}

className="
rounded-xl
border
p-4
dark:border-slate-700
"

>

<h3 className="
font-bold
dark:text-white
">

{
language==="fa" &&
item.titleFa

?
item.titleFa

:

item.title

}

</h3>


<p className="
text-slate-500
dark:text-slate-300
">

{item.organization}

</p>


</div>


))

}



</div>

}


</div>






</main>
</ProtectedRoute>

);


}




function Card({

icon,
value,
label,

}:{

icon:React.ReactNode;
value:number;
label:string;

}){


return (

<div className="
rounded-2xl
bg-blue-600
p-6
text-white
">


<div>
{icon}
</div>


<h2 className="
mt-4
text-4xl
font-bold
">

{
new Intl.NumberFormat()
.format(value)
}

</h2>


<p>
{label}
</p>


</div>

);

}