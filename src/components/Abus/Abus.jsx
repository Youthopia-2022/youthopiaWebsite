import "./Abus.css";

const Abus = (props) => {
  return (
    <div>
      <p className="heading mb-4 capitalize">{props.title}</p>
      {props.heads.length > 0 && (
        <>
          {props.heads.map((item, id) => (
            <div key={id} className="my-1">
              <p className="base">{item.membername}</p>
              <p className="base2">{item.branchyear}</p>
            </div>
          ))}
        </>
      )}
      {props.members.map((member, id) => (
        <div key={id}>
          <p className="base">{member.membername}</p>
          <p className="base2">{member.branchyear}</p>
        </div>
      ))}
    </div>
  );
};

export default Abus;
