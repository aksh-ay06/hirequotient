"use client"
import React from 'react'
import { User, columns } from "./columns"
import { DataTable } from "./data-table"
import useUsers from '@/utils/useUsers'

const Userpage = () => {
    
    const data = useUsers();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Userpage;