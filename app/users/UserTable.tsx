import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";
interface User {
  id: number;
  name: string,
  username: string;
  email: string;
}

type SortTypes = 'name' | 'email';
interface Props {
  sortBy: SortTypes | undefined
}
const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const sortedUsers = sortBy ? sort(users).asc(u => u[sortBy]) : users;

  return (
    <>
      <table className='table table-bordered'>
        <thead>
        <tr>
          <th>
            <Link href='/users?sortOrder=name'>Name</Link>
          </th>
          <th>
            <Link href='/users?sortOrder=email'>Email</Link>
          </th>
        </tr>
        </thead>
        <tbody>
        {sortedUsers.map(user => (<tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;