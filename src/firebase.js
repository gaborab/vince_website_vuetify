import {initializeApp} from "firebase/app";
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
//import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }; // removed firebase keys
  
  // Initialize Firebase
const app=initializeApp(firebaseConfig);

const storage = getStorage(app);

export async function getSubfolderData(imgTopic){
    const storageFolderRef=ref(storage, `/${imgTopic}`)
    
    let error="";
    let subfoldersData=[];
    listAll(storageFolderRef).then( async (res) => {
        
        res.prefixes.forEach( async (folderRef) => {
            const coverUrl = await getCoverUrl(folderRef);

            
            subfoldersData.push({
                'name' : folderRef.name,
                'coverUrl' : coverUrl
            });
            
        }).then();

    }).catch((err) =>{
        error=err;
    });
    
    if (error.length==0) {return subfoldersData;}
    else {return [], true}
}

export async function getImgUrls(imgTopic, subfolder){
    const storageFolderRef=ref(storage, `/${imgTopic}/${subfolder}`);

    let imgUrls=[];
    let error="";

    listAll(storageFolderRef).then((res) => {
        
        res.items.forEach(async (itemRef) =>{
            
            await getDownloadURL(itemRef).then((url) => {
                imgUrls.push(url);
            }).catch((err) => {
                error=err;
            });
        });
    }).catch((err) => {
        error=err;
    });

    if (error.length==0) {return imgUrls}
    else {return [], true}
}


async function getCoverUrl(folderRef){
    

    const coverRef=ref(storage, folderRef.fullPath+'/cover.jpg');

    const coverUrl= await getDownloadURL(coverRef);

    // for(const itemRef of subfolderContent.items){
    //     if(itemRef.name.includes('cover')){
            
    //         getDownloadURL(itemRef).then((url) => {
    //             subfolderCoverImageUrl=url;
    //         });
            
    //         console.log('pushed');
    //         break;
    //     }
    // }
    return coverUrl;
}


//const db= firebaseApp.firestore();