'use client'
import React from 'react'
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from '@tanstack/react-table';
import PageTitle from '@/components/ui/PageTitle';
import { cn } from '@/lib/utils';

type Props = {}

export default function SettingsPage({ }: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

interface Setting {
  category: string;
  value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value"
  }
];


const data: Setting[] = [
  {
    category: "Account",
    value: true
  },
  {
    category: "Notifications",
    value: false
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Theme",
    value: "Dark"
  }
];
