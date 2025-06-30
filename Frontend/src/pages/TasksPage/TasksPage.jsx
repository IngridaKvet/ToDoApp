import "./tasksPage.css";
import Navigation from "../../components/Navigation/Navigation";
import TasksSection from "../../components/TasksSection/TasksSection";
const TasksPage = () => {
  return (
    <div className="tasksPage">
      <Navigation />
      <TasksSection />
    </div>
  );
};

export default TasksPage;
