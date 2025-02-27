import React, { useState } from 'react';
import './TaskManager.css'; 

const Taskmanager = () => {
  const [users, setUsers] = useState([
   
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

 
  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: '', email: '', role: '' });
      setShowAddModal(false);
    }
  };

  const handleEditUser = () => {
    if (selectedUser.name && selectedUser.email && selectedUser.role) {
      setUsers(users.map(user => (user.id === selectedUser.id ? selectedUser : user)));
      setShowEditModal(false);
    }
  };

  const handleDeleteUser = () => {
    setUsers(users.filter(user => user.id !== selectedUser.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="manage-users-container">
      <h1>Manage Users</h1>
      <button className="add-user-button" onClick={() => setShowAddModal(true)}>
        Add User
      </button>

      
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="edit-button" onClick={() => { setSelectedUser(user); setShowEditModal(true); }}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => { setSelectedUser(user); setShowDeleteModal(true); }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add User</h2>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            />
            <div className="modal-actions">
              <button className="save-button" onClick={handleAddUser}>
                Add
              </button>
              <button className="cancel-button" onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {showEditModal && selectedUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit User</h2>
            <input
              type="text"
              placeholder="Name"
              value={selectedUser.name}
              onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={selectedUser.email}
              onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              value={selectedUser.role}
              onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
            />
            <div className="modal-actions">
              <button className="save-button" onClick={handleEditUser}>
                Save
              </button>
              <button className="cancel-button" onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {showDeleteModal && selectedUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Delete User</h2>
            <p>Are you sure you want to delete <strong>{selectedUser.name}</strong>?</p>
            <div className="modal-actions">
              <button className="delete-button" onClick={handleDeleteUser}>
                Delete
              </button>
              <button className="cancel-button" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taskmanager;