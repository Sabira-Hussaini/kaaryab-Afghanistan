import OpportunityForm from "@/components/opportunity/OpportunityForm";


type Props = {
  searchParams?: Promise<{
    lang?: "en" | "fa";
  }>;
};


export default async function AddOpportunityPage({
  searchParams,
}: Props) {


  const params = await searchParams;


  const language =
    params?.lang === "fa"
      ? "fa"
      : "en";



  const text = {

    en: {

      title:
        "Add New Opportunity",

      description:
        "Share a job, internship, scholarship, training program, online course, or volunteer opportunity with the KaarYab community.",

      note:
        "All submitted opportunities are stored securely in your browser for demo purposes.",

    },


    fa: {

      title:
        "ثبت فرصت جدید",

      description:
        "یک فرصت شغلی، کارآموزی، بورسیه، دوره آنلاین، برنامه آموزشی یا داوطلبی را با کاربران کاریاب به اشتراک بگذارید.",

      note:
        "فرصت‌های ثبت شده برای نسخه دمو در مرورگر شما ذخیره می‌شوند.",

    },

  };



  const t = text[language];



  return (

    <main

      dir={
        language === "fa"
          ? "rtl"
          : "ltr"
      }

      className="
      mx-auto
      max-w-5xl
      px-6
      py-20
      "

    >


      <section
        className="
        mb-12
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        p-10
        text-white
        shadow-lg
        "

      >


        <h1 className="
        text-4xl
        font-extrabold
        md:text-5xl
        ">

          {t.title}

        </h1>



        <p className="
        mt-4
        max-w-3xl
        text-lg
        text-blue-100
        ">

          {t.description}

        </p>


        <p className="
        mt-4
        text-sm
        text-blue-200
        ">

          {t.note}

        </p>


      </section>





      <section>

        <OpportunityForm />

      </section>



    </main>

  );
}