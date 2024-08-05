import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";


export default function TodoListItem({item}) {


    return (
            <li className="relative flex items-center justify-between px-2 py-6 border-b">
                <div>
                    {item.status 
                        ? 
                        <input type="checkbox" checked onChange={() => ''} className="" />                    
                        :
                        <input type="checkbox" className="" />
                    }
                    <p className="inline-block mt-1 ml-2 text-gray-600">{item.title}</p>
                </div>
                <button type="button" className="absolute right-0 flex items-center space-x-1">
                    <EditIcon />   
                    <DeleteIcon />                 
                </button>
            </li>

    );
}
