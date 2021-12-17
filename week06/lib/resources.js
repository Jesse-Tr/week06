// library for "resources" firestore collection
import firebase from "./firebase";

//returns all valid ids for getStaticPaths()
export async function getResourceIds(){

  let output = [];
// wrap try around our code to catch any errors that happen
    try{

    //retreive all documents from firestore collection named "resources"
    const snapshot = await firebase.collection("resources").get();
    
    // lloop through and build out an array of all data from firestone collection documents
    snapshot.forEach(
        (doc) => {
          output.push(
            {
              params: {
                id:doc.id
              }
            }
          );
        }
    );
  } catch(error){
    console.error(error);
  }
  return output;
}

// returns one documents data for matching id for getStaticPaths()

export async function getResourceData(idRequested){
  //retrieve a single document from our firestone collection matched by unqique id
  const doc = await firebase.collection("resources").doc(idRequested).get();
  let output;
  if(!doc.empty){
    output = { id:doc.id, data:doc.data()};

  } else {
    output = null;
  }

  return output;
}
