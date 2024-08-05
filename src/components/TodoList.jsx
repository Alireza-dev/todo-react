import TodoListItem from "./TodoListItem";

export default function TodoList({items}) {

    return (
        <ul className="list-reset">
            {items.map((item)=> (
                <TodoListItem key={item.id} item={item} />
            ))}
        </ul>
    );
}
