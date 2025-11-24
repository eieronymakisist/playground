import Table from 'react-bootstrap/Table';
import {User} from "../types/user"


type UserTableProps = {
  userData: User[];
};

const UserTable = ({ userData }: UserTableProps) => {
    return(
        <Table striped bordered hover>
            
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead>
        <tbody>
            {userData && userData.length > 0 ? (
            userData.map((user : any) => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>   {/* make sure this field exists! */}
                </tr>
            ))
            ) : (
            <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>
                No users found
                </td>
            </tr>
            )}
        </tbody>
        </Table>
    )
}


export default UserTable
