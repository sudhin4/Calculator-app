


function Header({name,image}){
    return(
        <>
        <h1 className="heading">{name}</h1>
        <div className="Image">
                    <img src={image} alt="" className="backgroundImage" />
        </div>
        </>
    );
}
export default Header;