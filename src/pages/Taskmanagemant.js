import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

const Content = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState({
    Title: "",
    description: "",
    Duedate: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [search, setSearch] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  // Show Add/Edit Task Modal
  const handleShowTaskModal = () => {
    setNewTask({ Title: "", description: "", Duedate: "" });
    setEditIndex(null);
    setShowTaskModal(true);
  };

  // Hide Add/Edit Task Modal
  const handleCloseTaskModal = () => setShowTaskModal(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page after search
  };

  // Filtered task list based on search input
  const filteredTasks = task.filter((t) =>
    t.Title.toLowerCase().includes(search.toLowerCase())
  );

  // Paginate tasks
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Add new task
  const addTask = () => {
    if (newTask.Title && newTask.description && newTask.Duedate) {
      setTask((prevTasks) => [...prevTasks, newTask]);
      handleCloseTaskModal();
    }
  };

  // Edit existing task
  const editTask = (index) => {
    setNewTask(task[index]);
    setEditIndex(index);
    setShowTaskModal(true);
  };

  // Update task after editing
  const updateTask = () => {
    if (
      editIndex !== null &&
      newTask.Title &&
      newTask.description &&
      newTask.Duedate
    ) {
      const updatedTasks = [...task];
      updatedTasks[editIndex] = newTask;
      setTask(updatedTasks);
      handleCloseTaskModal();
    }
  };

  // Confirm delete modal
  const confirmDelete = (index) => {
    setTaskToDelete(index);
    setShowDeleteModal(true);
  };

  // Delete task function
  const deleteTask = () => {
    if (taskToDelete !== null) {
      setTask((prevTasks) => prevTasks.filter((_, i) => i !== taskToDelete));
      setShowDeleteModal(false);
      setTaskToDelete(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-left mb-4">Task Manager</h2>
      <div className="d-flex justify-content-between align-items-center">
        <InputGroup className="mb-3 mt-3">
          <input
            className="border-outline-none"
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={handleSearch}
          />
        </InputGroup>
        <Button variant="primary" size="sm" onClick={handleShowTaskModal}>
          Add New Task
        </Button>
      </div>

      <div className="mt-4">
        <table className="table-striped text-center custom-table">
          <thead className="table-header">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.length > 0 ? (
              currentTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.Title}</td>
                  <td>{task.description}</td>
                  <td>{task.Duedate}</td>
                  <td>
                    <button
                      className="btn btn-outline-dark btn-sm mx-1"
                      onClick={() => editTask(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-outline-dark btn-sm mx-1"
                      onClick={() => confirmDelete(index)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No tasks found</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center mt-3">
            {Array.from(
              { length: Math.ceil(filteredTasks.length / tasksPerPage) },
              (_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button onClick={() => paginate(i + 1)} className="page-link">
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* Add/Edit Task Modal */}
      <Modal show={showTaskModal} onHide={handleCloseTaskModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Edit Task" : "Add Task"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>Title</InputGroup.Text>
              <Form.Control
                type="text"
                name="Title"
                value={newTask.Title}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Description</InputGroup.Text>
              <Form.Control
                type="text"
                name="description"
                value={newTask.description}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Due Date</InputGroup.Text>
              <Form.Control
                type="date"
                name="Duedate"
                value={newTask.Duedate}
                onChange={handleInputChange}
                required
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTaskModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={editIndex !== null ? updateTask : addTask}
          >
            {editIndex !== null ? "Update Task" : "Add Task"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirm Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Content;
