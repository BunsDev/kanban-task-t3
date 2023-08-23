import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import EditTask from "./EditTask";
import { useEditTask } from "~/lib/hooks/use-edit-task";

export default function TaskSettings() {
  const onOpen = useEditTask((state) => state.onOpen);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreVertical className="h-7 w-7 cursor-pointer text-gray-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 bg-board-background">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onOpen}>Edit Task</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500 focus:text-red-500">
          Delete Task
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
