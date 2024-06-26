// import Card, { CardProps } from "@/components/card";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/ui/PageTitle";
import { Activity, DollarSign, LineChart, User, Users } from "lucide-react";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import Image from "next/image";

const cardData: CardProps[] = [
  {
    label: "Total Assets",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Annual Net Worth Trend",
    amount: "5.4%",
    discription: "",
    icon: DollarSign
  },
  {
    label: "Personal Runway",
    amount: "> 18 Months",
    discription: "",
    icon: LineChart
  },
  {
    label: "SBSS Score",
    amount: "155",
    discription: "",
    icon: LineChart
  },
  {
    label: "Sales",
    amount: "+12,568",
    discription: "+19% from last month",
    icon: Users
  },
  {
    label: "Active Now",
    amount: "+845",
    discription: "+302 since last hour",
    icon: Activity
  },
  {
    label: "Subscriptions",
    amount: "+3254",
    discription: "+188.55% from last month",
    icon: User
  }
]

const userSalesData: SalesProps[] = [
  {
    name: "Ronak Mahidharia",
    email: "mahidharia.r@email.com",
    saleAmount: "+1,999.00"
  },

  {
    name: "Jackson Alex",
    email: "alex.j@email.com",
    saleAmount: "+1,857.00"
  },

  {
    name: "Willam Birdge",
    email: "bridge.w@email.com",
    saleAmount: "+84.00"
  },

  {
    name: "Sofia Davis",
    email: "davis.sofia@email.com",
    saleAmount: "+945.00"
  }
]

export default function Home() {
  return (

    <div className="flex flex-col gap-5 w-full">

      <PageTitle title="Hi, Welcome back 👋" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">

        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">

        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="flex justify-between gap-4">

          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">You made 308 sales this month</p>
          </section>

          {userSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

      </section>
    </div>
  );
}
