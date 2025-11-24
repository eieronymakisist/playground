import { useEffect, useState} from "react"
import { getUsers } from "../api/user"
import { User } from "../types/user"
import UserTable from "../components/UserTable"

const UserList: React.FC = () => {
    const [userData, setUserData] = useState<User[]>([])

    useEffect(() => {
        getUsers().then(users => setUserData(users)).catch(error => console.log('Could not fetch any users 🤷‍♂️'))
    }, []);

    return (
        <div className="UserList">
            <div className="userTableContainer w-75 ms-auto me-auto mt-5 mb-5">
                {<UserTable userData={userData}/>}
            </div>
        </div>)
}

export default UserList;