function TextBox(props) {
  return (
    <div className="form-control bg-white text-black w-[320px]">
      <label className="label">
        <span className="label-text text-black">{props.label}</span>
      </label>
      <label className="input-group">
        <input type={props.type} placeholder={props.label} className="bg-white input input-bordered w-full" />
      </label>
    </div>
  );
}

export default TextBox;
