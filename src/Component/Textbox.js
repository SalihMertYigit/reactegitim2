export default function Component(props) {
    return (
      <div className="comp1">
        <img src={props.resimcomponent} width="40px"></img>
        {props.yazi}
        
      </div>
    );
  }
  