const RadioButton = () => {
  return (
    <div className="flex gap-4">
      <div>
        <input type="radio" id="admin" name="role" />
        <label className="ml-2" htmlFor="admin">Admin</label>
      </div>
      <div>
        <input type="radio" id="user" name="role" />
        <label className="ml-2" htmlFor="user">User</label>
      </div>
    </div>
  );
};

export default RadioButton;
