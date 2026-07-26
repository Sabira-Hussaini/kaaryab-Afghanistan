"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addOpportunity } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";

import {
  opportunitySchema,
  OpportunityFormData,
} from "@/lib/validation";

const text = {
  en: {
    heading: "Post a New Opportunity",

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

    submit: "Add Opportunity",
    loading: "Saving...",
    success: "✅ Opportunity Added Successfully!",
    error: "Something went wrong. Try again.",

    selectCategory: "Select Category",
    selectType: "Select Type",

    categories: {
      Job: "Job",
      Internship: "Internship",
      Scholarship: "Scholarship",
      "Remote Work": "Remote Work",
      Training: "Training",
      Volunteer: "Volunteer",
      "Online Course": "Online Course",
    },

    types: {
      Remote: "Remote",
      "On-site": "On-site",
      Hybrid: "Hybrid",
    },

    placeholders: {
      title: "Frontend Developer Internship",
      organization: "Google",
      location: "Kabul / Remote",
      description:
        "Describe the opportunity...",
      requirements:
        "React, Next.js, Git",
      tags:
        "React, Next.js, Frontend",
      applyLink:
        "https://example.com/apply",
    },
  },


  fa: {
    heading: "ثبت فرصت جدید",

    title: "عنوان",
    organization: "سازمان",
    category: "دسته‌بندی",
    location: "موقعیت",
    type: "نوع",
    deadline: "آخرین مهلت",
    description: "توضیحات",
    requirements: "شرایط و مهارت‌ها",
    tags: "برچسب‌ها",
    applyLink: "لینک درخواست",

    submit: "ثبت فرصت",
    loading: "در حال ذخیره...",
    success: "✅ فرصت با موفقیت ثبت شد!",
    error: "خطایی رخ داد. دوباره تلاش کنید.",

    selectCategory:
      "دسته‌بندی را انتخاب کنید",

    selectType:
      "نوع را انتخاب کنید",

    categories: {
      Job: "وظیفه",
      Internship: "کارآموزی",
      Scholarship: "بورسیه",
      "Remote Work": "دورکاری",
      Training: "آموزش",
      Volunteer: "داوطلبی",
      "Online Course": "دوره آنلاین",
    },

    types: {
      Remote: "دورکاری",
      "On-site": "حضوری",
      Hybrid: "ترکیبی",
    },

    placeholders: {
      title: "کارآموز فرانت‌اند",
      organization: "نام سازمان",
      location: "کابل / آنلاین",
      description:
        "توضیحات فرصت...",
      requirements:
        "React، Next.js، Git",
      tags:
        "React، Next.js، Frontend",
      applyLink:
        "https://example.com/apply",
    },
  },
};


export default function OpportunityForm() {

  const { language } = useLanguage();

  const t = text[language];


  const [success,setSuccess] =
    useState(false);

  const [error,setError] =
    useState(false);



  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors,
      isSubmitting,
    },
  } = useForm<OpportunityFormData>({

    resolver:
      zodResolver(opportunitySchema),

  });



  async function onSubmit(
    data: OpportunityFormData
  ){

    try {

      const newOpportunity = {

        id: crypto.randomUUID(),

        title:data.title,

        organization:
          data.organization,

        category:
          data.category,

        location:
          data.location,

        type:
          data.type,

        deadline:
          data.deadline,

        description:
          data.description,


        requirements:
          data.requirements
          .split(",")
          .map(
            item=>item.trim()
          ),


        applyLink:
          data.applyLink,


        tags:
          data.tags
          .split(",")
          .map(
            tag=>tag.trim()
          ),

        featured:false,

      };


      addOpportunity(
        newOpportunity
      );


      setSuccess(true);
      setError(false);


      reset();


      window.scrollTo({
        top:0,
        behavior:"smooth",
      });



      setTimeout(()=>{
        setSuccess(false);
      },3000);



    }catch{

      setError(true);
      setSuccess(false);

    }

  }



