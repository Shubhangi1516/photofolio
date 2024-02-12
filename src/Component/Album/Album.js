import styles from "./album.module.css";

export default function Album(props){

    var{info,setOpenAlbum}=props;

    function handleClick(){
        setOpenAlbum({albumId:info.id,open:true});
    }

    return(
        <>
          {/* main container */}
          <div className={styles.cardContainer}>

               {/* album logo */}
               <div className={styles.cardImage} onClick={handleClick}></div>

               {/* album name */}
               <div className={styles.cardName}>
                   {info.Albumname}
               </div>
               
          </div>
        </>
    )
}