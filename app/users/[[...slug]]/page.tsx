import React, { Suspense } from 'react';
import UserTable from "@/app/users/UserTable";
import Link from "next/link";
interface Props {
  searchParams: {
    sortOrder: 'name' | 'email'
  }
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users {sortOrder ? `by ${sortOrder}`: ''}</h1>
      <Link href='/users/new' className='btn'>New User</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortBy={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage