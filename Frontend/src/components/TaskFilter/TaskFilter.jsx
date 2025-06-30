import "./taskFilter.css";

const TaskFilters = ({ filters, setFilters }) => {
  return (

    // NOT USED - CONNECT TO DB LATER?
    <div className="task-filters">
      <select
        value={filters.dueDate}
        onChange={(e) => setFilters(prev => ({ ...prev, dueDate: e.target.value }))}
      >
        <option value="">Due Date</option>
        <option value="asc">Oldest first</option>
        <option value="desc">Newest first</option>
      </select>

      <select className="filter__select"
        value={filters.priority}
        onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
      >
        <option value="">Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select
        value={filters.category}
        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
      >
        <option value="">Category</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="development">Personal Development</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
      >
        <option value="">Status</option>
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilters