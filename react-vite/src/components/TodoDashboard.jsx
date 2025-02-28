import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import { Link } from "react-router";
import useFilterParmas from "../hooks/useFilterParmas";
import useTodoQuery from "../hooks/useTodoQuery";

const TodoDashboard = () => {
  const selectedFilter = useFilterParmas();

  const { data: all } = useTodoQuery();

  const { data: completed } = useTodoQuery("completed");
  const { data: pending } = useTodoQuery("pending");

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Quick Access</h2>

      <ul className="flex flex-row flex-wrap gap-4">
        <li className="flex-[2]">
          <Link to="/" $selected={!selectedFilter}>
            <div>
              <FileCheck />
            </div>
            <p className="font-semibold text-xl">
              {all?.length} <br /> <span>All Tasks</span>
            </p>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="?filter=completed"
            className={`flex flex-col w-full h-[184px] bg-[#582be6] justify-between text-white p-5 rounded-2xl cursor-pointer $selected={selectedFilter === "completed" && "underline"}
          `}
          >
            <div>
              <LaptopMinimal />
            </div>
            <p className="font-semibold text-xl">
              {completed?.length} <br /> <span>Completed Tasks</span>
            </p>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="?filter=pending"
            className={`flex flex-col w-full h-[184px] bg-[#242424] justify-between text-white p-5 rounded-2xl cursor-pointer $selected={selectedFilter === "pending" && "underline"}
          `}
          >
            <div>
              <Video />
            </div>
            <p className="font-semibold text-xl">
              {pending?.length} <br /> <span>Pending Tasks</span>
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TodoDashboard;
