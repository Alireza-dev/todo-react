import Todos from "./components/Todos";

function App() {
    let items = [
        {
            id: 1,
            title: "todo 1",
            status: false,
        },
        {
            id: 2,
            title: "todo 2",
            status: true,
        },
        {
            id: 3,
            title: "todo 3",
            status: false,
        },
        {
            id: 4,
            title: "todo 4",
            status: true,
        }
    ];

    let items2 = [
        {
            id: 1,
            title: "todo 1",
            status: false,
        },
        {
            id: 2,
            title: "todo 2",
            status: false,
        },
        {
            id: 3,
            title: "todo 3",
            status: false,
        },
        {
            id: 4,
            title: "todo 4",
            status: false,
        }
    ];

    return (
        <div className="bg-gray-100">
            <Todos items={items} />
            <Todos items={items2} />
        </div>
    );
}

export default App;
