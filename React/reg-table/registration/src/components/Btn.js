   export default function Btn(props) {
    return (
        <div>
        <input type="submit" value={props.title} style={{width:'120px', margin:'0 200px', border:'2px solid black',borderRadius:'6px' }} />
        </div>
    )
   }