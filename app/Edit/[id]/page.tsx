"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { opportunities as demoData } from "@/data/opportunities";

import {
  getStoredOpportunities,
  updateOpportunity,
} from "@/lib/storage";

import { Opportunity } from "@/types/opportunity";
import { useLanguage } from "@/context/LanguageContext";


const text = {
  en: {
    title: "Edit Opportunity",
    notFound: "Opportunity not found",
    success: "Opportunity updated successfully!",

    fields: {
      title: "Title",
      organization: "Organization",
      category: "Category",
      location: "Location",
      type: "Type",
      deadline: "Deadline",
      description: "Description",
      requirements: "Requirements",
      tags: "Tags",
      applyLink: "Apply Link",
    },

    save: "Save Changes",
    saving: "Saving...",


    categories: {
      Job:"Job",
      Internship:"Internship",
      Scholarship:"Scholarship",
      "Remote Work":"Remote Work",
      Training:"Training",
      Volunteer:"Volunteer",
      "Online Course":"Online Course",
    },


    types:{
      Remote:"Remote",
      "On-site":"On-site",
      Hybrid:"Hybrid",
    },


    errors:{
      required:"This field is required",
      link:"Enter a valid URL"
    }
  },


  fa:{
    title:"ویرایش فرصت",
    notFound:"فرصت یافت نشد",
    success:"فرصت با موفقیت ویرایش شد!",

    fields:{
      title:"عنوان",
      organization:"سازمان",
      category:"دسته‌بندی",
      location:"موقعیت",
      type:"نوع",
      deadline:"آخرین مهلت",
      description:"توضیحات",
      requirements:"شرایط و مهارت‌ها",
      tags:"برچسب‌ها",
      applyLink:"لینک درخواست",
    },


    save:"ذخیره تغییرات",
    saving:"در حال ذخیره...",


    categories:{
      Job:"وظیفه",
      Internship:"کارآموزی",
      Scholarship:"بورسیه",
      "Remote Work":"دورکاری",
      Training:"آموزش",
      Volunteer:"داوطلبی",
      "Online Course":"دوره آنلاین",
    },


    types:{
      Remote:"دورکاری",
      "On-site":"حضوری",
      Hybrid:"ترکیبی",
    },


    errors:{
      required:"این فیلد الزامی است",
      link:"لینک معتبر وارد کنید"
    }
  }
};



export default function EditOpportunityPage(){

const params = useParams();

const id = params.id as string;

const router=useRouter();

const {language}=useLanguage();

const t=text[language];


const [formData,setFormData]=
useState<Opportunity | null>(null);


const [loading,setLoading]=useState(true);

const [saving,setSaving]=useState(false);

const [success,setSuccess]=useState(false);


const [errors,setErrors]=useState<
Record<string,string>
>({});



useEffect(()=>{


const stored=getStoredOpportunities();


const all=[
...demoData,
...stored
];


const found=all.find(
(item)=>item.id===String(id)
);


if(found){

setFormData({
...found
});

}


setLoading(false);


},[id]);




function validate(){

const newErrors:
Record<string,string>={};


if(!formData?.title)
newErrors.title=t.errors.required;


if(!formData?.organization)
newErrors.organization=t.errors.required;


if(!formData?.location)
newErrors.location=t.errors.required;


if(!formData?.description)
newErrors.description=t.errors.required;



if(
formData &&
!formData.applyLink.startsWith("http")
){

newErrors.applyLink=t.errors.link;

}



setErrors(newErrors);


return Object.keys(newErrors).length===0;

}




function handleChange(
e:
React.ChangeEvent<
HTMLInputElement |
HTMLTextAreaElement |
HTMLSelectElement
>
){

const {name,value}=e.target;


setFormData(prev=>({

...prev!,

[name]:value

}));

}



function handleArrayChange(
name:"requirements"|"tags",
value:string
){

setFormData(prev=>({

...prev!,

[name]:

value
.split(",")
.map(item=>item.trim())

}));

}




function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


if(!validate()) return;


setSaving(true);


updateOpportunity(
formData!
);


setSaving(false);

setSuccess(true);



setTimeout(()=>{

router.push("/opportunities");

},1500);


}





if(loading){

return (

<main className="flex min-h-[60vh] items-center justify-center">

<p className="text-xl font-semibold dark:text-white">

Loading...

</p>

</main>

);

}




if(!formData){

return (

<main className="mx-auto max-w-5xl px-6 py-20">

<h1 className="text-3xl font-bold dark:text-white">

{t.notFound}

</h1>

</main>

);

}




return (

<main

dir={
language==="fa"
?"rtl"
:"ltr"
}

className="mx-auto max-w-4xl px-6 py-16"

>


<h1 className="mb-8 text-4xl font-bold dark:text-white">

{t.title}

</h1>



{success &&

<div className="
mb-6 rounded-xl
bg-green-100 p-4
text-green-700
">

{t.success}

</div>

}




<form

onSubmit={handleSubmit}

className="
space-y-6
rounded-2xl
border
bg-white
p-8
shadow-lg
dark:border-slate-700
dark:bg-slate-800
"

>


{[
"title",
"organization",
"location",

].map(field=>(

<div key={field}>

<label className="mb-2 block font-semibold dark:text-white">

{
t.fields[field as keyof typeof t.fields]
}

</label>


<input

name={field}

value={(formData as any)[field]}

onChange={handleChange}

className="
w-full rounded-lg
border p-3
dark:bg-slate-900
dark:text-white
"

/>


{
errors[field] &&
<p className="text-sm text-red-500">
{errors[field]}
</p>
}


</div>

))}




<select

name="category"

value={formData.category}

onChange={handleChange}

className="
w-full rounded-lg border p-3
dark:bg-slate-900 dark:text-white
"

>

{
Object.entries(t.categories)
.map(([key,value])=>(

<option value={key} key={key}>

{value}

</option>

))

}

</select>




<select

name="type"

value={formData.type}

onChange={handleChange}

className="
w-full rounded-lg border p-3
dark:bg-slate-900 dark:text-white
"

>

{
Object.entries(t.types)
.map(([key,value])=>(

<option value={key} key={key}>

{value}

</option>

))

}

</select>




<input

type="date"

name="deadline"

value={formData.deadline}

onChange={handleChange}

className="
w-full rounded-lg border p-3
dark:bg-slate-900 dark:text-white
"

/>





<textarea

name="description"

value={formData.description}

onChange={handleChange}

placeholder={t.fields.description}

rows={5}

className="
w-full rounded-lg border p-3
dark:bg-slate-900 dark:text-white
"

/>




<textarea

value={formData.requirements.join(", ")}

onChange={(e)=>
handleArrayChange(
"requirements",
e.target.value
)
}

rows={4}

className="
w-full rounded-lg border p-3
dark:bg-slate-900 dark:text-white
"

/>




<input

value={formData.tags.join(", ")}

onChange={(e)=>
handleArrayChange(
"tags",
e.target.value
)
}

className="
w-full rounded-lg border p-3
dark:bg-slate-900 dark:text-white
"

/>




<input

value={formData.applyLink}

name="applyLink"

onChange={handleChange}

className="
w-full rounded-lg border p-3
dark:bg-slate-900 dark:text-white
"

/>



{
errors.applyLink &&
<p className="text-sm text-red-500">
{errors.applyLink}
</p>
}




<button

disabled={saving}

className="
w-full rounded-xl
bg-blue-600 py-3
font-semibold text-white
hover:bg-blue-700
disabled:opacity-50
"

>

{
saving
?t.saving
:t.save
}

</button>



</form>


</main>

);

}