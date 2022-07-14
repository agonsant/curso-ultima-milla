import "./MenuMoves.scss";
const MenuMoves = ({pokemon}:any) => {
  return (
    <div className="menu-moves">
      <div className="menu-moves__left">
        <p>What should #{pokemon.name} do?</p>
      </div>
      <div className="menu-moves__right">
        <div className="btn btn--fight">
          <p>FIGHT</p>
        </div>
        <div className="btn btn--bag">
          <p>BAG</p>
        </div>
        <div className="btn btn--pokemon">
          <p>POKéMON</p>
        </div>
        <div className="btn btn--run">
          <p>RUN</p>
        </div>
      </div>
    </div> 
  )
};

export default MenuMoves;