export const MainModal = () => {
  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="form">
          <div className="inputWrapper">
            <input className="input" type="text" placeholder="token 0" />
            <div className="inputDetail">HI</div>
          </div>
          <div className="inputWrapper">
            <input className="input" type="text" placeholder="token 1" />
            <div className="inputDetail">WU</div>
          </div>
          <button className="button">Place Trade</button>
        </div>
      </div>
    </div>
  );
};