return (

<form

dir={
 language==="fa"
 ? "rtl"
 : "ltr"
}

onSubmit={
 handleSubmit(onSubmit)
}

className="
space-y-7
rounded-2xl
border
border-slate-200
bg-white
p-8
shadow-lg
dark:border-slate-700
dark:bg-slate-800
"

>


<h2 className="
text-3xl
font-bold
text-slate-900
dark:text-white
">

{t.heading}

</h2>



{success && (

<div className="
rounded-xl
bg-green-100
p-4
text-green-700
dark:bg-green-900/30
dark:text-green-300
">

{t.success}

</div>

)}



{error && (

<div className="
rounded-xl
bg-red-100
p-4
text-red-700
dark:bg-red-900/30
dark:text-red-300
">

{t.error}

</div>

)}



{/* Title */}
<div>
  <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
    {t.title}
  </label>

  <input
    id="title"
    autoFocus
    placeholder={t.placeholders.title}
    {...register("title")}
    className="
    w-full rounded-lg border
    border-slate-300
    bg-white p-3
    text-slate-900
    outline-none
    focus:border-blue-500
    dark:border-slate-600
    dark:bg-slate-900
    dark:text-white
    "
  />

  {errors.title && (
    <p className="mt-1 text-sm text-red-500">
      {errors.title.message}
    </p>
  )}
</div>


{/* Organization */}
<div>
  <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
    {t.organization}
  </label>

  <input
    placeholder={t.placeholders.organization}
    {...register("organization")}
    className="
    w-full rounded-lg border
    border-slate-300
    bg-white p-3
    text-slate-900
    outline-none
    focus:border-blue-500
    dark:border-slate-600
    dark:bg-slate-900
    dark:text-white
    "
  />

  {errors.organization && (
    <p className="mt-1 text-sm text-red-500">
      {errors.organization.message}
    </p>
  )}
</div>


{/* Category */}
<div>
<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.category}
</label>

<select
{...register("category")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
>

<option value="">
{t.selectCategory}
</option>

<option value="Job">
{t.categories.Job}
</option>

<option value="Internship">
{t.categories.Internship}
</option>

<option value="Scholarship">
{t.categories.Scholarship}
</option>

<option value="Remote Work">
{t.categories["Remote Work"]}
</option>

<option value="Training">
{t.categories.Training}
</option>

<option value="Volunteer">
{t.categories.Volunteer}
</option>

<option value="Online Course">
{t.categories["Online Course"]}
</option>

</select>


{errors.category && (
<p className="mt-1 text-sm text-red-500">
{errors.category.message}
</p>
)}

</div>


{/* Location */}
<div>

<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.location}
</label>

<input
placeholder={t.placeholders.location}
{...register("location")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
text-slate-900
outline-none
focus:border-blue-500
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
/>

{errors.location && (
<p className="mt-1 text-sm text-red-500">
{errors.location.message}
</p>
)}

</div>


{/* Type */}
<div>

<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.type}
</label>


<select
{...register("type")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
>

<option value="">
{t.selectType}
</option>

<option value="Remote">
{t.types.Remote}
</option>

<option value="On-site">
{t.types["On-site"]}
</option>

<option value="Hybrid">
{t.types.Hybrid}
</option>

</select>


{errors.type && (
<p className="mt-1 text-sm text-red-500">
{errors.type.message}
</p>
)}

</div>


{/* Deadline */}
<div>

<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.deadline}
</label>


<input
type="date"
{...register("deadline")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
text-slate-900
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
/>


{errors.deadline && (
<p className="mt-1 text-sm text-red-500">
{errors.deadline.message}
</p>
)}

</div>


{/* Description */}
<div>

<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.description}
</label>


<textarea
rows={5}
placeholder={t.placeholders.description}
{...register("description")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
text-slate-900
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
/>


{errors.description && (
<p className="mt-1 text-sm text-red-500">
{errors.description.message}
</p>
)}

</div>


{/* Requirements */}
<div>

<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.requirements}
</label>


<textarea
rows={4}
placeholder={t.placeholders.requirements}
{...register("requirements")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
text-slate-900
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
/>


{errors.requirements && (
<p className="mt-1 text-sm text-red-500">
{errors.requirements.message}
</p>
)}

</div>


{/* Tags */}
<div>

<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.tags}
</label>


<input
placeholder={t.placeholders.tags}
{...register("tags")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
text-slate-900
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
/>


{errors.tags && (
<p className="mt-1 text-sm text-red-500">
{errors.tags.message}
</p>
)}

</div>


{/* Apply Link */}
<div>

<label className="mb-2 block font-semibold text-slate-900 dark:text-white">
{t.applyLink}
</label>


<input
type="url"
placeholder={t.placeholders.applyLink}
{...register("applyLink")}
className="
w-full rounded-lg border
border-slate-300
bg-white p-3
text-slate-900
dark:border-slate-600
dark:bg-slate-900
dark:text-white
"
/>


{errors.applyLink && (
<p className="mt-1 text-sm text-red-500">
{errors.applyLink.message}
</p>
)}

</div>


{/* Submit Button */}
<button
type="submit"
disabled={isSubmitting}
className="
w-full rounded-xl
bg-blue-600 py-3
text-lg font-semibold
text-white
transition
hover:bg-blue-700
disabled:opacity-60
"
>

{
isSubmitting
? t.loading
: t.submit
}

</button>
</form>

);

}